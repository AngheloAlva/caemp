"use client"

import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { motion } from "motion/react"

import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@/components/shared/image"

const businessLines = [
	{
		name: "CAEMP OTEC",
		title: "Capacitación y Entrenamiento",
		logo: "/images/logo/logo-o-white.png",
		href: "/otec",
		color: "#004E8C",
	},
	{
		name: "CAEMP Plus",
		title: "Asesoría Técnica y Venta de EPP",
		logo: "/images/logo/logo-p-white.png",
		href: "/plus",
		color: "#16A34A",
	},
	{
		name: "Crecimiento",
		title: "Formación y Coaching",
		logo: "/images/logo/logo-c-white.png",
		href: "/crecimiento",
		color: "#8B5CF6",
	},
]

const heroImages = ["/images/home/hero.png", "/images/home/hero-2.png", "/images/home/hero-3.png"]

export default function Hero() {
	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % heroImages.length)
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	return (
		<section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden py-20 md:min-h-[calc(100dvh-10rem)] md:py-32">
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
							height={935}
							alt="Background"
							className="h-full w-full object-cover"
							loading={index === 0 ? "eager" : "lazy"}
							fetchPriority={index === 0 ? "high" : "low"}
						/>
					</motion.div>
				))}
			</div>

			<div className="absolute inset-0 -z-10 bg-black/50" />

			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 text-center">
						<FadeIn>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="mb-6"
							>
								<h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
									Grupo CAEMP
								</h1>
							</motion.div>
						</FadeIn>
					</div>

					<SlideIn direction="up" delay={0.4}>
						<div className="grid gap-4 md:grid-cols-3 md:gap-16">
							{businessLines.map((line, index) => (
								<motion.div
									key={line.name}
									animate={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 20 }}
									className="flex flex-col items-center"
									transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
								>
									<Link to={line.href} className="group flex flex-col items-center">
										<div className="transition-transform duration-300">
											<Image
												width={384}
												height={384}
												src={line.logo}
												alt={`Logo ${line.name}`}
												className="h-52 w-52 object-contain lg:h-64 lg:w-64 xl:h-96 xl:w-96"
											/>
										</div>

										<p className="text-center text-xl font-semibold text-white md:text-2xl lg:text-3xl">
											{line.title}
										</p>
									</Link>
								</motion.div>
							))}
						</div>
					</SlideIn>

					<div className="mx-auto mt-12 max-w-7xl lg:mt-20">
						<div className="text-center">
							<SlideIn direction="up" delay={0.2}>
								<p className="mx-auto max-w-3xl text-white md:text-lg lg:text-xl">
									Más de {new Date().getFullYear() - 2010} años acompañando a las empresas de Chile
									en la construcción de entornos laborales más seguros, conscientes y productivos
								</p>
							</SlideIn>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
