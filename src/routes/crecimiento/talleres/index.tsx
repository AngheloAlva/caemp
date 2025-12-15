import { createFileRoute, Link } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"

import { workshops } from "@/data/crecimiento/workshops"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export const Route = createFileRoute("/crecimiento/talleres/")({
	component: RouteComponent,
})

function RouteComponent() {
	const workshopsList = Object.values(workshops)

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
								<Link
									to="/crecimiento/talleres/$workshopSlug"
									params={{ workshopSlug: workshop.slug }}
									className="block h-full"
								>
									<Card className="group h-full overflow-hidden border-none pt-0 shadow-lg transition-all hover:shadow-2xl">
										<div className="relative aspect-video overflow-hidden">
											<Image
												src={workshop.imagen || "/images/placeholder.svg"}
												alt={workshop.nombre}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										</div>
										<CardContent className="p-8">
											<h3 className="text-primary-purple mb-4 text-2xl font-bold group-hover:text-[#55206C]">
												{workshop.nombre}
											</h3>
											<p className="text-muted-foreground text-lg leading-relaxed">
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
