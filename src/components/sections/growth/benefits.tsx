"use client"

import { motion } from "motion/react"
import { Brain, Users, TrendingUp, Target, Heart, Lightbulb } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

const benefits = [
	{
		icon: Brain,
		title: "Desarrollo de habilidades blandas",
		description: "Fortalece competencias como comunicación, empatía y resolución de conflictos.",
	},
	{
		icon: Users,
		title: "Mejora del clima laboral",
		description:
			"Crea equipos más cohesionados y ambientes de trabajo más positivos y productivos.",
	},
	{
		icon: TrendingUp,
		title: "Aumento de la productividad",
		description: "Equipos motivados y bien liderados logran mejores resultados y mayor eficiencia.",
	},
	{
		icon: Target,
		title: "Liderazgo efectivo",
		description: "Desarrolla líderes conscientes capaces de inspirar y guiar a sus equipos.",
	},
	{
		icon: Heart,
		title: "Bienestar integral",
		description: "Promueve el equilibrio entre vida personal y profesional, reduciendo el estrés.",
	},
	{
		icon: Lightbulb,
		title: "Innovación y creatividad",
		description: "Fomenta el pensamiento creativo y la capacidad de adaptación al cambio.",
	},
]

export default function Benefits() {
	return (
		<section className="w-full bg-white py-20 md:py-32">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Beneficios de Nuestros Programas
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Invertir en el desarrollo humano de tu organización genera resultados tangibles y
							duraderos.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit) => {
						const Icon = benefit.icon
						return (
							<StaggerItem key={benefit.title}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="border-primary-purple/20 hover:border-primary-purple h-full py-2 transition-all hover:shadow-lg">
										<CardContent className="p-6">
											<div className="bg-primary-purple/10 mb-4 inline-flex rounded-full p-4">
												<Icon className="text-primary-purple h-8 w-8" />
											</div>
											<h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
											<p className="text-gray-600">{benefit.description}</p>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>
			</div>
		</section>
	)
}
