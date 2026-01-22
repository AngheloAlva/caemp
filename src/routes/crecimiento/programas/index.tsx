import { createFileRoute } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"

import { programAreas } from "@/data/crecimiento/programs"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import HeroPage from "@/components/sections/growth/hero-page"

export const Route = createFileRoute("/crecimiento/programas/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="min-h-screen bg-white">
			<HeroPage
				title="Nuestros Programas"
				image="/images/crecimiento/programas.jpg"
				description="Desarrollamos el potencial humano a través de experiencias de aprendizaje transformadoras. Liderazgo, comunicación y trabajo en equipo para el éxito organizacional."
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="mb-12 text-center lg:mb-16">
							<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl">
								Áreas de Especialización
							</h2>
							<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
								Cada uno de nuestros programas está diseñado para abordar desafíos específicos de la
								gestión moderna, combinando metodología práctica con herramientas de coaching y
								desarrollo organizacional.
							</p>
						</div>
					</FadeIn>

					<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{programAreas.map((area, index) => {
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
														<h3 className="mb-2 text-lg font-bold text-gray-900">{area.title}</h3>
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
				</div>
			</section>

			<section
				className="relative w-full overflow-hidden py-16 text-white md:py-24"
				style={{ backgroundColor: "#8B5CF6" }}
			>
				<div className="from-primary-purple to-primary-purple absolute inset-0 bg-linear-to-br via-[#7C3AED] opacity-90" />

				<div className="relative container mx-auto max-w-3xl px-4 text-center">
					<FadeIn>
						<h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
							¿Buscas un programa a la medida?
						</h2>
						<p className="mb-8 text-xl text-white/90">
							Diseñamos capacitaciones personalizadas según las necesidades específicas de tu equipo
							y organización.
						</p>
						<HoverScale>
							<Button size="lg" className="text-primary-purple bg-white hover:bg-white/90" asChild>
								<Link to="/crecimiento/cotizacion">
									Solicitar Propuesta
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</Link>
							</Button>
						</HoverScale>
					</FadeIn>
				</div>
			</section>
		</main>
	)
}
