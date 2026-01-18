import { createFileRoute } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"
import { Calendar, Clock } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import HeroPage from "@/components/sections/growth/hero-page"
import { Card, CardContent } from "@/components/ui/card"

export const Route = createFileRoute("/crecimiento/noticias")({
	component: RouteComponent,
})

const noticias = [
	{
		id: 1,
		title: "Crecimiento fue parte de la Semana de la Seguridad del Aeropuerto de Santiago",
		excerpt:
			"Aportando con una obra de teatro interactiva que, a través de un elenco profesional y la participación activa de los trabajadores, generó conciencia y reflexión sobre la importancia de la seguridad y la prevención en el entorno aeroportuario.",
		image: "/images/crecimiento/noticias/noticia-1.jpg",
		date: "Enero, 2026",
		readTime: "3 min",
	},
	{
		id: 2,
		title: "Crecimiento da inicio a su temporada de team building para gerencias",
		excerpt:
			"Este viernes 16 de enero, Crecimiento da inicio a su temporada de team building para gerencias, con una jornada diseñada para fortalecer el liderazgo, la cohesión y el trabajo colaborativo de equipos directivos mediante experiencias prácticas y de alto impacto.",
		image: "/images/crecimiento/noticias/noticia-2.jpg",
		date: "Enero, 2026",
		readTime: "2 min",
	},
]

function RouteComponent() {
	return (
		<main className="min-h-screen bg-white">
			<HeroPage
				title="Noticias"
				description="Mantente al tanto de nuestras últimas actividades, proyectos y colaboraciones en el desarrollo de personas y equipos."
				image="/images/crecimiento/noticias.jpg"
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-5xl px-4">
					<StaggerContainer className="space-y-8">
						{noticias.map((noticia) => (
							<StaggerItem key={noticia.id}>
								<Card className="group overflow-hidden border-none pl-6 shadow-lg transition-all hover:shadow-xl">
									<div className="grid gap-6 md:grid-cols-2">
										<div className="relative aspect-video overflow-hidden rounded-lg md:aspect-auto">
											<Image
												width={800}
												height={600}
												alt={noticia.title}
												src={noticia.image}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="from-primary-purple/60 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										</div>

										<CardContent className="flex flex-col justify-center p-6 md:p-8">
											<div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
												<div className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													<span>{noticia.date}</span>
												</div>
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>{noticia.readTime} de lectura</span>
												</div>
											</div>

											<h2 className="text-primary-purple mb-4 text-2xl leading-tight font-bold transition-colors group-hover:text-[#55206C]">
												{noticia.title}
											</h2>

											<p className="text-muted-foreground text-base leading-relaxed">
												{noticia.excerpt}
											</p>
										</CardContent>
									</div>
								</Card>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>
		</main>
	)
}
