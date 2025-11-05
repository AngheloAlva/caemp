import { Shield, Users, Award, TrendingUp } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"

const features = [
	{
		icon: Shield,
		title: "Protección Certificada",
		description: "Equipos que cumplen con los más altos estándares de seguridad internacional",
	},
	{
		icon: Users,
		title: "Asesoría Experta",
		description: "Acompañamiento profesional en la selección del equipo ideal",
	},
	{
		icon: Award,
		title: "Calidad Garantizada",
		description: "Productos de marcas líderes con certificación ISP",
	},
	{
		icon: TrendingUp,
		title: "Mejora Continua",
		description: "Soluciones innovadoras para entornos más seguros y productivos",
	},
]

export default function About() {
	return (
		<section className="w-full bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col justify-center">
						<FadeIn>
							<h2 className="text-primary-green mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
								Seguridad y Confianza para Trabajos de Alto Riesgo
							</h2>
						</FadeIn>

						<SlideIn direction="up" delay={0.2}>
							<p className="mb-8 text-lg leading-relaxed text-gray-700">
								Brindamos las herramientas y servicios esenciales para garantizar la seguridad en
								trabajos con exposición a caídas y situaciones de riesgo. Nos comprometemos a ser tu
								aliado estratégico en la prevención, ofreciendo asesoría experta y soluciones
								profesionales para un entorno de trabajo más seguro y eficiente.
							</p>
						</SlideIn>

						<SlideIn direction="up" delay={0.3}>
							<Button asChild size="lg" className="bg-primary-green w-fit hover:bg-[#16A34A]">
								<Link to="/plus/nosotros">Sobre Nosotros</Link>
							</Button>
						</SlideIn>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{features.map((feature, index) => {
							const Icon = feature.icon
							return (
								<FadeIn key={index} delay={0.1 * index}>
									<Card className="border-primary-green/20 hover:border-primary-green h-full transition-all hover:shadow-lg">
										<CardContent className="p-6">
											<div className="bg-primary-green/10 mb-4 inline-flex rounded-full p-3">
												<Icon className="text-primary-green h-6 w-6" />
											</div>
											<h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
											<p className="text-sm text-gray-600">{feature.description}</p>
										</CardContent>
									</Card>
								</FadeIn>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
