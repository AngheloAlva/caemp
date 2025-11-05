import { Link } from "@tanstack/react-router"

import { HoverScale } from "@/components/animations/hover-scale"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero(): React.ReactElement {
	return (
		<section className="relative overflow-hidden text-white" style={{ backgroundColor: "#8B5CF6" }}>
			<div className="absolute inset-0 bg-linear-to-br from-[#8B5CF6] via-[#7C3AED] to-[#8B5CF6] opacity-90" />
			<div className="animate-float absolute top-20 left-10 h-20 w-20 rounded-full bg-white/10 blur-xl" />

			<div
				className="animate-float absolute right-10 bottom-20 h-32 w-32 rounded-full bg-white/10 blur-xl"
				style={{ animationDelay: "1s" }}
			/>
			<div className="relative container py-24 md:py-32 lg:py-40">
				<div className="mx-auto max-w-3xl space-y-8 text-center">
					<FadeIn delay={0.2}>
						<Badge variant="secondary" className="mb-4 border-white/30 bg-white/20 text-white">
							Desarrollo profesional y personal transformador
						</Badge>
					</FadeIn>
					<SlideIn delay={0.3} direction="up">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
							Crecemos contigo: aprende, lidera y alcanza tu máximo potencial
						</h1>
					</SlideIn>
					<SlideIn delay={0.4} direction="up">
						<p className="text-xl leading-relaxed text-pretty text-white/90">
							Donde el aprendizaje se encuentra con la acción. ¡Descubre cómo avanzar más allá de
							tus límites!
						</p>
					</SlideIn>
					<SlideIn delay={0.5} direction="up">
						<div className="flex flex-wrap justify-center gap-4">
							<HoverScale>
								<Button
									size="lg"
									className="group relative inline-flex items-center justify-center rounded-md bg-white font-semibold text-[#8B5CF6] hover:bg-white/90"
								>
									<Link to="/crecimiento/talleres">Ver Talleres</Link>
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
									className="border-white bg-white/10 text-white hover:bg-white/90 hover:text-[#8B5CF6]"
									asChild
								>
									<Link to="/crecimiento/contacto">Contáctanos</Link>
								</Button>
							</HoverScale>
						</div>
					</SlideIn>
				</div>
			</div>
		</section>
	)
}
