"use client"

import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"

import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@unpic/react"

const businessLines = [
	{
		name: "CAEMP OTEC",
		title: "Capacitacion y Entrenamiento",
		logo: "/images/logo/logo-o-black.png",
		href: "/otec",
		color: "#004E8C",
	},
	{
		name: "Crecimiento",
		title: "Formacion y Couching",
		logo: "/images/logo/logo-c-black.png",
		href: "/crecimiento",
		color: "#8B5CF6",
	},
	{
		name: "CAEMP Plus",
		title: "Asesoria tecnica y venta de EPP",
		logo: "/images/logo/logo-p-black.png",
		href: "/prevencion",
		color: "#16A34A",
	},
]

export default function Hero() {
	return (
		<section className="relative flex min-h-[calc(100dvh-10rem)] w-full items-center justify-center overflow-hidden py-20 md:py-32">
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[3rem_3rem]">
				<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_300px,#e0e7ff,transparent)]"></div>
			</div>

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
								<h1 className="text-primary mb-6 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
									Grupo CAEMP
								</h1>
							</motion.div>
						</FadeIn>
					</div>

					<SlideIn direction="up" delay={0.4}>
						<div className="grid gap-12 md:grid-cols-3 md:gap-16">
							{businessLines.map((line, index) => (
								<motion.div
									key={line.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
									className="flex flex-col items-center"
								>
									<Link to={line.href} className="group flex flex-col items-center">
										<div className="transition-transform duration-300">
											<Image
												src={line.logo}
												alt={`Logo ${line.name}`}
												layout="constrained"
												width={384}
												height={384}
												className="h-52 w-52 object-contain lg:h-64 lg:w-64 xl:h-96 xl:w-96"
											/>
										</div>

										<p className="text-center text-base font-semibold text-gray-700 md:text-xl xl:text-2xl">
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
								<p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
									Más de 15 años acompañando a las empresas de Chile en la construcción de entornos
									laborales más seguros, conscientes y productivos
								</p>
							</SlideIn>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
