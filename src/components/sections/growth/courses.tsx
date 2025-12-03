import { Monitor, Users, Video, CheckCircle2 } from "lucide-react"
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
			"Experiencias formativas en tu empresa o en nuestras instalaciones, con interacción directa, dinámicas prácticas y aprendizaje vivencial.",
		features: [
			"Dinámicas de alto impacto",
			"Interacción cara a cara",
			"Feedback inmediato",
			"Actividades prácticas grupales",
		],
		badge: "Interactivo",
		color: "#8B5CF6",
	},
	{
		icon: Video,
		title: "Semi-presencial",
		description:
			"Combina lo mejor de ambos mundos: sesiones presenciales clave con contenido online flexible que puedes revisar a tu ritmo.",
		features: [
			"Flexibilidad de horarios",
			"Sesiones presenciales estratégicas",
			"Contenido digital complementario",
			"Acompañamiento híbrido",
		],
		badge: "Flexible",
		color: "#8B5CF6",
	},
	{
		icon: Monitor,
		title: "Asincrónico",
		description:
			"Accede a nuestros programas desde cualquier lugar y en cualquier momento. Ideal para equipos distribuidos o con agendas variables.",
		features: [
			"Acceso 24/7 a contenidos",
			"Aprende a tu propio ritmo",
			"Certificación digital",
			"Soporte continuo online",
		],
		badge: "Autónomo",
		color: "#8B5CF6",
	},
]

export default function Courses() {
	return (
		<section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Modalidades de Formación Disponibles
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Ofrecemos formación adaptada a tus necesidades en tres modalidades:
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 lg:grid-cols-3">
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
			</div>
		</section>
	)
}
