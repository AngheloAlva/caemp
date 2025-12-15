import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { Image } from "@/components/shared/image"

import { workshops } from "@/data/crecimiento/workshops"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Workshops(): React.ReactElement {
	const workshopsList = Object.values(workshops).slice(0, 6)

	return (
		<section id="talleres" className="w-full bg-gray-50 px-4 py-16 md:py-24">
			<div className="container mx-auto max-w-7xl">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Talleres Vivenciales
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Estos talleres fortalecen la confianza, la cohesión y el compromiso, impactando tanto
							en el bienestar individual como en el clima laboral. Cuando las personas crecen, las
							organizaciones también.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{workshopsList.map((workshop, index) => (
							<StaggerItem key={index} className="h-full">
								<HoverScale scale={1.03} className="h-full">
									<Link
										to="/crecimiento/talleres/$workshopSlug"
										params={{ workshopSlug: workshop.slug }}
										className="block h-full"
									>
										<Card className="group h-full gap-0 overflow-hidden border-none pt-0 shadow-md transition-all hover:shadow-xl">
											<div className="bg-muted relative aspect-video overflow-hidden">
												<Image
													src={workshop.imagen || "/images/placeholder.svg"}
													alt={workshop.nombre}
													layout="fullWidth"
													className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
											</div>
											<CardContent className="p-6">
												<h3 className="text-primary-purple mb-3 text-xl font-bold group-hover:text-[#55206C]">
													{workshop.nombre}
												</h3>
												<p className="text-muted-foreground line-clamp-3 text-base leading-relaxed">
													{workshop.objetivoGeneral}
												</p>
											</CardContent>
										</Card>
									</Link>
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
