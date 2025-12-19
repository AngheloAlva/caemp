"use client"

import { ArrowUpRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { motion } from "motion/react"

import { HoverScale } from "@/components/animations/hover-scale"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Image } from "@/components/shared/image"

const heroImages = [
	"/images/crecimiento/hero.jpg",
	"/images/crecimiento/hero-2.jpg",
	"/images/crecimiento/hero-3.jpg",
	"/images/crecimiento/hero-4.jpg",
]

export default function Hero(): React.ReactElement {
	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % heroImages.length)
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	return (
		<section className="relative w-screen overflow-hidden text-white">
			<div className="absolute inset-0 -z-20 h-full w-full">
				{heroImages.map((src, index) => (
					<motion.div
						key={src}
						initial={{ opacity: 0 }}
						animate={{ opacity: index === currentImage ? 1 : 0 }}
						transition={{ duration: 1 }}
						className="absolute inset-0 h-full w-full"
					>
						<Image
							src={src}
							width={1920}
							height={1080}
							alt="Background"
							className="h-full w-full object-cover"
							loading={index === 0 ? "eager" : "lazy"}
							fetchPriority={index === 0 ? "high" : "low"}
						/>
					</motion.div>
				))}
			</div>

			<div className="from-primary-purple to-primary-purple via-primary-purple/80 absolute inset-0 bg-linear-to-br" />

			<div
				className="animate-float absolute right-10 bottom-20 h-32 w-32 rounded-full bg-white/10 blur-xl"
				style={{ animationDelay: "1s" }}
			/>

			<div className="relative container mx-auto py-24 md:py-32 lg:py-48">
				<div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 text-center">
					<FadeIn delay={0.2}>
						<Badge variant="secondary" className="border-white/30 bg-white/20 text-white">
							Desarrollo profesional y personal transformador
						</Badge>
					</FadeIn>

					<SlideIn delay={0.3} direction="up">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
							Crecemos contigo: aprende, lidera y alcanza tu máximo potencial
						</h1>
					</SlideIn>

					<SlideIn delay={0.4} direction="up" className="mt-2">
						<p className="text-xl leading-relaxed text-pretty text-white/90">
							Donde el aprendizaje se encuentra con la acción.
						</p>
						<p className="text-xl leading-relaxed text-pretty text-white/90">
							¡Descubre cómo avanzar más allá de tus límites!
						</p>
					</SlideIn>

					<SlideIn delay={0.5} direction="up" className="mt-6">
						<div className="flex flex-wrap justify-center gap-4">
							<HoverScale>
								<Button
									size="lg"
									className="group text-primary-purple relative inline-flex items-center justify-center rounded-md bg-white font-semibold hover:bg-white/90"
									asChild
								>
									<Link to="/crecimiento/cotizacion">
										Solicitar Cotización
										<div className="relative ml-2 h-4 w-4 overflow-hidden">
											<div className="absolute transition-all duration-200 group-hover:translate-x-3 group-hover:-translate-y-4">
												<ArrowUpRightIcon className="h-4 w-4 stroke-3" />
												<ArrowUpRightIcon className="h-4 w-4 -translate-x-3 stroke-3" />
											</div>
										</div>
									</Link>
								</Button>
							</HoverScale>
						</div>
					</SlideIn>
				</div>
			</div>
		</section>
	)
}
