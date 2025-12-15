import { ArrowRight, Clock } from "lucide-react"
import { Image } from "@/components/shared/image"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { courses } from "@/data/crecimiento/courses"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@tanstack/react-router"

const cursosDestacados = Object.values(courses).slice(0, 4)

export default function FeaturedCourses(): React.ReactElement {
	return (
		<section id="cursos" className="bg-background px-4 py-16 md:py-24">
			<div className="container max-w-7xl">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Cursos Destacados
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Programas diseñados para potenciar tus habilidades y las de tu equipo.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{cursosDestacados.map((curso) => (
							<StaggerItem key={curso.slug} className="h-full">
								<HoverScale scale={1.03} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden border-2 py-0 transition-all hover:border-[#55206C]/50">
										<div className="bg-muted relative aspect-video overflow-hidden">
											<Image
												src={curso.image || "/images/crecimiento/hero.png"}
												alt={curso.title}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute top-3 right-3">
												<Badge
													variant="secondary"
													className="bg-background/90 text-primary-purple backdrop-blur"
												>
													{curso.duracion}
												</Badge>
											</div>
										</div>
										<CardContent className="p-4">
											<div className="space-y-2">
												<Badge
													variant="outline"
													className="text-xs"
													style={{
														borderColor: "#55206C",
														color: "#55206C",
													}}
												>
													{curso.codigoSENCE}
												</Badge>
												<h3 className="line-clamp-2 text-lg leading-tight font-semibold transition-colors group-hover:text-[#55206C]">
													{curso.title}
												</h3>
											</div>

											<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
												{curso.objetivoGeneral}
											</p>

											<div className="text-muted-foreground flex items-center gap-4 pt-2 text-sm">
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>{curso.duracion}</span>
												</div>
											</div>
										</CardContent>

										<CardFooter className="mt-auto px-4 pb-4">
											<Button
												className="mt-2 w-full"
												style={{
													backgroundColor: "#55206C",
												}}
												asChild
											>
												<Link to="/crecimiento/cursos/$slug" params={{ slug: curso.slug }}>
													Más información
												</Link>
											</Button>
										</CardFooter>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.5}>
					<div className="mt-12 text-center">
						<HoverScale>
							<Button
								size="lg"
								variant="outline"
								style={{
									borderColor: "#55206C",
									color: "#55206C",
								}}
								asChild
							>
								<Link to="/crecimiento/cursos">
									Ver todos los cursos
									<ArrowRight className="h-5 w-5" />
								</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
