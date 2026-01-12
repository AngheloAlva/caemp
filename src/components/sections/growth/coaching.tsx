"use client"

import { ArrowRight, CheckCircle2, MessageCircle, TrendingUp } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"

const personalCoachingBenefits = [
	"Clarificar tus metas y encontrar tu propósito",
	"Superar bloqueos emocionales o creencias limitantes",
	"Mejorar tu autoconfianza, tu comunicación y tus relaciones",
	"Gestionar estrés, cambios de vida y toma de decisiones",
	"Transformarte desde adentro hacia afuera, con acciones concretas",
]

const businessCoachingBenefits = [
	"Liderazgo efectivo, consciente y comunicacional",
	"Trabajo en equipo y colaboración estratégica",
	"Gestión emocional y resolución de conflictos",
	"Fortalecimiento del clima laboral y alto desempeño",
	"Cultura de feedback, accountability y confianza",
]

export default function Coaching() {
	return (
		<section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Servicios de Coaching Personal y Empresarial
						</h2>
						<p className="mx-auto mb-3 max-w-3xl text-xl font-semibold text-gray-900">
							Transforma tu manera de pensar, sentir y actuar. Despierta tu mejor versión.
						</p>
						<p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
							En Crecimiento, parte del Grupo CAEMP, acompañamos a personas y organizaciones en
							procesos de cambio profundo a través de Coaching Profesional, PNL y metodologías
							experienciales que generan resultados medibles y sostenibles.
						</p>
						<p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-gray-700">
							Cada proceso es un viaje de autodescubrimiento donde alineamos pensamientos, emociones
							y acciones, potenciando habilidades que repercuten directamente en el bienestar, el
							liderazgo y el desempeño.
						</p>
					</div>
				</FadeIn>

				<div className="space-y-16">
					<StaggerContainer className="space-y-8">
						<StaggerItem>
							<Card className="border-primary-purple/20 overflow-hidden">
								<CardContent className="lg:pr-0">
									<div className="grid gap-0 lg:grid-cols-2">
										<div className="bg-primary-purple/5 relative flex items-center justify-center p-8 md:p-12">
											<div className="absolute inset-0 z-10 bg-black/30"></div>
											<Image
												width={650}
												height={650}
												alt="Coaching Personal"
												src="/images/crecimiento/personal-couching.jpg"
												className="absolute inset-0 h-full w-full rounded-lg object-cover"
											/>

											<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
												<h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
													Coaching Personal
												</h3>
												<p className="text-xl font-semibold text-white">(Life Coaching)</p>
											</div>
										</div>

										<div className="px-2 py-4 md:p-12">
											<p className="mb-4 text-lg font-semibold text-gray-900">
												Para quienes quieren avanzar, superarse y vivir con propósito.
											</p>
											<p className="mb-4 text-gray-700">
												El coaching personal está diseñado para acompañarte a:
											</p>
											<ul className="mb-6 space-y-3">
												{personalCoachingBenefits.map((benefit) => (
													<li key={benefit} className="flex items-start gap-3">
														<CheckCircle2 className="text-primary-purple mt-1 h-5 w-5 shrink-0" />
														<span className="text-gray-700">{benefit}</span>
													</li>
												))}
											</ul>
											<p className="mb-8 text-gray-700">
												Integrando herramientas de PNL, visualizaciones guiadas y modelos como GROW,
												SMART y HOJEAR, te ayudamos a identificar lo que te impulsa, lo que te
												detiene y el camino más efectivo para avanzar.
											</p>

											<div className="bg-primary-purple/10 flex items-center gap-3 rounded-lg p-4">
												<MessageCircle className="text-primary-purple h-6 w-6 shrink-0" />
												<p className="text-primary-purple font-semibold">
													Coaching para crecer, sanar y diseñar la vida que deseas.
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</StaggerItem>

						<StaggerItem>
							<Card className="border-primary-purple/20 overflow-hidden">
								<CardContent className="lg:pl-0">
									<div className="grid gap-0 lg:grid-cols-2">
										<div className="bg-primary-purple/5 relative flex items-center justify-center p-8 md:p-12 lg:order-2">
											<div className="absolute inset-0 z-10 bg-black/30"></div>

											<Image
												width={650}
												height={650}
												alt="Coaching Empresarial"
												src="/images/crecimiento/couching-empresarial.jpg"
												className="absolute inset-0 h-full w-full rounded-lg object-cover"
											/>

											<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
												<h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
													Coaching Empresarial
												</h3>
												<p className="text-xl font-semibold text-white">/ Ejecutivo</p>
											</div>
										</div>

										<div className="px-2 py-4 md:p-12 lg:order-1">
											<p className="mb-4 text-lg font-semibold text-gray-900">
												Para líderes y equipos que buscan elevar su desempeño y potenciar el clima
												laboral.
											</p>
											<p className="mb-4 text-gray-700">
												Acompañamos a organizaciones en procesos de transformación cultural y
												desarrollo de competencias clave:
											</p>
											<ul className="mb-6 space-y-3">
												{businessCoachingBenefits.map((benefit) => (
													<li key={benefit} className="flex items-start gap-3">
														<CheckCircle2 className="text-primary-purple mt-1 h-5 w-5 shrink-0" />
														<span className="text-gray-700">{benefit}</span>
													</li>
												))}
											</ul>

											<p className="mb-8 text-gray-700">
												Utilizamos modelos de coaching ejecutivo, PNL aplicada al liderazgo y
												herramientas como DISC, Rueda del Líder y Rueda de la Vida, permitiendo
												identificar brechas, fortalezas y oportunidades reales de crecimiento.
											</p>
											<div className="bg-primary-purple/10 flex items-start gap-3 rounded-lg p-4">
												<TrendingUp className="text-primary-purple mt-1 h-6 w-6 shrink-0" />
												<p className="text-primary-purple font-semibold">
													Equipos más conectados. Líderes más efectivos. Resultados más sólidos.
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</StaggerItem>
					</StaggerContainer>
				</div>

				<FadeIn delay={0.8}>
					<div className="mt-12 text-center">
						<HoverScale>
							<Button
								size="lg"
								style={{ backgroundColor: "#8B5CF6" }}
								className="tracking-wider text-white hover:opacity-90"
								asChild
							>
								<Link to="/crecimiento/cotizacion">
									Agenda tu Proceso de Coaching
									<ArrowRight className="h-5 w-5" />
								</Link>
							</Button>
						</HoverScale>
						<p className="text-muted-foreground mt-4 text-lg italic">
							Todo cambio comienza con una conversación.
						</p>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
