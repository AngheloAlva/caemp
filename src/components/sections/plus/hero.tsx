import { motion } from "motion/react"
import { Link } from "@tanstack/react-router"
import { Shield, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
	return (
		<section className="relative w-full overflow-hidden bg-linear-to-br from-green-50 via-white to-green-50 py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
					<div className="flex flex-col justify-center">
						<FadeIn>
							<Badge className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#22C55E]/10 text-[#22C55E] [&>svg]:h-4 [&>svg]:w-4">
								<Shield />
								<span className="text-sm font-semibold">
									Asesoría Técnica y Equipos de Protección
								</span>
							</Badge>
						</FadeIn>

						<SlideIn direction="up" delay={0.2}>
							<h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
								<span className="text-[#22C55E]">CAEMP PLUS</span>
								<br />
								Innovación y seguridad al servicio de las personas
							</h1>
						</SlideIn>

						<SlideIn direction="up" delay={0.3}>
							<p className="mb-8 text-lg text-gray-600 md:text-xl">
								Brindamos{" "}
								<span className="font-semibold text-[#22C55E]">asesoría técnica experta</span> y
								venta de{" "}
								<span className="font-semibold text-[#22C55E]">
									equipos de protección personal y colectiva
								</span>{" "}
								de última generación. Nuestro objetivo es garantizar entornos laborales seguros y
								eficientes.
							</p>
						</SlideIn>

						<SlideIn direction="up" delay={0.4}>
							<div className="flex flex-wrap gap-4">
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button asChild size="lg" className="bg-[#22C55E] hover:bg-[#16A34A]">
										<Link to="/plus/productos">
											Ver Productos
											<ArrowRight className="h-5 w-5" />
										</Link>
									</Button>
								</motion.div>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										asChild
										size="lg"
										variant="outline"
										className="border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white"
									>
										<Link to="/plus/cotizacion">Solicitar Cotización</Link>
									</Button>
								</motion.div>
							</div>
						</SlideIn>
					</div>

					<FadeIn delay={0.5}>
						<div className="relative flex items-center justify-center">
							<div className="absolute inset-0 bg-[#22C55E]/10 blur-3xl" />
							<div className="relative rounded-2xl bg-linear-to-br from-[#22C55E]/20 to-[#16A34A]/20 p-12">
								<Shield className="h-64 w-64 text-[#22C55E]" strokeWidth={1} />
							</div>
						</div>
					</FadeIn>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-green-100 opacity-20 blur-3xl" />
			<div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-green-100 opacity-20 blur-3xl" />
		</section>
	)
}
