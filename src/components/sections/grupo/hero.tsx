"use client"

import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"

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

	const scrollToSection = () => {
		const element = document.getElementById("quienes-somos")
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<section className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden py-16 md:min-h-[calc(100dvh-5rem)] md:py-24">
			<div className="absolute inset-0 -z-20 h-full w-full">
				{heroImages.map((src, index) => (
					<motion.div
						key={src}
						initial={{ opacity: 0 }}
						animate={{ opacity: index === currentImage ? 1 : 0 }}
						transition={{ duration: 1.2, ease: "easeInOut" }}
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

			<div className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

			<div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4">
				<div className="mx-auto max-w-7xl text-center">
					<FadeIn>
						<motion.div
							initial={{ scale: 0.95, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							className="mb-4"
						>
							<h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
								Grupo CAEMP
							</h1>
						</motion.div>
					</FadeIn>

					<SlideIn direction="up" delay={0.2}>
						<p className="mx-auto mb-8 max-w-2xl text-base text-white/90 md:mb-16 md:text-lg lg:text-xl">
							Más de {new Date().getFullYear() - 2010} años acompañando a las empresas de Chile en
							la construcción de entornos laborales más seguros, conscientes y productivos
						</p>
					</SlideIn>

					<SlideIn direction="up" delay={0.4}>
						<div className="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-12">
							{businessLines.map((line, index) => (
								<motion.div
									key={line.name}
									animate={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 30 }}
									transition={{ delay: 0.5 + index * 0.15, duration: 0.5, ease: "easeOut" }}
								>
									<Link
										to={line.href}
										className="group flex flex-col items-center rounded-xs p-2 transition-all duration-300 hover:bg-white/10"
									>
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.3 }}
											className="mb-3"
										>
											<Image
												width={384}
												height={384}
												src={line.logo}
												alt={`Logo ${line.name}`}
												className="h-52 w-52 object-contain lg:h-64 lg:w-64 xl:h-96 xl:w-96"
											/>
										</motion.div>

										<p className="text-center text-lg font-medium text-white md:text-xl lg:text-2xl">
											{line.title}
										</p>
										<div
											className="mt-2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-16"
											style={{ backgroundColor: line.color }}
										/>
									</Link>
								</motion.div>
							))}
						</div>
					</SlideIn>
				</div>
			</div>

			<motion.button
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.5 }}
				onClick={scrollToSection}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-white/70 transition-colors hover:text-white"
				aria-label="Scroll down"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
				>
					<ChevronDown className="h-8 w-8" />
				</motion.div>
			</motion.button>
		</section>
	)
}
