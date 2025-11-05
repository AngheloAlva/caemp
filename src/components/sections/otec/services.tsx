import { AwardIcon, ShieldIcon, TrendingUpIcon, UsersIcon } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export default function Services(): React.ReactElement {
	return (
		<section className="bg-background px-4 py-16 md:py-24">
			<div className="container mx-auto">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							Nuestros Servicios
						</h2>
						<p className="text-muted-foreground mb-6 text-lg leading-relaxed text-pretty">
							Nos especializamos en la capacitación y entrenamiento en trabajos de alto riesgo y
							respuesta ante emergencias, con el propósito de elevar la seguridad laboral y prevenir
							accidentes.
						</p>
						<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
							Contamos con un centro de entrenamiento de alto nivel, equipado con tecnología de
							vanguardia y todas las herramientas necesarias para complementar nuestros cursos de
							excelencia. Formamos profesionales preparados para actuar con seguridad, reducir
							riesgos y proteger vidas en entornos desafiantes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="hover:border-primary/50 group h-full border-2 transition-all">
									<CardContent className="space-y-4 pt-6">
										<div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
											<ShieldIcon className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Control de Riesgos Eléctricos
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Capacitación especializada en identificación y control de riesgos eléctricos
											según normativa vigente.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="hover:border-primary/50 group h-full border-2 transition-all">
									<CardContent className="space-y-4 pt-6">
										<div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
											<TrendingUpIcon className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Rescate en Altura
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Entrenamiento práctico en técnicas de trabajo y rescate en altura con
											equipamiento certificado.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="hover:border-primary/50 group h-full border-2 transition-all">
									<CardContent className="space-y-4 pt-6">
										<div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
											<AwardIcon className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Primeros Auxilios
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Formación integral en respuesta a emergencias médicas y manejo del trauma en
											el lugar de trabajo.
										</p>
									</CardContent>
								</Card>
							</HoverScale>
						</StaggerItem>

						<StaggerItem>
							<HoverScale scale={1.03}>
								<Card className="hover:border-primary/50 group h-full border-2 transition-all">
									<CardContent className="space-y-4 pt-6">
										<div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
											<UsersIcon className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
										</div>
										<h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
											Formación de Brigadas
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Capacitación completa para brigadas de emergencia y protocolos de evacuación
											empresarial.
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
