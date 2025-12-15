import { ArrowRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/otec/courses"
import { Image } from "@/components/shared/image"

export default function FeatureCourses(): React.ReactElement {
	const featuredCourses = Object.values(courses).slice(0, 4)

	return (
		<section className="bg-muted/30 px-4 py-16 md:py-24">
			<div className="container">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-5xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							Cursos Destacados
						</h2>
						<p className="text-muted-foreground mb-6 text-lg leading-relaxed text-balance">
							Nos especializamos en la capacitación y entrenamiento en trabajos de alto riesgo y
							respuesta ante emergencias, con el propósito de elevar la seguridad laboral y prevenir
							accidentes.
						</p>
						<p className="text-muted-foreground text-lg leading-relaxed text-balance">
							Contamos con un centro de entrenamiento de alto nivel, equipado con tecnología de
							vanguardia y todas las herramientas necesarias para complementar nuestros cursos de
							excelencia. Formamos profesionales preparados para actuar con seguridad, reducir
							riesgos y proteger vidas en entornos desafiantes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.15}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{featuredCourses.map((course) => (
							<StaggerItem key={course.id}>
								<HoverScale scale={1.02}>
									<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
										<div className="relative aspect-video overflow-hidden bg-gray-100">
											<Image
												width={364}
												height={205}
												alt={course.title}
												src={`/images/otec/courses/${course.images[0] || "placeholder.jpg"}`}
												className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
										<CardContent className="space-y-4 p-6">
											<h3 className="group-hover:text-primary line-clamp-2 text-xl font-semibold transition-colors">
												{course.title}
											</h3>
											<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
												{course.competencies[0]}
											</p>
											<Button asChild className="w-full">
												<Link to="/otec/cursos/$courseSlug" params={{ courseSlug: course.slug }}>
													Ver Detalles
												</Link>
											</Button>
										</CardContent>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.3}>
					<div className="mt-12 text-center">
						<HoverScale>
							<Button size="lg" variant="outline" asChild className="bg-transparent">
								<Link to="/otec/cursos">
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
