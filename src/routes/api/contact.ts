import { createFileRoute } from "@tanstack/react-router"
import { Resend } from "resend"
import { z } from "zod"
import ContactEmail from "../../../emails/contact-email"
import { handleCorsPreFlight, addCorsHeaders } from "@/lib/cors"

const contactSchema = z.object({
	fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z.email("Email inválido"),
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
			// Handle OPTIONS preflight for CORS
			OPTIONS: async ({ request }) => {
				return handleCorsPreFlight(request)
			},
			POST: async ({ request }) => {
				try {
					const body = await request.json()
					const result = contactSchema.safeParse(body)

					if (!result.success) {
						const response = Response.json(
							{ error: "Datos inválidos", details: result.error.issues },
							{ status: 400 }
						)
						return addCorsHeaders(response, request)
					}

					const data = result.data
					const timestamp = Math.floor(Date.now() / 60000)
					const idempotencyKey = `contact-${data.businessLine}/${data.email}/${timestamp}`
					const resend = new Resend(process.env.RESEND_API_KEY)
					const lineName = businessLineNames[data.businessLine]

					const { data: emailData, error } = await resend.emails.send(
						{
							from: "Acme <onboarding@resend.dev>",
							to: "delivered@resend.dev",
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
						{ idempotencyKey }
					)

					if (error) {
						console.error("Error sending email:", error)

						let errorResponse
						if (error.statusCode === 429) {
							errorResponse = Response.json(
								{
									error: "Demasiadas solicitudes, intenta nuevamente en un momento",
									code: "RATE_LIMITED",
								},
								{ status: 429 }
							)
						} else if (error.statusCode === 422) {
							errorResponse = Response.json(
								{
									error: "Datos de email inválidos",
									details: error.message,
									code: "VALIDATION_ERROR",
								},
								{ status: 422 }
							)
						} else {
							errorResponse = Response.json(
								{ error: "Error al enviar el correo", details: error.message, code: "SEND_ERROR" },
								{ status: 500 }
							)
						}
						return addCorsHeaders(errorResponse, request)
					}

					const response = Response.json({
						success: true,
						message: "Mensaje enviado correctamente",
						emailId: emailData?.id,
					})
					return addCorsHeaders(response, request)
				} catch (error) {
					console.error("Unexpected error:", error)
					const response = Response.json(
						{ error: "Error inesperado al procesar la solicitud", code: "UNEXPECTED_ERROR" },
						{ status: 500 }
					)
					return addCorsHeaders(response, request)
				}
			},
		},
	},
})
