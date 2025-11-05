"use client"

import { Monitor, Users, Calendar, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"

const modalities = [
	{
		icon: Users,
		title: "Presencial",
		description:
			"Talleres y capacitaciones en tu empresa o en nuestras instalaciones, con interacción directa y actividades prácticas.",
		features: ["Dinámicas grupales", "Role-playing", "Feedback inmediato", "Networking"],
		badge: "Popular",
		color: "#8B5CF6",
	},
	{
		icon: Monitor,
		title: "Asincrónica (Plataforma Virtual)",
		description:
			"Accede a nuestros programas desde cualquier lugar y en cualquier momento a través de nuestra plataforma virtual propia.",
		features: [
			"Contenido multimedia",
			"Flexibilidad horaria",
			"Certificación digital",
			"Soporte continuo",
		],
		badge: "Flexible",
		color: "#8B5CF6",
	},
]

export default function Modalities() {
	return (
		<section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Modalidades de Capacitación
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Elige la modalidad que mejor se adapte a las necesidades de tu organización.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 lg:grid-cols-2">
					{modalities.map((modality) => {
						const Icon = modality.icon
						return (
							<StaggerItem key={modality.title}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="border-primary-purple/20 hover:border-primary-purple h-full transition-all hover:shadow-xl">
										<CardHeader>
											<div className="mb-4 flex items-start justify-between">
												<div
													className="rounded-full p-4"
													style={{ backgroundColor: `${modality.color}20` }}
												>
													<Icon className="h-10 w-10" style={{ color: modality.color }} />
												</div>
												<Badge
													variant="outline"
													style={{ borderColor: modality.color, color: modality.color }}
												>
													{modality.badge}
												</Badge>
											</div>
											<CardTitle className="text-2xl text-gray-900">{modality.title}</CardTitle>
										</CardHeader>
										<CardContent className="space-y-6">
											<p className="text-gray-700">{modality.description}</p>

											<div>
												<h4 className="mb-3 font-semibold text-gray-900">Características:</h4>
												<ul className="space-y-2">
													{modality.features.map((feature) => (
														<li key={feature} className="flex items-start gap-2">
															<CheckCircle2
																className="mt-0.5 h-5 w-5 shrink-0"
																style={{ color: modality.color }}
															/>
															<span className="text-gray-700">{feature}</span>
														</li>
													))}
												</ul>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="mt-6 text-center">
						<Card className="border-primary-purple/20 from-primary-purple/10 bg-linear-to-br to-[#7C3AED]/10 py-2">
							<CardContent className="p-8 md:p-10">
								<div className="flex items-start gap-4">
									<div className="bg-primary-purple rounded-full p-3">
										<Calendar className="h-6 w-6 text-white" />
									</div>
									<div className="text-left">
										<h3 className="text-primary-purple mb-2 text-2xl font-bold">
											Programas Personalizados
										</h3>
										<p className="text-lg text-gray-700">
											También diseñamos programas a medida que combinan ambas modalidades según las
											necesidades específicas de tu organización. Contáctanos para crear una
											solución personalizada.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
