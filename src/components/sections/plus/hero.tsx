import { Shield, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
	return (
		<section className="relative flex min-h-[calc(100dvh-14rem)] w-full items-center justify-center overflow-hidden py-20 md:py-32">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source src="/images/plus/hero.mp4" type="video/mp4" />
			</video>

			<div className="to-primary-green/70 absolute inset-0 bg-linear-to-r from-black/40 mix-blend-multiply" />

			<div className="relative z-10 container mx-auto max-w-7xl px-4">
				<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
					<FadeIn>
						<Badge className="mb-6 inline-flex items-center gap-2 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm [&>svg]:h-4 [&>svg]:w-4">
							<Shield />
							<span className="text-sm font-semibold">
								Asesoría Técnica y Equipos de Protección
							</span>
						</Badge>
					</FadeIn>

					<SlideIn direction="up" delay={0.2}>
						<h1 className="mb-6 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
							Máxima Seguridad, Máximo Rendimiento
						</h1>
					</SlideIn>

					<SlideIn direction="up" delay={0.3}>
						<p className="mb-8 text-lg text-white/90 md:text-xl">
							Protege a tu equipo con{" "}
							<span className="font-semibold text-white">asesoría experta</span> y{" "}
							<span className="font-semibold text-white">equipos de última generación</span> para un
							entorno de trabajo seguro y eficiente.
						</p>
					</SlideIn>

					<SlideIn direction="up" delay={0.4}>
						<div className="flex flex-wrap justify-center gap-4">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									asChild
									size="lg"
									className="bg-primary-green hover:bg-primary-green/90 text-white"
								>
									<a href="#">
										Ver Productos
										<ArrowRight className="h-5 w-5" />
									</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="text-primary-green hover:text-primary-green border-white hover:bg-white"
								>
									<a href="#">Solicitar Cotización</a>
								</Button>
							</motion.div>
						</div>
					</SlideIn>
				</div>
			</div>
		</section>
	)
}
