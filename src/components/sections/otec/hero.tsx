import { ArrowUpRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { HoverScale } from "@/components/animations/hover-scale"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero(): React.ReactElement {
	return (
		<section className="bg-primary text-primary-foreground relative w-screen overflow-hidden">
			<div className="absolute inset-0 bg-[url('/images/home/hero.png')] bg-cover bg-center opacity-25" />

			<div className="bg-primary-foreground/10 animate-float absolute top-20 left-10 h-20 w-20 rounded-full blur-xl" />

			<div
				className="bg-primary-foreground/10 animate-float absolute right-10 bottom-20 h-32 w-32 rounded-full blur-xl"
				style={{ animationDelay: "1s" }}
			/>

			<div className="relative container mx-auto py-24 md:py-32 lg:py-40">
				<div className="mx-auto max-w-3xl space-y-8 text-center">
					<FadeIn delay={0.2}>
						<Badge variant="secondary" className="mb-4">
							Más de 25 años de experiencia
						</Badge>
					</FadeIn>
					<SlideIn delay={0.3} direction="up">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
							Especialistas en Capacitación y Seguridad Laboral
						</h1>
					</SlideIn>
					<SlideIn delay={0.4} direction="up">
						<p className="text-primary-foreground/90 mx-auto max-w-2xl text-lg leading-relaxed text-pretty md:text-xl">
							Formamos profesionales en prevención de riesgos, rescate en altura, primeros auxilios
							y formación de brigadas de emergencia en todo Chile.
						</p>
					</SlideIn>
					<FadeIn delay={0.5}>
						<div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
							<HoverScale>
								<Button
									size="lg"
									className="text-primary group relative inline-flex items-center justify-center rounded-md bg-white font-semibold hover:bg-white/90"
								>
									<Link to="/otec/cursos">Ver Cursos</Link>
									<div className="relative h-4 w-4 overflow-hidden">
										<div className="absolute transition-all duration-200 group-hover:translate-x-3 group-hover:-translate-y-4">
											<ArrowUpRightIcon className="h-4 w-4 stroke-3" />
											<ArrowUpRightIcon className="h-4 w-4 -translate-x-3 stroke-3" />
										</div>
									</div>
								</Button>
							</HoverScale>

							<HoverScale>
								<Button
									size="lg"
									variant="outline"
									asChild
									className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-base text-white hover:text-white"
								>
									<Link to="/otec/cotizacion">Solicitar Cotización</Link>
								</Button>
							</HoverScale>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	)
}
