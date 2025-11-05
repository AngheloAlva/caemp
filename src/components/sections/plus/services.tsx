import { CheckCircle2, ClipboardCheck, Package, Shield, FileCheck } from "lucide-react"
import { motion } from "motion/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"

const services = [
	{
		icon: ClipboardCheck,
		title: "Diagnóstico y asesoría en seguridad laboral",
		description:
			"Evaluamos tu entorno laboral y diseñamos soluciones personalizadas para garantizar el cumplimiento normativo y la seguridad de tu equipo.",
	},
	{
		icon: Package,
		title: "Suministro de EPP certificados",
		description:
			"Proveemos equipos de protección personal de las mejores marcas, certificados y adaptados a las necesidades específicas de cada industria.",
	},
	{
		icon: Shield,
		title: "Señalética y protección colectiva",
		description:
			"Implementamos sistemas de señalización y protección colectiva que cumplen con todas las normativas vigentes.",
	},
	{
		icon: FileCheck,
		title: "Implementación de normativas",
		description:
			"Te acompañamos en todo el proceso de implementación de normativas de seguridad, desde la planificación hasta la ejecución.",
	},
]

export default function Services() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary-green mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Nuestros Servicios
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Acompañamos a cada empresa desde la planificación hasta la implementación de
							soluciones efectivas en seguridad laboral.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => {
						const Icon = service.icon

						return (
							<StaggerItem key={service.title}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="border-primary-green/20 hover:border-primary-green h-full transition-all hover:shadow-lg">
										<CardHeader>
											<div className="bg-primary-green/10 mb-4 inline-flex w-fit rounded-full p-4">
												<Icon className="text-primary-green h-8 w-8" />
											</div>
											<CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-gray-600">{service.description}</p>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="from-primary-green/10 mt-8 rounded-lg bg-linear-to-br to-[#16A34A]/10 p-8 md:p-10">
						<div className="flex items-start gap-4">
							<div className="bg-primary-green rounded-full p-3">
								<CheckCircle2 className="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 className="text-primary-green mb-2 text-2xl font-bold">Valor Diferencial</h3>
								<p className="text-lg text-gray-700">
									Acompañamos a cada empresa desde la planificación hasta la implementación de
									soluciones efectivas. No solo vendemos equipos, brindamos{" "}
									<span className="text-primary-green font-semibold">asesoría integral</span> para
									garantizar entornos laborales seguros y eficientes.
								</p>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
