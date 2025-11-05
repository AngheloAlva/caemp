import { ArrowRight, BookOpen } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const talleres = [
	{
		id: "liderazgo-efectivo",
		title: "Manejo Excel nivel avanzado",
		category: "Excel",
		description: "Curso de manejo de excel nivel avanzado.",
		duration: "16 horas",
		level: "Avanzado",
		price: "1.000.000",
		image: "/images/crecimiento/excel.png",
	},
	{
		id: "trabajo-equipo",
		title: "Manejo Excel nivel medio",
		category: "Excel",
		description: "Curso de manejo de excel nivel medio.",
		duration: "12 horas",
		level: "Medio",
		price: "1.000.000",
		image: "/images/crecimiento/excel.png",
	},
	{
		id: "coaching-empresarial",
		title: "Manejo Excel nivel básico",
		category: "Excel",
		description: "Curso de manejo de excel nivel básico.",
		duration: "20 horas",
		level: "Básico",
		price: "1.000.000",
		image: "/images/crecimiento/excel.png",
	},
	{
		id: "comunicacion-efectiva",
		title: "Curso minitiva",
		category: "Minitiva",
		description: "Curso de ejemplo para minitiva.",
		duration: "8 horas",
		level: "Básico",
		price: "1.000.000",
		image: "/images/crecimiento/excel.png",
	},
]

export default function Workshops(): React.ReactElement {
	return (
		<section id="talleres" className="bg-background py-16 md:py-24">
			<div className="container">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
							Talleres Disponibles
						</h2>
						<p className="text-muted-foreground text-lg">
							Donde el aprendizaje se encuentra con la acción. ¡Descubre cómo avanzar más allá de
							tus límites!
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{talleres.map((taller) => (
							<StaggerItem key={taller.id}>
								<HoverScale scale={1.03}>
									<Card className="group h-full gap-0 overflow-hidden border-2 py-0 transition-all hover:border-[#55206C]/50">
										<div className="bg-muted relative aspect-video overflow-hidden">
											<img
												src={taller.image}
												alt={taller.title}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute top-3 right-3">
												<Badge variant="secondary" className="bg-background/90 backdrop-blur">
													{taller.level}
												</Badge>
											</div>
										</div>
										<CardContent className="space-y-3 p-5">
											<div className="space-y-2">
												<Badge
													variant="outline"
													className="text-xs"
													style={{
														borderColor: "#55206C",
														color: "#55206C",
													}}
												>
													{taller.category}
												</Badge>
												<h3 className="line-clamp-2 text-lg leading-tight font-semibold transition-colors group-hover:text-[#55206C]">
													{taller.title}
												</h3>
											</div>

											<p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
												{taller.description}
											</p>

											<div className="text-muted-foreground flex items-center gap-4 pt-2 text-sm">
												<div className="flex items-center gap-1">
													<BookOpen className="h-4 w-4" />
													<span>{taller.duration}</span>
												</div>
											</div>

											<Button
												className="mt-2 w-full"
												style={{
													backgroundColor: "#55206C",
												}}
												asChild
											>
												<Link to={`/talleres/${taller.id}`}>Más información</Link>
											</Button>
										</CardContent>
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
								<Link to="/crecimiento/talleres">
									Ver todos los talleres
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
