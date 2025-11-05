"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { Image } from "@unpic/react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

const companies = [
	{
		name: "CAEMP (OTEC)",
		subtitle: "Formación Técnica y Prevención de Riesgos",
		color: "primary",
		logo: "/images/logo/logo-o-black.png",
		description:
			"Capacitación, entrenamiento y respuesta ante emergencias. Diseñamos programas certificados por SENCE en sectores como minería, energía, telecomunicaciones y maestranzas.",
		features: [
			"Trabajos en Altura y Espacios Confinados",
			"Control de Riesgos Eléctricos",
			"Primeros Auxilios Industriales",
			"Manejo de Sustancias Peligrosas",
			"Operación de Maquinaria y Equipos",
		],
		link: "/otec",
	},
	{
		name: "CAEMP PLUS",
		subtitle: "Asesoría Técnica y Equipos de Protección",
		color: "primary-green",
		logo: "/images/logo/logo-p-black.png",
		description:
			"Comercialización de equipos de protección personal y colectiva de última generación. Brindamos asesoría técnica especializada para garantizar la seguridad en cada entorno de trabajo.",
		features: [
			"Venta de EPP certificados (cascos, guantes, arneses)",
			"Equipos de protección colectiva y líneas de vida",
			"Asesoría técnica en selección de equipos",
			"Señalética y elementos de seguridad industrial",
			"Productos certificados y homologados",
		],
		link: "/plus",
	},
	{
		name: "CRECIMIENTO",
		subtitle: "Desarrollo Humano y Organizacional",
		color: "primary-purple",
		logo: "/images/logo/logo-c-black.png",
		description:
			"Potenciamos el liderazgo, la comunicación y la colaboración. Diseñamos programas de capacitación y talleres personalizados que fortalecen las habilidades blandas.",
		features: [
			"Liderazgo Consciente",
			"Comunicación Efectiva",
			"Gestión del Estrés y Mindfulness",
			"Coaching Organizacional",
			"Trabajo en Equipo y Motivación",
		],
		link: "/crecimiento",
	},
]

export default function Companies() {
	return (
		<section id="nuestras-empresas" className="w-full bg-gray-50 py-16 md:py-28">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Nuestras Líneas de Negocio
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							En <strong>Grupo CAEMP</strong>, integramos tres unidades de negocio especializadas
							para brindar soluciones completas a nuestros clientes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
					{companies.map((company, index) => (
						<StaggerItem key={index}>
							<motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
								<Card className="h-full border transition-all hover:shadow-xl">
									<CardHeader className="flex flex-row items-center">
										<Image src={company.logo} alt={company.name} width={100} height={100} />

										<div>
											<CardTitle className="text-2xl" style={{ color: `var(--${company.color})` }}>
												{company.name}
											</CardTitle>
											<p className="text-sm font-medium text-gray-600">{company.subtitle}</p>
										</div>
									</CardHeader>
									<CardContent className="space-y-6">
										<p className="text-gray-700">{company.description}</p>

										<div>
											<h4 className="mb-3 font-semibold text-gray-900">Servicios destacados:</h4>
											<ul className="space-y-2">
												{company.features.map((feature) => (
													<li key={feature} className="flex items-start gap-2">
														<CheckCircle2
															className="mt-0.5 h-5 w-5 shrink-0"
															style={{ color: company.color }}
														/>
														<span className="text-sm text-gray-700">{feature}</span>
													</li>
												))}
											</ul>
										</div>
									</CardContent>

									<CardFooter className="mt-auto">
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full"
										>
											<Button
												asChild
												size={"lg"}
												className="w-full"
												style={{ backgroundColor: `var(--${company.color})` }}
											>
												<Link to={company.link}>
													Ver más
													<ArrowRight className="h-4 w-4" />
												</Link>
											</Button>
										</motion.div>
									</CardFooter>
								</Card>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="bg-primary mt-16 rounded-lg p-8 text-center text-white shadow md:p-12">
						<h3 className="mb-4 text-2xl font-bold md:text-3xl">Valor Diferencial</h3>
						<p className="mx-auto mb-8 max-w-3xl text-lg">
							<span className="font-semibold">Grupo CAEMP</span> no solo entrega servicios
							individuales, sino{" "}
							<span className="font-semibold">soluciones estratégicas integrales</span> para las
							organizaciones que buscan crecer con propósito.
						</p>
						<blockquote className="text-xl italic opacity-90">
							"La seguridad comienza con la conciencia y el compromiso humano."
						</blockquote>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
