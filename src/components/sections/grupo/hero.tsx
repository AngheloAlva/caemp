"use client"

import { ArrowUpRightIcon } from "lucide-react"
import { motion } from "motion/react"

import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Image } from "@unpic/react"

export default function Hero() {
	return (
		<section className="relative flex h-[calc(100dvh-10rem)] w-full items-center justify-center overflow-hidden py-20 md:py-32">
			{/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
			</div> */}
			<div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-50" />

			<Image
				width={1920}
				height={1080}
				alt="Grupo CAEMP"
				src="/images/home/hero.jpg"
				className="absolute -z-20 h-full w-full object-cover object-center"
			/>

			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					<FadeIn>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="mb-6"
						>
							<h1 className="text-primary mb-6 text-4xl font-black tracking-tight drop-shadow-2xl md:text-6xl lg:text-7xl">
								GRUPO CAEMP
							</h1>
						</motion.div>
					</FadeIn>

					<SlideIn direction="up" delay={0.2}>
						<p className="mb-8 text-xl text-gray-100 md:text-2xl lg:text-3xl">
							Cuidamos, enseñamos y transformamos la forma en que trabajamos y crecemos.
						</p>
					</SlideIn>

					<SlideIn direction="up" delay={0.4}>
						<p className="mb-12 text-lg text-gray-100 md:text-xl">
							Más de 15 años acompañando a las empresas de <strong>Chile</strong> en la construcción
							de entornos laborales más{" "}
							<span className="font-bold text-white">seguros, conscientes y productivos</span>.
						</p>
					</SlideIn>

					<SlideIn direction="up" delay={0.6}>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="group bg-primary relative inline-flex items-center justify-center rounded-md font-semibold tracking-wide text-white"
							>
								<a href="#nuestras-empresas">Conoce nuestras Líneas de Negocio</a>

								<div className="relative h-4 w-4 overflow-hidden">
									<div className="absolute transition-all duration-200 group-hover:translate-x-3 group-hover:-translate-y-4">
										<ArrowUpRightIcon className="h-4 w-4 stroke-3" />
										<ArrowUpRightIcon className="h-4 w-4 -translate-x-3 stroke-3" />
									</div>
								</div>
							</Button>
						</motion.div>
					</SlideIn>
				</div>

				{/* Decorative elements */}
				<div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
				<div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
			</div>
		</section>
	)
}
