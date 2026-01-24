"use client"

import { motion } from "motion/react"
import { Images } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

const galleryImages = [
	{
		src: "/images/crecimiento/gallery/galery-1.jpg",
		alt: "Experiencia de crecimiento 1",
		title: "Transformación en acción",
	},
	{
		src: "/images/crecimiento/gallery/galery-2.jpg",
		alt: "Experiencia de crecimiento 2",
		title: "Equipos conectados",
	},
	{
		src: "/images/crecimiento/gallery/galery-3.jpg",
		alt: "Experiencia de crecimiento 3",
		title: "Liderazgo consciente",
	},
]

export default function Gallery() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<div className="bg-primary-purple/10 mx-auto mb-6 inline-flex rounded-full p-4">
							<Images className="text-primary-purple h-8 w-8" />
						</div>
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Instantes que Transforman
						</h2>
						<p className="mx-auto mb-2 max-w-3xl text-xl font-semibold text-gray-900">
							Para acompañar su crecimiento
						</p>
						<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
							Cada imagen representa un paso, una emoción y un logro compartido. Nuestra galería
							muestra experiencias vividas junto a personas y equipos que confiaron en nosotros.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{galleryImages.map((image, index) => (
						<StaggerItem key={index}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								className="group relative overflow-hidden rounded-lg shadow-lg"
							>
								<div className="aspect-4/3 overflow-hidden">
									<img
										src={image.src}
										alt={image.alt}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="absolute right-0 bottom-0 left-0 p-6">
										<h3 className="text-lg font-semibold text-white">{image.title}</h3>
									</div>
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeIn delay={0.8}>
					<div className="mt-10 text-center">
						<p className="text-primary-purple text-lg font-medium">
							Cada momento cuenta. Cada experiencia transforma.
						</p>
					</div>
				</FadeIn>

				<FadeIn delay={0.6}>
					<div className="mt-4 text-center">
						<HoverScale>
							<Button
								asChild
								size="lg"
								className="bg-primary-purple hover:bg-primary-purple/80 text-white"
							>
								<Link to="/crecimiento/galeria">Ver Galería</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
