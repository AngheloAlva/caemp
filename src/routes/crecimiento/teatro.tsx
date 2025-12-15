import { createFileRoute } from "@tanstack/react-router"
import { Theater as TheaterIcon } from "lucide-react"
import { Image } from "@/components/shared/image"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export const Route = createFileRoute("/crecimiento/teatro")({
	component: RouteComponent,
})

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
	{
		title: "Micromachismos en el Trabajo: Lo Que No Decimos, También Duele",
		description:
			"Obra sutil y potente que muestra situaciones diarias de machismo normalizado, promoviendo una reflexión sobre equidad de género.",
		image: "/images/crecimiento/talleres/machismo_laboral.jpeg",
	},
	{
		title: "Silencios Peligrosos: El Valor de Escuchar en la Prevención del Riesgo Psicosocial",
		description:
			"Relata historias de trabajadores que no hablaron a tiempo. Ideal para sensibilizar sobre la salud mental y los factores de riesgo psicosocial.",
		image: "/images/crecimiento/talleres/escena_de_obra_de_teatro_sobre_salud.jpeg",
	},
	{
		title: "La Reunión: Cuando los Roles y Egos Sabotean el Trabajo en Equipo",
		description:
			"Una comedia crítica que muestra las dinámicas de poder y liderazgo ineficaz en las reuniones laborales.",
		image: "/images/crecimiento/talleres/escena_de_liderazgo_ineficaz_para_obra_de.jpeg",
	},
	{
		title: "Yo También Me Caí: Adicciones Invisibles en el Trabajo",
		description:
			"Obra testimonial que visibiliza las adicciones funcionales en ambientes laborales. Especial para sectores industriales y altos cargos.",
		image: "/images/crecimiento/talleres/escena_de_obra_de_teatro_sobre_adicciones.jpeg",
	},
	{
		title: "Liderar no es Mandar: El Rol del Jefe que Transforma",
		description:
			"Muestra el impacto positivo o negativo de los líderes en el ambiente de trabajo. Ideal para procesos de coaching o formación de jefaturas.",
		image: "/images/crecimiento/talleres/grupo_de_gente_con_un_lider_en.jpeg",
	},
	{
		title: "Tiempo Muerto: ¿Dónde Quedó Mi Motivación?",
		description:
			"Obra introspectiva y participativa sobre la pérdida de propósito, motivación y el riesgo del burnout.",
		image: "/images/crecimiento/talleres/imagen_de_desmotivacion_laboral.jpeg",
	},
]

function RouteComponent() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-primary-purple relative py-20 text-white md:py-32">
				<div className="absolute inset-0 overflow-hidden opacity-10">
					<Image
						alt=""
						width={1920}
						height={1080}
						loading="lazy"
						decoding="async"
						src="/images/crecimiento/theater.jpg"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="relative container mx-auto px-4 text-center">
					<FadeIn>
						<div className="mx-auto mb-6 inline-flex rounded-full bg-white/10 p-4 backdrop-blur-sm">
							<TheaterIcon className="h-10 w-10 text-white" />
						</div>
						<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Teatro Aplicado</h1>
						<p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
							Una herramienta potente para educar, prevenir y transformar equipos a través de
							historias que reflejan la realidad laboral y generan conversaciones profundas.
						</p>
					</FadeIn>
				</div>
			</section>

			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{theaterPlays.map((play, index) => (
							<StaggerItem key={index} className="h-full">
								<Card className="group h-full overflow-hidden border-none pt-0 shadow-lg transition-all hover:shadow-2xl">
									<div className="relative aspect-4/3 overflow-hidden">
										<Image
											src={play.image}
											alt={play.title}
											layout="fullWidth"
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									</div>

									<CardContent>
										<h3 className="text-primary-purple mb-4 text-xl leading-tight font-bold group-hover:text-[#55206C]">
											{play.title}
										</h3>
										<p className="text-muted-foreground text-base leading-relaxed">
											{play.description}
										</p>
									</CardContent>
								</Card>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>
		</main>
	)
}
