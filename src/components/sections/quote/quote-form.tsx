import { useAppForm } from "@/components/ui/tanstack-form"
import { Calendar as CalendarIcon } from "lucide-react"
import { revalidateLogic } from "@tanstack/react-form"
import { format } from "date-fns"

import { quoteFormSchema, type QuoteFormSchema } from "./quote.schema"
import { cn } from "@/lib/utils"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { FieldDescription } from "@/components/ui/field"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function QuoteForm() {
	const draftForm = useAppForm({
		defaultValues: {
			full_name: "",
			email: "",
			phone: "",
			role: "",
			company_name: "",
			participans_number: 0,
			courses: [] as string[],
			prefer_date: "",
			message: "",
		} as QuoteFormSchema,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: quoteFormSchema,
			onDynamicAsyncDebounceMs: 300,
		},
		onSubmit: ({ value }) => {
			console.log(value)
		},
		onSubmitInvalid({ formApi }) {
			const errorMap = formApi.state.errorMap["onDynamic"]!
			const inputs = Array.from(
				document.querySelectorAll("#previewForm input")
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
				<draftForm.Form className="flex w-full flex-col gap-4">
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
											placeholder="Gerente de RRHH"
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
						<h3 className="text-xl font-bold">Información de la Empresa</h3>
						<FieldDescription>Completa los datos de la empresa</FieldDescription>
					</div>

					<div className="flex w-full flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
						<draftForm.AppField name={"company_name"}>
							{(field) => (
								<field.FieldSet className="w-full">
									<field.Field>
										<field.FieldLabel htmlFor={"company_name"}>
											Nombre de la Empresa *
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
											Numero de Participantes *
										</field.FieldLabel>
										<Input
											type="number"
											placeholder="10"
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
						<h3 className="text-xl font-bold">Cursos de Interés</h3>
						<FieldDescription>Selecciona uno o más cursos de interés *</FieldDescription>
					</div>

					<draftForm.AppField name={"courses"}>
						{(field) => {
							const options = [
								{ label: "Control de Riesgos Electricos", value: "control_de_riesgos_electricos" },
								{ label: "Tecnicas de Rescate en Altura", value: "tecnicas_de_rescate_en_altura" },
								{
									label: "Primeros Auxilios y Manjeo del Trauma",
									value: "primeros_auxilios_y_manjeo_del_trauma",
								},
								{
									label: "Trabajo en Espacios Confinados",
									value: "trabajo_en_espacios_confinados",
								},
							]

							return (
								<field.FieldSet className="flex w-full flex-col gap-2 py-1">
									<field.Field>
										<ToggleGroup
											type="multiple"
											variant="outline"
											onValueChange={field.handleChange}
											className="flex w-full flex-col flex-wrap items-center justify-start"
											aria-invalid={!!field.state.meta.errors.length}
										>
											{options.map(({ label, value }) => (
												<ToggleGroupItem
													name={"courses"}
													value={value}
													key={value}
													disabled={false}
													className="flex items-center gap-x-2 px-1"
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
										placeholder="Cuéntanos más sobre tus necesidades específicas..."
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
						<draftForm.SubmitButton label="Enviar solicitud" />
					</div>
				</draftForm.Form>
			</draftForm.AppForm>
		</div>
	)
}
