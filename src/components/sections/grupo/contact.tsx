"use client"

import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, Loader2Icon } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { SuccessNotification } from "@/components/ui/success-notification"
import { postApi } from "@/lib/api"

const contactInfo = [
	{
		icon: MailIcon,
		label: "Email",
		value: "grupo@caemp.cl",
		href: "mailto:grupo@caemp.cl",
	},
	{
		icon: PhoneIcon,
		label: "Teléfono",
		value: "+56 2 2667 6455",
		href: "tel:+56226676455",
	},
	{
		icon: MapPinIcon,
		label: "Dirección",
		value: "Blas Vial 8727, La Cisterna, Santiago",
		href: "https://www.google.com/maps/place/Blas+Vial+8727,+7980705+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.537005,-70.655468,15z",
	},
]

export default function Contact() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus("idle")
		setErrorMessage("")

		try {
			await postApi("/api/contact", {
				fullName: formData.fullName,
				email: formData.email,
				phone: formData.phone,
				message: formData.message,
				businessLine: "grupo",
			})

			setSubmitStatus("success")
			setFormData({
				fullName: "",
				email: "",
				phone: "",
				message: "",
			})

			// Reset success message after 3 seconds
			setTimeout(() => {
				setSubmitStatus("idle")
			}, 3000)
		} catch (error) {
			setSubmitStatus("error")
			setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section id="contacto" className="w-full bg-slate-50 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary mb-4 text-3xl font-medium md:text-4xl lg:text-5xl">
							Contacto
						</h2>
						<p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
							¿Quieres capacitar a tu equipo o solicitar una asesoría? Completa el siguiente
							formulario y te responderemos a la brevedad.
						</p>
					</div>
				</FadeIn>

				<div className="mx-auto max-w-5xl">
					<div className="grid lg:grid-cols-2">
						<FadeIn delay={0.2}>
							<div className="rounded-none border border-gray-100 bg-white p-6 md:border-r-0 md:p-8">
								{submitStatus === "success" ? (
									<SuccessNotification
										title="¡Mensaje Enviado!"
										description="Gracias por contactarnos. Te responderemos a la brevedad."
										variant="grupo"
									/>
								) : (
									<>
										<h3 className="text-primary mb-6 text-xl font-medium md:text-2xl">
											Envíanos un mensaje
										</h3>

										{submitStatus === "error" && (
											<div className="mb-4 rounded-none border border-red-200 bg-red-50 p-4">
												<p className="text-sm font-medium text-red-800">{errorMessage}</p>
											</div>
										)}

										<form className="space-y-4" onSubmit={handleSubmit}>
											<div className="grid gap-4 sm:grid-cols-2">
												<div>
													<label
														htmlFor="name"
														className="mb-1.5 block text-sm font-medium text-gray-700"
													>
														Nombre *
													</label>
													<input
														type="text"
														id="name"
														required
														value={formData.fullName}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, fullName: e.target.value }))
														}
														disabled={isSubmitting}
														className="focus:border-primary focus:ring-primary/20 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:bg-white focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
														placeholder="Tu nombre"
													/>
												</div>
												<div>
													<label
														htmlFor="email"
														className="mb-1.5 block text-sm font-medium text-gray-700"
													>
														Email *
													</label>
													<input
														type="email"
														id="email"
														required
														value={formData.email}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, email: e.target.value }))
														}
														disabled={isSubmitting}
														className="focus:border-primary focus:ring-primary/20 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:bg-white focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
														placeholder="tu@email.com"
													/>
												</div>
											</div>
											<div>
												<label
													htmlFor="phone"
													className="mb-1.5 block text-sm font-medium text-gray-700"
												>
													Teléfono *
												</label>
												<input
													type="tel"
													id="phone"
													required
													value={formData.phone}
													onChange={(e) =>
														setFormData((prev) => ({ ...prev, phone: e.target.value }))
													}
													disabled={isSubmitting}
													className="focus:border-primary focus:ring-primary/20 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:bg-white focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
													placeholder="+56 9 1234 5678"
												/>
											</div>
											<div>
												<label
													htmlFor="message"
													className="mb-1.5 block text-sm font-medium text-gray-700"
												>
													Mensaje *
												</label>
												<textarea
													id="message"
													rows={4}
													required
													value={formData.message}
													onChange={(e) =>
														setFormData((prev) => ({ ...prev, message: e.target.value }))
													}
													disabled={isSubmitting}
													className="focus:border-primary focus:ring-primary/20 w-full resize-none rounded-none border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:bg-white focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
													placeholder="¿En qué podemos ayudarte?"
												/>
											</div>

											<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
												<Button
													size="lg"
													type="submit"
													disabled={isSubmitting}
													className="bg-primary hover:bg-primary/90 w-full gap-2 rounded-none tracking-wide"
												>
													{isSubmitting ? (
														<>
															<Loader2Icon className="h-4 w-4 animate-spin" />
															Enviando...
														</>
													) : (
														<>
															<SendIcon className="h-4 w-4" />
															Enviar mensaje
														</>
													)}
												</Button>
											</motion.div>
										</form>
									</>
								)}
							</div>
						</FadeIn>

						<div className="flex flex-col">
							<FadeIn delay={0.3}>
								<div className="rounded-none border border-gray-100 bg-white p-6 md:border-b-0">
									<h4 className="mb-4 text-lg font-medium text-gray-900">
										Información de Contacto
									</h4>
									<StaggerContainer className="space-y-3">
										{contactInfo.map((item) => {
											const Icon = item.icon
											return (
												<StaggerItem key={item.value}>
													<a
														href={item.href}
														target={item.icon === MapPinIcon ? "_blank" : undefined}
														rel={item.icon === MapPinIcon ? "noopener noreferrer" : undefined}
														className="group flex items-center gap-3 rounded-none p-2 transition-colors hover:bg-gray-50"
													>
														<div className="bg-primary/10 group-hover:bg-primary/20 shrink-0 rounded-full p-2 transition-colors">
															<Icon className="text-primary h-4 w-4" />
														</div>
														<div>
															<p className="text-xs font-medium text-gray-500">{item.label}</p>
															<p className="text-sm font-medium text-gray-900">{item.value}</p>
														</div>
													</a>
												</StaggerItem>
											)
										})}
									</StaggerContainer>
								</div>
							</FadeIn>

							<FadeIn delay={0.4}>
								<div className="flex-1 overflow-hidden rounded-none border border-gray-100">
									<iframe
										width="100%"
										height="100%"
										style={{ minHeight: "250px" }}
										loading="lazy"
										allowFullScreen
										title="Ubicación de Grupo CAEMP"
										referrerPolicy="no-referrer-when-downgrade"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.7891234567!2d-70.6554684!3d-33.5370046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da5995fbdb8b%3A0xec23bec6ff34eee2!2sBlas%20Vial%208727%2C%207980705%20La%20Cisterna%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
									/>
								</div>
							</FadeIn>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
