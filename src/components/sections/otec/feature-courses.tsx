import { ArrowRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeatureCourses(): React.ReactElement {
	return (
		<section className="bg-muted/30 px-4 py-16 md:py-24">
			<div className="container">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							Cursos Destacados
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
							Programas de capacitación diseñados para las necesidades de tu empresa.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.15}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<StaggerItem>
							<HoverScale scale={1.02}>
								<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
									<div className="relative aspect-video overflow-hidden bg-linear-to-br from-blue-500 to-blue-600">
										<img
											src="/images/courses/electrical-safety-training.jpg"
											alt="Control de Riesgos Eléctricos"
											className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<CardContent className="space-y-4 p-6">
										<div className="flex items-center gap-2">
											<Badge variant="secondary">Presencial</Badge>
											<Badge variant="outline">16 horas</Badge>
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Control de Riesgos Eléctricos
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Capacitación en prevención y control de riesgos eléctricos según normativa
											vigente.
										</p>
										<Button asChild className="w-full">
											<Link to="/cursos/riesgos-electricos">Ver Detalles</Link>
										</Button>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.02}>
								<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
									<div className="relative aspect-video overflow-hidden bg-linear-to-br from-orange-500 to-orange-600">
										<img
											src="/images/courses/height-rescue-training.jpg"
											alt="Rescate en Altura"
											className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<CardContent className="space-y-4 p-6">
										<div className="flex items-center gap-2">
											<Badge variant="secondary">Presencial</Badge>
											<Badge variant="outline">24 horas</Badge>
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Técnicas de Rescate en Altura
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Entrenamiento especializado en trabajo y rescate en altura con equipamiento
											certificado.
										</p>
										<Button asChild className="w-full">
											<Link to="/cursos/rescate-altura">Ver Detalles</Link>
										</Button>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.02}>
								<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
									<div className="relative aspect-video overflow-hidden bg-linear-to-br from-red-500 to-red-600">
										<img
											src="/images/courses/first-aid-training.png"
											alt="Primeros Auxilios"
											className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<CardContent className="space-y-4 p-6">
										<div className="flex items-center gap-2">
											<Badge variant="secondary">Híbrido</Badge>
											<Badge variant="outline">12 horas</Badge>
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Primeros Auxilios y Trauma
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Formación en respuesta a emergencias y manejo del trauma en el lugar de
											trabajo.
										</p>
										<Button asChild className="w-full">
											<Link to="/cursos/primeros-auxilios">Ver Detalles</Link>
										</Button>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.02}>
								<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
									<div className="relative aspect-video overflow-hidden bg-linear-to-br from-green-500 to-green-600">
										<img
											src="/images/courses/emergency-brigade-training.jpg"
											alt="Formación de Brigadas"
											className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<CardContent className="space-y-4 p-6">
										<div className="flex items-center gap-2">
											<Badge variant="secondary">Presencial</Badge>
											<Badge variant="outline">20 horas</Badge>
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Formación de Brigadas
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Capacitación integral para brigadas de emergencia y protocolos de evacuación.
										</p>
										<Button asChild className="w-full">
											<Link to="/cursos/brigadas">Ver Detalles</Link>
										</Button>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>
					</div>
				</StaggerContainer>

				<FadeIn delay={0.3}>
					<div className="mt-12 text-center">
						<HoverScale>
							<Button size="lg" variant="outline" asChild className="bg-transparent">
								<Link to="/cursos">
									Ver Todos los Cursos
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
