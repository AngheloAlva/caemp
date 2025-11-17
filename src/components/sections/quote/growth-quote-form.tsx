import { useAppForm } from "@/components/ui/tanstack-form"
import { Calendar as CalendarIcon } from "lucide-react"
import { revalidateLogic } from "@tanstack/react-form"
import { format } from "date-fns"

import { cn } from "@/lib/utils"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { FieldDescription } from "@/components/ui/field"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { z } from "zod"

const growthQuoteFormSchema = z.object({
	full_name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z.string().email("Email inválido"),
	phone: z.string().min(9, "Teléfono inválido"),
	role: z.string().min(2, "El cargo es requerido"),
	company_name: z.string().optional(),
	participans_number: z.number().min(1, "Debe haber al menos 1 participante"),
	service_type: z.string().min(1, "Selecciona un tipo de servicio"),
	services: z.array(z.string()).min(1, "Selecciona al menos un servicio"),
	prefer_date: z.string().optional(),
	message: z.string().optional(),
})

type GrowthQuoteFormSchema = z.infer<typeof growthQuoteFormSchema>

export function GrowthQuoteForm() {
	const draftForm = useAppForm({
		defaultValues: {
			full_name: "",
			email: "",
			phone: "",
			role: "",
			company_name: "",
			participans_number: 0,
			service_type: "",
			services: [] as string[],
			prefer_date: "",
			message: "",
		} as GrowthQuoteFormSchema,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: growthQuoteFormSchema,
			onDynamicAsyncDebounceMs: 300,
		},
		onSubmit: ({ value }) => {
			console.log(value)
		},
		onSubmitInvalid({ formApi }) {
			const errorMap = formApi.state.errorMap["onDynamic"]!
			const inputs = Array.from(
				document.querySelectorAll("#growthQuoteForm input")
			) as HTMLInputElement[]
			let firstInput: HTMLInputElement | undefined
			for (const input of inputs) {
				if (errorMap[input.name]) {
					firstInput = input
					break
				}
			}
			firstInput?.focus()
		},
	})

	return (
		<div className="w-full">
			<draftForm.AppForm>
				<draftForm.Form id="growthQuoteForm" className="flex w-full flex-col gap-4">
					<div>
						<h3 className="text-xl font-bold">Información Personal</h3>
						<FieldDescription>Completa tus datos personales</FieldDescription>
					</div>

					<div className="flex w-full flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
						<draftForm.AppField name={"full_name"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"full_name"}>Nombre Completo *</field.FieldLabel>
										<Input
											name={"full_name"}
											placeholder="Juan Pérez"
											type="text"
											value={(field.state.value as string | undefined) ?? ""}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={!!field.state.meta.errors.length}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>
						<draftForm.AppField name={"email"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"email"}>Email *</field.FieldLabel>
										<Input
											name={"email"}
											placeholder="juan@ejemplo.com"
											type="email"
											value={(field.state.value as string | undefined) ?? ""}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={!!field.state.meta.errors.length}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>
					</div>

					<div className="flex w-full flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
						<draftForm.AppField name={"phone"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"phone"}>Teléfono *</field.FieldLabel>
										<Input
											type="tel"
											name={"phone"}
											inputMode="decimal"
											onBlur={field.handleBlur}
											placeholder="+56 9 98765 4321"
											aria-invalid={!!field.state.meta.errors.length}
											onChange={(e) => field.handleChange(e.target.value)}
											value={(field.state.value as string | undefined) ?? ""}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>
						<draftForm.AppField name={"role"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"role"}>Cargo *</field.FieldLabel>
										<Input
											name={"role"}
											placeholder="Gerente, Líder de equipo, Particular..."
											type="text"
											value={(field.state.value as string | undefined) ?? ""}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={!!field.state.meta.errors.length}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>
					</div>

					<div className="mt-4">
						<h3 className="text-xl font-bold">Información Adicional</h3>
						<FieldDescription>Cuéntanos sobre tu organización o contexto</FieldDescription>
					</div>

					<div className="flex w-full flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
						<draftForm.AppField name={"company_name"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"company_name"}>
											Nombre de la Empresa (Opcional)
										</field.FieldLabel>
										<Input
											name={"company_name"}
											placeholder="Empresa SPA"
											type="text"
											value={(field.state.value as string | undefined) ?? ""}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={!!field.state.meta.errors.length}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>

						<draftForm.AppField name={"participans_number"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"participans_number"}>
											Número de Participantes *
										</field.FieldLabel>
										<Input
											type="number"
											placeholder="5"
											inputMode="decimal"
											onBlur={field.handleBlur}
											name={"participans_number"}
											aria-invalid={!!field.state.meta.errors.length}
											value={(field.state.value as number | undefined) ?? ""}
											onChange={(e) => field.handleChange(e.target.valueAsNumber)}
										/>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)}
						</draftForm.AppField>
					</div>

					<div className="mt-4">
						<h3 className="text-xl font-bold">Tipo de Servicio</h3>
						<FieldDescription>Selecciona el tipo de servicio que te interesa *</FieldDescription>
					</div>

					<draftForm.AppField name={"service_type"}>
						{(field) => (
							<field.FieldSet className="w-full">
								<field.Field>
									<Select
										onValueChange={field.handleChange}
										value={(field.state.value as string | undefined) ?? ""}
									>
										<SelectTrigger
											className="w-full"
											aria-invalid={!!field.state.meta.errors.length}
										>
											<SelectValue placeholder="Selecciona un tipo de servicio" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="coaching_personal">Coaching Personal</SelectItem>
											<SelectItem value="coaching_empresarial">Coaching Empresarial</SelectItem>
											<SelectItem value="talleres">Talleres</SelectItem>
											<SelectItem value="programas">Programas de Capacitación</SelectItem>
										</SelectContent>
									</Select>
								</field.Field>

								<field.FieldError />
							</field.FieldSet>
						)}
					</draftForm.AppField>

					<div className="mt-4">
						<h3 className="text-xl font-bold">Servicios de Interés</h3>
						<FieldDescription>Selecciona uno o más servicios de interés *</FieldDescription>
					</div>

					<draftForm.AppField name={"services"}>
						{(field) => {
							const options = [
								{ label: "Liderazgo y Comunicación", value: "liderazgo_comunicacion" },
								{ label: "Trabajo en Equipo", value: "trabajo_equipo" },
								{ label: "Gestión Emocional", value: "gestion_emocional" },
								{ label: "Coaching Ejecutivo", value: "coaching_ejecutivo" },
								{ label: "Desarrollo Personal", value: "desarrollo_personal" },
								{ label: "Convivencia Laboral", value: "convivencia_laboral" },
							]

							return (
								<field.FieldSet className="flex w-full flex-col gap-2 py-1">
									<field.Field>
										<ToggleGroup
											type="multiple"
											variant="outline"
											onValueChange={field.handleChange}
											className="grid w-full grid-cols-1 gap-3 md:grid-cols-2"
											aria-invalid={!!field.state.meta.errors.length}
										>
											{options.map(({ label, value }) => (
												<ToggleGroupItem
													name={"services"}
													value={value}
													key={value}
													disabled={false}
													className="h-auto min-h-[48px] rounded-lg border py-3 text-left whitespace-normal data-[spacing=0]:rounded-lg data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-lg data-[spacing=0]:last:rounded-lg data-[spacing=0]:data-[variant=outline]:border"
												>
													{label}
												</ToggleGroupItem>
											))}
										</ToggleGroup>
									</field.Field>

									<field.FieldError />
								</field.FieldSet>
							)
						}}
					</draftForm.AppField>

					<div className="mt-4">
						<h3 className="text-xl font-bold">Detalles Adicionales</h3>
						<FieldDescription>
							Agrega cualquier detalle adicional que creas necesario
						</FieldDescription>
					</div>

					<draftForm.AppField name={"prefer_date"}>
						{(field) => {
							const date = field.state.value
							return (
								<field.FieldSet className="flex w-full flex-col">
									<field.Field>
										<field.FieldLabel htmlFor={"prefer_date"}>Fecha Preferida </field.FieldLabel>
										<Popover>
											<PopoverTrigger
												asChild
												disabled={false}
												aria-invalid={!!field.state.meta.errors.length}
											>
												<Button
													variant={"outline"}
													className={cn(
														"w-full justify-start text-start font-normal",
														!date && "text-muted-foreground"
													)}
												>
													<CalendarIcon className="mr-2 size-4" />
													{date ? (
														format(date as unknown as Date, "PPP")
													) : (
														<span>Selecciona una fecha</span>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													mode="single"
													selected={field.state.value as unknown as Date | undefined}
													onSelect={(newDate) => {
														field.handleChange(newDate?.toISOString() as string)
													}}
													aria-invalid={!!field.state.meta.errors.length}
												/>
											</PopoverContent>
										</Popover>

										<field.FieldError />
									</field.Field>
								</field.FieldSet>
							)
						}}
					</draftForm.AppField>

					<draftForm.AppField name={"message"}>
						{(field) => (
							<field.FieldSet className="w-full">
								<field.Field>
									<field.FieldLabel htmlFor={"message"}>
										Mensaje o Requerimientos Especiales{" "}
									</field.FieldLabel>
									<Textarea
										placeholder="Cuéntanos más sobre tus objetivos y necesidades específicas..."
										required={false}
										disabled={false}
										value={(field.state.value as string | undefined) ?? ""}
										name={"message"}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										className="resize-none"
										aria-invalid={!!field.state.meta.errors.length}
									/>
								</field.Field>
								<field.FieldError />
							</field.FieldSet>
						)}
					</draftForm.AppField>

					<div className="flex w-full items-center justify-end pt-3">
						<draftForm.SubmitButton className="bg-primary-purple" label="Solicitar Cotización" />
					</div>
				</draftForm.Form>
			</draftForm.AppForm>
		</div>
	)
}
