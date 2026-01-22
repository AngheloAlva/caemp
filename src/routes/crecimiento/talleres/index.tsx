import { createFileRoute, Link } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"

import { workshops } from "@/data/crecimiento/workshops"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import HeroPage from "@/components/sections/growth/hero-page"

export const Route = createFileRoute("/crecimiento/talleres/")({
	component: RouteComponent,
})

function RouteComponent() {
	const workshopsList = Object.values(workshops)

	return (
		<main className="min-h-screen bg-white">
			<HeroPage
				title="Nuestros Talleres"
				image="/images/crecimiento/talleres.jpg"
				description="Experiencias de aprendizaje vivencial diseñadas para fortalecer la confianza, la cohesión y el compromiso de tu equipo."
			/>

			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{workshopsList.map((workshop, index) => (
							<StaggerItem key={index} className="h-full">
								<Link
									to="/crecimiento/talleres/$workshopSlug"
									params={{ workshopSlug: workshop.slug }}
									className="block h-full"
								>
									<Card className="group h-full overflow-hidden border-none pt-0 shadow-lg transition-all hover:shadow-xl">
										<div className="relative aspect-video overflow-hidden">
											<Image
												width={800}
												height={600}
												alt={workshop.nombre}
												src={workshop.imagen || "/images/placeholder.svg"}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										</div>

										<CardContent>
											<h3 className="text-primary-purple mb-4 text-2xl font-bold group-hover:text-[#55206C]">
												{workshop.nombre}
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												{workshop.objetivoGeneral}
											</p>
										</CardContent>
									</Card>
								</Link>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>
		</main>
	)
}
