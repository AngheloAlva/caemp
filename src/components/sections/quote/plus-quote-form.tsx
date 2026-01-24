import { useAppForm } from "@/components/ui/tanstack-form"
import { Calendar as CalendarIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react"
import { revalidateLogic } from "@tanstack/react-form"
import { format } from "date-fns"
import { useState } from "react"

import { quoteFormSchema, type QuoteFormSchema } from "./quote.schema"

import { cn } from "@/lib/utils"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { FieldDescription } from "@/components/ui/field"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Products } from "@/data/plus/products"
import { SuccessNotification } from "@/components/ui/success-notification"

interface PlusQuoteFormProps {
	defaultProduct?: string
}

export function PlusQuoteForm({ defaultProduct }: PlusQuoteFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState("")

	const draftForm = useAppForm({
		defaultValues: {
			full_name: "",
			email: "",
			phone: "",
			role: "",
			company_name: "",
			participans_number: 0,
			courses: defaultProduct ? [defaultProduct] : ([] as string[]),
			prefer_date: "",
			message: "",
		} as QuoteFormSchema,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: quoteFormSchema,
			onDynamicAsyncDebounceMs: 300,
		},
		onSubmit: async ({ value }) => {
			setIsSubmitting(true)
			setSubmitStatus("idle")
			setErrorMessage("")

			try {
				// Map product slugs to product names
				const productNames = value.courses
					.map((slug) => {
						const product = Object.values(Products).find((p) => p.slug === slug)
						return product?.name || slug
					})
					.filter(Boolean)

				const response = await fetch(`${process.env.VITE_PUBLIC_BASE_URL}/api/quote`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fullName: value.full_name,
						email: value.email,
						phone: value.phone,
						role: value.role,
						companyName: value.company_name,
						participantsNumber: value.participans_number,
						items: productNames,
						preferDate: value.prefer_date,
						message: value.message,
						businessLine: "plus",
					}),
				})

				const data = await response.json()

				if (!response.ok) {
					throw new Error(data.error || "Error al enviar la solicitud")
				}

				setSubmitStatus("success")

				// Reset form
				draftForm.reset()

				// Reset success message after 3 seconds
				setTimeout(() => {
					setSubmitStatus("idle")
				}, 3000)
			} catch (error) {
				setSubmitStatus("error")
				setErrorMessage(error instanceof Error ? error.message : "Error al enviar la solicitud")
			} finally {
				setIsSubmitting(false)
			}
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
			{submitStatus === "success" ? (
				<SuccessNotification
					title="¡Solicitud Enviada!"
					description="Gracias por tu interés. Te contactaremos pronto para brindarte más información sobre nuestros productos."
					variant="green"
				/>
			) : (
				<draftForm.AppForm>
					<draftForm.Form className="flex w-full flex-col gap-4">
						{submitStatus === "error" && (
							<div className="rounded-lg border border-red-200 bg-red-50 p-4">
								<p className="text-sm font-medium text-red-800">{errorMessage}</p>
							</div>
						)}

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
							<h3 className="text-xl font-bold">Productos de Interés</h3>
							<FieldDescription>Selecciona uno o más productos de interés *</FieldDescription>
						</div>

						<draftForm.AppField name={"courses"}>
							{(field) => {
								const options = Object.values(Products).map((product) => ({
									label: product.name,
									value: product.slug,
								}))

								return (
									<field.FieldSet className="flex w-full flex-col gap-2 py-1">
										<field.Field>
											<ToggleGroup
												type="multiple"
												variant="outline"
												onValueChange={field.handleChange}
												className="grid w-full grid-cols-1 gap-3 md:grid-cols-2"
												aria-invalid={!!field.state.meta.errors.length}
												value={field.state.value as string[]}
											>
												{options.map(({ label, value }) => (
													<ToggleGroupItem
														name={"courses"}
														value={value}
														key={value}
														disabled={false}
														className="data-[spacing=0]:data-[variant=outline]:first:border-lz hover:text-primary-green data-[state=on]:text-primary-green h-full min-h-[48px] justify-start rounded-lg border py-3 text-left whitespace-normal data-[spacing=0]:rounded-lg data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-lg data-[spacing=0]:last:rounded-lg data-[spacing=0]:data-[variant=outline]:border"
													>
														{field.state.value.includes(value) && (
															<CheckCircle2Icon className="text-primary-green h-5 w-5" />
														)}
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
							{isSubmitting ? (
								<Button
									size="lg"
									disabled
									className="bg-primary-green hover:bg-primary-green/90 gap-2"
								>
									<Loader2Icon className="h-4 w-4 animate-spin" />
									Enviando...
								</Button>
							) : (
								<draftForm.SubmitButton
									className="bg-primary-green hover:bg-primary-green/90"
									label="Enviar solicitud"
								/>
							)}
						</div>
					</draftForm.Form>
				</draftForm.AppForm>
			)}
		</div>
	)
}
