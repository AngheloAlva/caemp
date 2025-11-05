"use client"

import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

const contactInfo = [
	{
		icon: MailIcon,
		value: "contacto@grupocaemp.cl",
		href: "mailto:contacto@grupocaemp.cl",
	},
	{
		icon: PhoneIcon,
		value: "+56 9 0000 0000",
		href: "tel:+56900000000",
	},
	{
		icon: MapPinIcon,
		value: "Blas Vial 8727, La Cisterna, Santiago",
		href: "https://www.google.com/maps/place/Blas+Vial+8727,+7980705+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.537005,-70.655468,15z",
	},
]

export default function Contact() {
	return (
		<section id="contacto" className="w-full bg-white py-20 md:py-32">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Contacto
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-700">
							¿Quieres capacitar a tu equipo o solicitar una asesoría? Completa el siguiente
							formulario y te responderemos a la brevedad.
						</p>
					</div>
				</FadeIn>

				<div className="mx-auto max-w-5xl">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-6">
							<StaggerContainer className="space-y-4">
								<FadeIn delay={0.2}>
									<h3 className="text-xl font-semibold">Información de Contacto</h3>
								</FadeIn>

								<Card className="border-primary/20">
									<CardContent className="flex flex-col gap-2">
										{contactInfo.map((item) => {
											const Icon = item.icon
											return (
												<StaggerItem key={item.value} className="flex items-center gap-2">
													<div className="bg-primary/10 w-fit rounded-full p-1.5">
														<Icon className="text-primary h-4.5 w-4.5" />
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

							<FadeIn delay={0.4}>
								<div className="">
									<h4 className="mb-4 text-xl font-semibold">Nuestra Ubicación</h4>
									<div className="border-primary/20 overflow-hidden rounded-lg border-2 shadow-lg">
										<iframe
											width="100%"
											height="300"
											loading="lazy"
											allowFullScreen
											style={{ border: 0 }}
											title="Ubicación de Grupo CAEMP"
											referrerPolicy="no-referrer-when-downgrade"
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.7891234567!2d-70.6554684!3d-33.5370046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da5995fbdb8b%3A0xec23bec6ff34eee2!2sBlas%20Vial%208727%2C%207980705%20La%20Cisterna%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
										/>
									</div>
								</div>
							</FadeIn>
						</div>

						<FadeIn delay={0.3}>
							<Card className="border-primary/20 p-0">
								<CardContent className="p-8">
									<h3 className="text-primary mb-6 text-2xl font-bold">Envíanos un mensaje</h3>
									<form className="space-y-4">
										<div>
											<label
												htmlFor="name"
												className="mb-2 block text-sm font-medium text-gray-700"
											>
												Nombre completo
											</label>
											<input
												type="text"
												id="name"
												className="focus:border-primary focus:ring-primary/20 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
												placeholder="Tu nombre"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="mb-2 block text-sm font-medium text-gray-700"
											>
												Correo electrónico
											</label>
											<input
												type="email"
												id="email"
												className="focus:border-primary focus:ring-primary/20 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
												placeholder="tu@email.com"
											/>
										</div>
										<div>
											<label
												htmlFor="message"
												className="mb-2 block text-sm font-medium text-gray-700"
											>
												Mensaje
											</label>
											<textarea
												id="message"
												rows={5}
												className="focus:border-primary focus:ring-primary/20 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
												placeholder="¿En qué podemos ayudarte?"
											/>
										</div>

										<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
											<Button
												size={"lg"}
												type="submit"
												onClick={(e) => {
													e.preventDefault()
												}}
												className="bg-primary w-full tracking-wider hover:brightness-90"
											>
												Enviar mensaje
											</Button>
										</motion.div>
									</form>
								</CardContent>
							</Card>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	)
}
