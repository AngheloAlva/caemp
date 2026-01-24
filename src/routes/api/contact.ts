import { createFileRoute } from "@tanstack/react-router"
import { Resend } from "resend"
import { z } from "zod"
import ContactEmail from "../../../emails/contact-email"

const contactSchema = z.object({
	fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z.string().email("Email inválido"),
	phone: z.string().min(9, "Teléfono inválido"),
	message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
	businessLine: z.enum(["otec", "crecimiento", "plus", "grupo"]),
})

const businessLineNames = {
	otec: "OTEC",
	crecimiento: "Crecimiento",
	plus: "Plus",
	grupo: "Grupo CAEMP",
}

export const Route = createFileRoute("/api/contact")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				try {
					// Parse body
					const body = await request.json()

					// Validate body
					const result = contactSchema.safeParse(body)
					if (!result.success) {
						return Response.json(
							{
								error: "Datos inválidos",
								details: result.error.issues,
							},
							{ status: 400 }
						)
					}

					const data = result.data

					// Generate idempotency key based on email and timestamp (rounded to minute)
					const timestamp = Math.floor(Date.now() / 60000) // Round to minute
					const idempotencyKey = `contact-${data.businessLine}/${data.email}/${timestamp}`

					// Initialize Resend
					const resend = new Resend(process.env.RESEND_API_KEY)

					const lineName = businessLineNames[data.businessLine]

					// Send email with React Email component
					const { data: emailData, error } = await resend.emails.send(
						{
							from: "Caemp <web@grupocaemp.cl>",
							to: "anghelo.alva.q@gmail.com",
							subject: `Nuevo mensaje de contacto - ${lineName}`,
							react: ContactEmail({
								fullName: data.fullName,
								email: data.email,
								phone: data.phone,
								message: data.message,
								businessLine: data.businessLine,
							}),
							tags: [
								{ name: "type", value: "contact" },
								{ name: "business_line", value: data.businessLine },
							],
						},
						{
							// Idempotency key prevents duplicate sends
							idempotencyKey,
						}
					)

					if (error) {
						console.error("Error sending email:", error)

						// Handle specific error codes
						if (error.statusCode === 429) {
							return Response.json(
								{
									error: "Demasiadas solicitudes, intenta nuevamente en un momento",
									code: "RATE_LIMITED",
								},
								{ status: 429 }
							)
						}

						if (error.statusCode === 422) {
							return Response.json(
								{
									error: "Datos de email inválidos",
									details: error.message,
									code: "VALIDATION_ERROR",
								},
								{ status: 422 }
							)
						}

						return Response.json(
							{
								error: "Error al enviar el correo",
								details: error.message,
								code: "SEND_ERROR",
							},
							{ status: 500 }
						)
					}

					// Return success response with email ID
					return Response.json({
						success: true,
						message: "Mensaje enviado correctamente",
						emailId: emailData?.id,
					})
				} catch (error) {
					console.error("Unexpected error:", error)
					return Response.json(
						{
							error: "Error inesperado al procesar la solicitud",
							code: "UNEXPECTED_ERROR",
						},
						{ status: 500 }
					)
				}
			},
		},
	},
})
