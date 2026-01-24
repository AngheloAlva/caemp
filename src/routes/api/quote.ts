import { createFileRoute } from "@tanstack/react-router"
import { Resend } from "resend"
import { z } from "zod"
import QuoteEmail from "../../../emails/quote-email"

const quoteSchema = z.object({
	fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z.string().email("Email inválido"),
	phone: z.string().min(9, "Teléfono inválido"),
	role: z.string().min(2, "El cargo es requerido"),
	companyName: z.string().optional(),
	participantsNumber: z.number().min(1, "Debe haber al menos 1 participante"),
	items: z.array(z.string()).min(1, "Selecciona al menos un item"),
	preferDate: z.string().optional(),
	message: z.string().optional(),
	businessLine: z.enum(["otec", "crecimiento", "plus", "grupo"]),
	itemType: z.string().optional(),
})

const businessLineNames = {
	otec: "OTEC",
	crecimiento: "Crecimiento",
	plus: "Plus",
	grupo: "Grupo CAEMP",
}

export const Route = createFileRoute("/api/quote")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				try {
					const body = await request.json()
					const result = quoteSchema.safeParse(body)
					if (!result.success) {
						return Response.json(
							{ error: "Datos inválidos", details: result.error.issues },
							{ status: 400 }
						)
					}

					const data = result.data
					const timestamp = Math.floor(Date.now() / 60000)
					const companySlug = data.companyName?.toLowerCase().replace(/\s+/g, "-") || "individual"
					const idempotencyKey = `quote-${data.businessLine}/${companySlug}/${data.email}/${timestamp}`

					const resend = new Resend(process.env.RESEND_API_KEY)
					const lineName = businessLineNames[data.businessLine]

					const { data: emailData, error } = await resend.emails.send(
						{
							from: "Acme <onboarding@resend.dev>",
							to: "delivered@resend.dev",
							subject: `Nueva solicitud de cotización - ${lineName}`,
							react: QuoteEmail({
								fullName: data.fullName,
								email: data.email,
								phone: data.phone,
								role: data.role,
								companyName: data.companyName || "",
								participantsNumber: data.participantsNumber,
								items: data.items,
								preferDate: data.preferDate,
								message: data.message,
								businessLine: data.businessLine,
								itemType: data.itemType,
							}),
							tags: [
								{ name: "type", value: "quote" },
								{ name: "business_line", value: data.businessLine },
								{ name: "participants", value: data.participantsNumber.toString() },
							],
						},
						{ idempotencyKey }
					)

					if (error) {
						console.error("Error sending email:", error)
						if (error.statusCode === 429) {
							return Response.json(
								{ error: "Demasiadas solicitudes", code: "RATE_LIMITED" },
								{ status: 429 }
							)
						}
						if (error.statusCode === 422) {
							return Response.json(
								{ error: "Datos inválidos", details: error.message, code: "VALIDATION_ERROR" },
								{ status: 422 }
							)
						}
						return Response.json(
							{ error: "Error al enviar", details: error.message, code: "SEND_ERROR" },
							{ status: 500 }
						)
					}

					return Response.json({
						success: true,
						message: "Cotización solicitada correctamente",
						emailId: emailData?.id,
					})
				} catch (error) {
					console.error("Unexpected error:", error)
					return Response.json({ error: "Error inesperado", code: "UNEXPECTED_ERROR" }, { status: 500 })
				}
			},
		},
	},
})
