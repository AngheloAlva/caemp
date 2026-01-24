import { UserCheck, Award, Target, MonitorPlay, TrendingUp, ShieldCheck } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@/components/shared/image"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

const reasons = [
	{
		icon: UserCheck,
		title: "Procesos personalizados y acompañamiento real",
		description:
			"Diseñamos cada experiencia según las necesidades específicas de personas y equipos.",
	},
	{
		icon: Award,
		title: "Coaches certificados internacionalmente",
		description:
			"Por LATAM Coaching Network, International Association of Coaching™ (IAC) – Accredited School, y AEAPRO.",
	},
	{
		icon: Target,
		title: "Metodologías modernas y profundas",
		description:
			"Combinamos Coaching Profesional, PNL, dinámicas experienciales y herramientas de última generación.",
	},
	{
		icon: MonitorPlay,
		title: "Sesiones online o presenciales",
		description:
			"Flexibilidad total para adaptarnos a tu realidad: modalidad presencial, híbrida o 100% virtual.",
	},
	{
		icon: TrendingUp,
		title: "Resultados visibles desde las primeras sesiones",
		description:
			"Cambios concretos y sostenibles que se integran rápidamente en la vida personal y profesional.",
	},
]

export default function WhyChose(): React.ReactElement {
	return (
		<section className="bg-muted/60 w-screen px-4 py-16 md:py-24">
			<div className="container mx-auto">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
							¿Por qué elegir Coaching con Crecimiento?
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Creamos un espacio seguro, confidencial y transformador donde las personas descubren
							nuevas posibilidades y las organizaciones desarrollan su máximo potencial.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.12}>
					<div className="mx-auto mb-6 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
						{reasons.slice(0, 3).map((reason, index) => {
							const Icon = reason.icon
							return (
								<StaggerItem key={index}>
									<HoverScale scale={1.03} className="h-full">
										<Card className="group h-full border-2 transition-all hover:border-[#55206C]/50">
											<CardContent className="space-y-4">
												<div className="flex items-start gap-4">
													<div
														className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
														style={{
															backgroundColor: "#55206C",
														}}
													>
														<Icon className="h-6 w-6" />
													</div>
													<div className="flex-1">
														<h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-[#55206C]">
															{index + 1}. {reason.title}
														</h3>
														<p className="text-muted-foreground text-sm leading-relaxed">
															{reason.description}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</HoverScale>
								</StaggerItem>
							)
						})}
					</div>

					<div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
						{reasons.slice(3).map((reason, index) => {
							const Icon = reason.icon
							return (
								<StaggerItem key={index + 3}>
									<HoverScale scale={1.03} className="h-full">
										<Card className="group h-full border-2 transition-all hover:border-[#55206C]/50">
											<CardContent className="space-y-4">
												<div className="flex items-start gap-4">
													<div
														className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
														style={{
															backgroundColor: "#55206C",
														}}
													>
														<Icon className="h-6 w-6" />
													</div>
													<div className="flex-1">
														<h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-[#55206C]">
															{index + 4}. {reason.title}
														</h3>
														<p className="text-muted-foreground text-sm leading-relaxed">
															{reason.description}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</HoverScale>
								</StaggerItem>
							)
						})}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl bg-black/30 p-8 text-center md:p-10 md:py-24">
						<Image
							width={1152}
							height={396}
							className="absolute inset-0 -z-10"
							src="/images/crecimiento/gallery/galery-10.jpg"
							alt="2 personas dibujadas dandose la mano"
						/>

						<div className="bg-primary-purple mx-auto mb-4 inline-flex rounded-full p-3">
							<ShieldCheck className="h-8 w-8 text-white" />
						</div>
						<h3 className="text-primary-purple text-2xl font-bold">
							Agenda tu proceso de coaching y da el siguiente paso
						</h3>
						<p className="mb-8 text-lg text-white">Todo cambio comienza con una conversación.</p>

						<HoverScale>
							<Button
								size="lg"
								className="bg-primary-purple tracking-wider text-white hover:opacity-90"
								asChild
							>
								<Link to="/crecimiento/cotizacion">Iniciar Conversación</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
