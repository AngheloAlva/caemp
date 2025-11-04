import * as z from "zod"

export const quoteFormSchema = z.object({
	full_name: z.string().min(1, "Debe ingresar su nombre completo"),
	email: z.email(),
	phone: z.string().min(1, "Debe ingresar su número de teléfono"),
	role: z.string().min(1, "Debe ingresar su cargo"),
	company_name: z.string().min(1, "Debe ingresar el nombre de su empresa"),
	participans_number: z.number().min(1, "Debe ingresar el número de participantes"),
	courses: z.array(z.string().min(1, "Debe seleccionar al menos un curso")),
	prefer_date: z
		.string({
			error: "Debe seleccionar una fecha preferida",
		})
		.optional(),
	message: z.string().optional(),
})

export type QuoteFormSchema = z.infer<typeof quoteFormSchema>
