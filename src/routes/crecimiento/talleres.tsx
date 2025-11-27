import { createFileRoute } from "@tanstack/react-router"
import { Image } from "@unpic/react"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"

export const Route = createFileRoute("/crecimiento/talleres")({
	component: RouteComponent,
})

const workshopsList = [
	{
		title: "Dinámicas de alto impacto",
		description:
			"Experiencias diseñadas para movilizar energía, romper barreras y generar aprendizajes profundos en poco tiempo. Utilizamos metodologías activas que involucran cuerpo, emoción y lenguaje.",
		image: "/images/crecimiento/galery-1.jpeg",
	},
	{
		title: "Ejercicios de comunicación efectiva",
		description:
			"Prácticas para mejorar la escucha activa, la asertividad y la claridad en la transmisión de mensajes. Fomentamos conversaciones que construyen confianza y coordinación impecable.",
		image: "/images/crecimiento/galery-2.jpeg",
	},
	{
		title: "Prácticas de liderazgo consciente",
		description:
			"Herramientas para liderar desde la empatía, la autoconciencia y el propósito compartido. Desarrollamos líderes capaces de inspirar y sostener a sus equipos en tiempos de cambio.",
		image: "/images/crecimiento/galery-3.jpeg",
	},
	{
		title: "Integración de PNL",
		description:
			"Técnicas de Programación Neurolingüística para gestionar creencias limitantes, emociones y conductas. Potenciamos el rendimiento individual y colectivo a través del cambio de perspectiva.",
		image: "/images/crecimiento/galery-4.jpeg",
	},
	{
		title: "Simulaciones y juegos de roles",
		description:
			"Escenarios prácticos para ensayar nuevas habilidades en un entorno seguro y recibir feedback inmediato. El aprendizaje experiencial acelera la adopción de nuevas competencias.",
		image: "/images/crecimiento/galery-5.jpeg",
	},
	{
		title: "Reflexiones guiadas",
		description:
			"Espacios de introspección para integrar lo aprendido y conectarlo con la realidad laboral y personal. Aseguramos que la experiencia se traduzca en acciones concretas.",
		image: "/images/crecimiento/galery-6.jpeg",
	},
]

function RouteComponent() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-primary-purple relative py-20 text-white md:py-32">
				<div className="absolute inset-0 overflow-hidden opacity-10">
					<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-2xl" />
					<div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-white blur-2xl" />
				</div>
				<div className="relative container mx-auto px-4 text-center">
					<FadeIn>
						<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
							Nuestros Talleres
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
							Experiencias de aprendizaje vivencial diseñadas para fortalecer la confianza, la
							cohesión y el compromiso de tu equipo.
						</p>
					</FadeIn>
				</div>
			</section>

			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{workshopsList.map((workshop, index) => (
							<StaggerItem key={index} className="h-full">
								<Card className="group h-full overflow-hidden border-none pt-0 shadow-lg transition-all hover:shadow-2xl">
									<div className="relative aspect-video overflow-hidden">
										<Image
											src={workshop.image}
											alt={workshop.title}
											layout="fullWidth"
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									</div>
									<CardContent className="p-8">
										<h3 className="text-primary-purple mb-4 text-2xl font-bold group-hover:text-[#55206C]">
											{workshop.title}
										</h3>
										<p className="text-muted-foreground text-lg leading-relaxed">
											{workshop.description}
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
