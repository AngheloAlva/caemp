import { ArrowRight, Theater as TheaterIcon } from "lucide-react"
import { Image } from "@unpic/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

const theaterPlays = [
	{
		title: "Ley Karin en Escena: Conciencia y Prevención Laboral",
		description:
			"Reflexión sobre violencia, acoso y maltrato en el trabajo. Basada en la Ley Karin, promueve una cultura de respeto y denuncia activa.",
		image: "/images/crecimiento/talleres/acoso_y_maltrato_en_el_trabajo.jpeg",
	},
	{
		title: "Incluir para Crecer: Diversidad e Inclusión Laboral",
		description:
			"Obra que visibiliza las barreras invisibles de la inclusión: discapacidad, género, etnias y contextos vulnerables en el entorno laboral.",
		image: "/images/crecimiento/talleres/inclusion_laboral.jpeg",
	},
	{
		title: "El Efecto del Clima: Cuando el Ambiente Laboral Lo Cambia Todo",
		description:
			"Dramatización de cómo el clima laboral impacta la productividad, la salud mental y la retención del talento.",
		image: "/images/crecimiento/talleres/fotografias_de_obra_de_teatro_de_clima.jpeg",
	},
	{
		title: "Conversemos: Comunicación que Construye o Destruye",
		description:
			"Situaciones de conflicto cotidiano en la oficina, donde la comunicación asertiva puede ser la diferencia entre un equipo funcional y uno tóxico.",
		image: "/images/crecimiento/talleres/obra_de_teatro_de_comunicaci_n_en_la.jpeg",
	},
]

export default function Theater(): React.ReactElement {
	return (
		<section id="teatro" className="bg-white py-16 md:py-24">
			<div className="container max-w-7xl">
				<FadeIn>
					<div className="mb-12 text-center">
						<div className="bg-primary-purple/10 mx-auto mb-6 inline-flex rounded-full p-4">
							<TheaterIcon className="text-primary-purple h-8 w-8" />
						</div>
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Teatro Aplicado
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Una herramienta potente para educar, prevenir y transformar equipos a través de
							historias que reflejan la realidad laboral.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{theaterPlays.map((play, index) => (
							<StaggerItem key={index} className="h-full">
								<HoverScale scale={1.03} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden border-none pt-0 shadow-md transition-all hover:shadow-xl">
										<div className="bg-muted relative aspect-4/3 overflow-hidden">
											<Image
												src={play.image}
												alt={play.title}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										</div>
										<CardContent className="p-6">
											<h3 className="text-primary-purple mb-3 line-clamp-2 text-lg leading-tight font-bold group-hover:text-[#55206C]">
												{play.title}
											</h3>
											<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
												{play.description}
											</p>
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
								<Link to="/crecimiento/teatro">
									Ver todas las obras
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
