import { Clock, BookOpen, ArrowRight } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { Image } from "@unpic/react"

import { courses } from "@/data/crecimiento/courses"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/crecimiento/talleres/")({
	component: RouteComponent,
})

function RouteComponent() {
	const allCourses = Object.values(courses)

	return (
		<main className="flex flex-col items-center justify-center space-y-6 overflow-x-hidden pb-20">
			<section
				className="relative w-screen px-4 py-14 text-white lg:py-24"
				style={{ backgroundColor: "#8B5CF6" }}
			>
				<div className="absolute -top-1 -right-1/3 z-0 size-full bg-[linear-gradient(to_right,#7C3AED2e_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED5e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px]"></div>

				<FadeIn>
					<div className="relative z-10 mx-auto max-w-4xl space-y-4 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							Todos Nuestros Talleres
						</h1>
						<p className="text-lg leading-relaxed text-pretty text-white/90">
							Descubre nuestra oferta completa de talleres y programas de capacitación diseñados
							para el crecimiento personal y organizacional.
						</p>
					</div>
				</FadeIn>
			</section>

			<section className="w-full max-w-7xl px-4">
				<StaggerContainer staggerDelay={0.08}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{allCourses.map((course) => (
							<StaggerItem key={course.slug} className="h-full">
								<HoverScale scale={1.02} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden border-2 py-0 transition-all hover:border-[#55206C]/50">
										<div className="bg-muted relative aspect-video overflow-hidden">
											<Image
												src={course.image || "/images/crecimiento/hero.png"}
												alt={course.title}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>

										<CardContent className="mb-4 p-4">
											<div className="mb-3 space-y-2">
												<h3 className="line-clamp-2 text-lg leading-tight font-semibold transition-colors group-hover:text-[#55206C]">
													{course.title}
												</h3>
											</div>

											<p className="text-muted-foreground mb-3 line-clamp-3 text-sm leading-relaxed">
												{course.objetivoGeneral}
											</p>

											<div className="flex flex-wrap gap-2">
												{course.modalidad.slice(0, 2).map((mod, index) => (
													<Badge
														key={index}
														variant="secondary"
														className="text-primary-purple text-xs"
													>
														{mod}
													</Badge>
												))}
											</div>

											<div className="text-muted-foreground mt-5 flex flex-col items-start gap-1 text-sm">
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>{course.duracion}</span>
												</div>
												<div className="flex items-center gap-1">
													<BookOpen className="h-4 w-4" />
													<span>{Object.keys(course.contenidos).length} módulos</span>
												</div>
											</div>
										</CardContent>

										<CardFooter className="mt-auto px-4 pb-4">
											<Button
												className="w-full"
												style={{
													backgroundColor: "#55206C",
												}}
												asChild
											>
												<a href={`/crecimiento/talleres/${course.slug}`}>
													Ver detalles
													<ArrowRight className="h-4 w-4" />
												</a>
											</Button>
										</CardFooter>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="mt-16 text-center">
						<div className="bg-primary-purple/10 mx-auto max-w-3xl rounded-2xl p-8">
							<h3 className="text-primary-purple mb-4 text-2xl font-bold">
								¿No encuentras lo que buscas?
							</h3>
							<p className="text-muted-foreground mb-6 text-lg">
								Podemos diseñar un programa personalizado para tu organización
							</p>
							<HoverScale>
								<Button
									size="lg"
									className="bg-primary-purple tracking-wider text-white hover:opacity-90"
									asChild
								>
									<a href="/crecimiento/cotizacion">
										Solicitar Programa Personalizado
										<ArrowRight className="h-5 w-5" />
									</a>
								</Button>
							</HoverScale>
						</div>
					</div>
				</FadeIn>
			</section>
		</main>
	)
}
