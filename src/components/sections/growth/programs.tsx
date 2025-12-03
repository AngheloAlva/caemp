import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

import { programAreas } from "@/data/crecimiento/programs"

export default function Programs() {
	return (
		<section className="w-full bg-white py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-8 text-center lg:mb-16">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Programas de Capacitación Transformadora
						</h2>
						<p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700">
							Nuestros programas están diseñados para desarrollar líderes más conscientes, equipos
							colaborativos y culturas laborales saludables. Combinamos Coaching Profesional, PNL,
							dinámicas prácticas y herramientas modernas para abordar desafíos como:
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{programAreas.slice(0, 3).map((area, index) => {
						const Icon = area.icon
						return (
							<StaggerItem key={index}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="border-primary-purple/20 hover:border-primary-purple h-full transition-all hover:shadow-lg">
										<CardContent className="space-y-4 p-6">
											<div className="flex items-start gap-4">
												<div className="bg-primary-purple/10 rounded-full p-3">
													<Icon className="text-primary-purple h-6 w-6" />
												</div>
												<div className="flex-1">
													<h3 className="mb-2 text-lg font-bold text-gray-900">
														{index + 1}. {area.title}
													</h3>
													<p className="text-gray-600">{area.description}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>

				<StaggerContainer className="mb-12 grid gap-6 md:grid-cols-2">
					{programAreas.slice(3).map((area, index) => {
						const Icon = area.icon
						return (
							<StaggerItem key={index}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="border-primary-purple/20 hover:border-primary-purple h-full transition-all hover:shadow-lg">
										<CardContent className="space-y-4 p-6">
											<div className="flex items-start gap-4">
												<div className="bg-primary-purple/10 rounded-full p-3">
													<Icon className="text-primary-purple h-6 w-6" />
												</div>
												<div className="flex-1">
													<h3 className="mb-2 text-lg font-bold text-gray-900">
														{index + 4}. {area.title}
													</h3>
													<p className="text-gray-600">{area.description}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>

				<p className="text-primary-purple mx-auto mb-6 max-w-3xl text-center text-lg leading-relaxed font-medium italic">
					Cada experiencia integra sesiones guiadas, actividades prácticas y ejercicios de reflexión
					que permiten aplicar los aprendizajes de inmediato.
				</p>
			</div>
		</section>
	)
}
