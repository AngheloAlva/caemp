"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

export default function Cta() {
	return (
		<section className="from-primary-green w-full bg-linear-to-br to-[#16A34A] py-20 md:py-32">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
							¿Listo para mejorar la seguridad de tu empresa?
						</h2>
						<p className="mb-12 text-xl text-white/90">
							Solicita una cotización personalizada y descubre cómo podemos ayudarte a crear un
							entorno laboral más seguro y eficiente.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button asChild size="lg" className="text-primary-green bg-white hover:bg-gray-100">
									<a href="#">
										Solicitar Cotización
										<ArrowRight className="ml-2 h-5 w-5" />
									</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="hover:text-primary-green border-white bg-white/10 text-white hover:bg-white"
								>
									<a href="#">Contáctanos</a>
								</Button>
							</motion.div>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
