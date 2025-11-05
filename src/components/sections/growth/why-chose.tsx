import { LightbulbIcon, TrendingUpIcon, UsersIcon } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export default function WhyChose(): React.ReactElement {
	return (
		<section className="bg-muted/60 w-screen py-16 md:py-24">
			<div className="container mx-auto">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-2xl text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
							¿Por qué elegir Crecimiento?
						</h2>
						<p className="text-muted-foreground text-lg">
							Metodologías modernas que transforman el potencial en resultados
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.15}>
					<div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="group h-full border-2 transition-all hover:border-[#55206C]/50">
									<CardContent className="space-y-4 pt-3">
										<div
											className="flex h-12 w-12 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
											style={{
												backgroundColor: "#55206C",
											}}
										>
											<LightbulbIcon className="h-6 w-6" />
										</div>
										<h3 className="text-xl font-semibold transition-colors group-hover:text-[#55206C]">
											Metodologías Innovadoras
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Programas basados en las últimas tendencias en desarrollo humano y
											organizacional.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="group h-full border-2 transition-all hover:border-[#55206C]/50">
									<CardContent className="space-y-4 pt-3">
										<div
											className="flex h-12 w-12 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
											style={{
												backgroundColor: "#55206C",
											}}
										>
											<UsersIcon className="h-6 w-6" />
										</div>
										<h3 className="text-xl font-semibold transition-colors group-hover:text-[#55206C]">
											Expertos Certificados
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Facilitadores con amplia experiencia en coaching, liderazgo y desarrollo
											organizacional.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="group h-full border-2 transition-all hover:border-[#55206C]/50">
									<CardContent className="space-y-4 pt-3">
										<div
											className="flex h-12 w-12 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
											style={{
												backgroundColor: "#55206C",
											}}
										>
											<TrendingUpIcon className="h-6 w-6" />
										</div>
										<h3 className="text-xl font-semibold transition-colors group-hover:text-[#55206C]">
											Resultados Medibles
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Impacto tangible en el desempeño individual y organizacional con métricas
											claras.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>
					</div>
				</StaggerContainer>
			</div>
		</section>
	)
}
