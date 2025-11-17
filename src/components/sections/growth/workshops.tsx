import { ArrowRight, Clock } from "lucide-react"
import { Image } from "@unpic/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { courses } from "@/data/crecimiento/courses"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@tanstack/react-router"

// Obtenemos los primeros 4 cursos
const talleresDestacados = Object.values(courses).slice(0, 4)

export default function Workshops(): React.ReactElement {
	return (
		<section id="talleres" className="bg-background py-16 md:py-24">
			<div className="container max-w-7xl">
				<FadeIn>
					<div className="mb-12 grid gap-6 md:grid-cols-2">
						<div className="relative overflow-hidden rounded-2xl">
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{ backgroundImage: "url(/images/crecimiento/hero.png)" }}
							/>

							<div className="from-primary-purple to-primary-purple absolute inset-0 bg-linear-to-br via-[#7C3AED] opacity-90" />

							<div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-white md:p-12">
								<h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
									Talleres que Mueven, Conectan y Transforman
								</h2>
								<p className="text-lg leading-relaxed text-white/90">
									En Crecimiento creemos que las habilidades se instalan viviéndolas, no solo
									escuchándolas. Por eso, nuestros talleres son dinámicos, participativos y
									orientados a generar cambios internos profundos.
								</p>
							</div>
						</div>

						<div className="flex flex-col justify-center">
							<p className="text-muted-foreground mb-3 text-lg font-semibold">
								Incluimos actividades como:
							</p>
							<ul>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">Dinámicas de alto impacto</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">Ejercicios de comunicación efectiva</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">Prácticas de liderazgo consciente</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">
										Integración de PNL para gestionar creencias y emociones
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">Simulaciones y juegos de roles</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-primary-purple mt-1 text-xl">•</span>
									<span className="text-base">
										Reflexiones guiadas para integrar el aprendizaje
									</span>
								</li>
							</ul>

							<p className="text-muted-foreground mt-4 text-sm italic">
								Estos talleres fortalecen la confianza, la cohesión y el compromiso, impactando
								tanto en el bienestar individual como en el clima laboral. Cuando las personas
								crecen, las organizaciones también.
							</p>
						</div>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{talleresDestacados.map((taller) => (
							<StaggerItem key={taller.slug} className="h-full">
								<HoverScale scale={1.03} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden border-2 py-0 transition-all hover:border-[#55206C]/50">
										<div className="bg-muted relative aspect-video overflow-hidden">
											<Image
												src={taller.image || "/images/crecimiento/hero.png"}
												alt={taller.title}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute top-3 right-3">
												<Badge variant="secondary" className="bg-background/90 backdrop-blur">
													{taller.duracion}
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
													{taller.codigoSENCE}
												</Badge>
												<h3 className="line-clamp-2 text-lg leading-tight font-semibold transition-colors group-hover:text-[#55206C]">
													{taller.title}
												</h3>
											</div>

											<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
												{taller.objetivoGeneral}
											</p>

											<div className="text-muted-foreground flex items-center gap-4 pt-2 text-sm">
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>{taller.duracion}</span>
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
												<Link to="/crecimiento/talleres/$slug" params={{ slug: taller.slug }}>
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
								<a href="/crecimiento/talleres">
									Ver todos los talleres
									<ArrowRight className="h-5 w-5" />
								</a>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
