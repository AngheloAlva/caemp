"use client"

import { motion } from "motion/react"
import { Image } from "@/components/shared/image"
import { useState } from "react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"
import { SuccessNotification } from "@/components/ui/success-notification"
import { postApi } from "@/lib/api"

interface BusinessLineContactProps {
	title: string
	description: string
	variant?: "default" | "purple" | "green"
	contactInfo: {
		icon: React.ComponentType<{ className?: string }>
		value: string
		href?: string
	}[]
}

export function BusinessLineContact({
	title,
	description,
	variant = "default",
	contactInfo,
}: BusinessLineContactProps) {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState("")

	const variants = {
		default: {
			text: "text-primary",
			bg: "bg-primary/10",
			border: "border-primary/20",
			button: "bg-primary hover:brightness-90",
			ring: "focus:border-primary focus:ring-primary/20",
			icon: "text-primary",
			overlay: "bg-primary/90",
			image: "/images/otec/contact.jpg",
			pattern:
				"bg-[linear-gradient(to_right,#3d16162e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)]",
		},
		purple: {
			text: "text-primary-purple",
			bg: "bg-primary-purple/10",
			border: "border-primary-purple/20",
			button: "bg-primary-purple hover:bg-primary-purple hover:brightness-90",
			ring: "focus:border-primary-purple focus:ring-primary-purple/20",
			icon: "text-primary-purple",
			overlay: "bg-purple-900/80",
			image: "/images/crecimiento/contact.jpg",
			pattern:
				"bg-[linear-gradient(to_right,#7C3AED2e_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED5e_1px,transparent_1px)]",
		},
		green: {
			text: "text-primary-green",
			bg: "bg-primary-green/10",
			border: "border-primary-green/20",
			button: "bg-primary-green hover:bg-primary-green hover:brightness-90",
			ring: "focus:border-primary-green focus:ring-primary-green/20",
			icon: "text-primary-green",
			overlay: "bg-green-900/80",
			image: "/images/plus/nosotros.jpg", // Fallback for now
			pattern:
				"bg-[linear-gradient(to_right,#10B9812e_1px,transparent_1px),linear-gradient(to_bottom,#10B9815e_1px,transparent_1px)]",
		},
	}

	const styles = variants[variant]

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus("idle")
		setErrorMessage("")

		try {
			const businessLineMap = {
				default: "otec",
				purple: "crecimiento",
				green: "plus",
			} as const

			await postApi("/api/contact", {
				fullName: formData.fullName,
				email: formData.email,
				phone: formData.phone,
				message: formData.message,
				businessLine: businessLineMap[variant],
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
		<section className="flex min-h-screen w-full flex-col items-center justify-start space-y-6 overflow-x-hidden bg-white pb-20">
			<div className="relative w-full py-16 lg:py-24">
				<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
					<Image
						width={1920}
						height={1080}
						src={styles.image}
						alt="Fondo de contacto"
						className="h-full w-full object-cover"
					/>
					<div className={cn("absolute inset-0", styles.overlay)} />
					<div
						className={cn(
							"absolute -top-1 -right-1/3 z-10 size-full mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px]",
							styles.pattern
						)}
					></div>
				</div>

				<div className="relative z-10 container mx-auto px-4">
					<FadeIn>
						<div className="text-center text-white">
							<h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
							<p className="mx-auto max-w-2xl text-lg text-white/90">{description}</p>
						</div>
					</FadeIn>
				</div>
			</div>

			<div className="container mx-auto px-4 pb-20">
				<div className="mx-auto max-w-5xl">
					<div className="flex flex-col-reverse gap-8 lg:flex-row">
						<div className="lg:w-1/2">
							<StaggerContainer className="space-y-4">
								<FadeIn delay={0.2}>
									<h3 className="text-xl font-semibold">Información de Contacto</h3>
								</FadeIn>

								<Card className={cn("shadow-lg", styles.border)}>
									<CardContent className="flex flex-col gap-4">
										{contactInfo.map((item) => {
											const Icon = item.icon
											return (
												<StaggerItem key={item.value} className="flex items-center gap-2">
													<div className={cn("w-fit rounded-full p-1.5", styles.bg)}>
														<Icon className={cn("h-4.5 w-4.5", styles.icon)} />
													</div>

													<div>
														{item.href ? (
															<a
																href={item.href}
																target="_blank"
																rel="noopener noreferrer"
																className="text-base font-medium hover:underline"
															>
																{item.value}
															</a>
														) : (
															<p className="text-base font-medium">{item.value}</p>
														)}
													</div>
												</StaggerItem>
											)
										})}
									</CardContent>
								</Card>
							</StaggerContainer>
						</div>

						<FadeIn delay={0.3} className="relative z-20 lg:w-1/2">
							<Card className={cn("border-0 p-0 shadow-lg")}>
								<CardContent className="p-6 lg:p-8">
									{submitStatus === "success" ? (
										<SuccessNotification
											title="¡Mensaje Enviado!"
											description="Gracias por contactarnos. Te responderemos a la brevedad."
											variant={variant}
										/>
									) : (
										<>
											<h3 className={cn("mb-6 text-2xl font-bold", styles.text)}>
												Envíanos un mensaje
											</h3>

											{submitStatus === "error" && (
												<div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4">
													<p className="text-sm font-medium text-red-800">{errorMessage}</p>
												</div>
											)}

											<form className="space-y-4" onSubmit={handleSubmit}>
												<div>
													<label
														htmlFor="name"
														className="mb-2 block text-sm font-medium text-gray-700"
													>
														Nombre completo *
													</label>
													<input
														type="text"
														id="name"
														required
														value={formData.fullName}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, fullName: e.target.value }))
														}
														className={cn(
															"w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none",
															styles.ring
														)}
														placeholder="Tu nombre"
														disabled={isSubmitting}
													/>
												</div>
												<div>
													<label
														htmlFor="email"
														className="mb-2 block text-sm font-medium text-gray-700"
													>
														Correo electrónico *
													</label>
													<input
														type="email"
														id="email"
														required
														value={formData.email}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, email: e.target.value }))
														}
														className={cn(
															"w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none",
															styles.ring
														)}
														placeholder="tu@email.com"
														disabled={isSubmitting}
													/>
												</div>
												<div>
													<label
														htmlFor="phone"
														className="mb-2 block text-sm font-medium text-gray-700"
													>
														Teléfono de contacto *
													</label>
													<input
														type="tel"
														id="phone"
														required
														value={formData.phone}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, phone: e.target.value }))
														}
														className={cn(
															"w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none",
															styles.ring
														)}
														placeholder="+56 9 1234 5678"
														disabled={isSubmitting}
													/>
												</div>
												<div>
													<label
														htmlFor="message"
														className="mb-2 block text-sm font-medium text-gray-700"
													>
														Mensaje *
													</label>
													<textarea
														id="message"
														rows={5}
														required
														value={formData.message}
														onChange={(e) =>
															setFormData((prev) => ({ ...prev, message: e.target.value }))
														}
														className={cn(
															"w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none",
															styles.ring
														)}
														placeholder="¿En qué podemos ayudarte?"
														disabled={isSubmitting}
													/>
												</div>

												<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
													<Button
														size={"lg"}
														type="submit"
														disabled={isSubmitting}
														className={cn("w-full tracking-wider text-white", styles.button)}
													>
														{isSubmitting ? (
															<>
																<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
																Enviando...
															</>
														) : (
															"Enviar mensaje"
														)}
													</Button>
												</motion.div>
											</form>
										</>
									)}
								</CardContent>
							</Card>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	)
}
