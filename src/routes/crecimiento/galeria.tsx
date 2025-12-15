import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/shared/image"

export const Route = createFileRoute("/crecimiento/galeria")({
	component: RouteComponent,
})

const galleryImages = [
	{ src: "/images/crecimiento/galery-1.jpeg", alt: "Transformación en acción" },
	{ src: "/images/crecimiento/galery-2.jpeg", alt: "Equipos conectados" },
	{ src: "/images/crecimiento/galery-3.jpeg", alt: "Liderazgo consciente" },
	{ src: "/images/crecimiento/galery-4.jpeg", alt: "Aprendizaje experiencial" },
	{ src: "/images/crecimiento/galery-5.jpeg", alt: "Dinámicas de grupo" },
	{ src: "/images/crecimiento/galery-6.jpeg", alt: "Colaboración efectiva" },
	{ src: "/images/crecimiento/galery-7.jpeg", alt: "Desarrollo de habilidades" },
	{ src: "/images/crecimiento/galery-8.jpeg", alt: "Momentos compartidos" },
	{ src: "/images/crecimiento/galery-9.jpeg", alt: "Crecimiento personal" },
	{ src: "/images/crecimiento/galery-10.jpeg", alt: "Conexión humana" },
	{ src: "/images/crecimiento/hero.png", alt: "Nuestra comunidad" },
]

function RouteComponent() {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

	const openLightbox = (index: number) => setSelectedImageIndex(index)
	const closeLightbox = () => setSelectedImageIndex(null)

	const nextImage = (e?: React.MouseEvent) => {
		e?.stopPropagation()
		if (selectedImageIndex !== null) {
			setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length))
		}
	}

	const prevImage = (e?: React.MouseEvent) => {
		e?.stopPropagation()
		if (selectedImageIndex !== null) {
			setSelectedImageIndex((prev) =>
				prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
			)
		}
	}

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-primary-purple relative py-20 text-white md:py-32">
				<div className="absolute inset-0 overflow-hidden opacity-10">
					<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-2xl" />
					<div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-white blur-2xl" />
				</div>
				<div className="relative container mx-auto px-4 text-center">
					<FadeIn>
						<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Nuestra Galería</h1>
						<p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
							Instantes que transforman. Un recorrido visual por las experiencias que hemos
							compartido junto a personas y equipos extraordinarios.
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Gallery Grid */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{galleryImages.map((image, index) => (
							<div
								key={index}
								className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all hover:shadow-md"
								onClick={() => openLightbox(index)}
							>
								<div className="aspect-square overflow-hidden">
									<Image
										src={image.src}
										alt={image.alt}
										width={400}
										height={400}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
										decoding="async"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
									<ZoomIn className="h-8 w-8 text-white drop-shadow-md" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Lightbox */}
			<AnimatePresence>
				{selectedImageIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
						onClick={closeLightbox}
					>
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white"
							onClick={closeLightbox}
						>
							<X className="h-6 w-6" />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
							onClick={prevImage}
						>
							<ChevronLeft className="h-8 w-8" />
						</Button>

						<div
							className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={galleryImages[selectedImageIndex].src}
								alt={galleryImages[selectedImageIndex].alt}
								className="max-h-[85vh] w-auto object-contain shadow-2xl"
							/>
							<div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4 text-center text-white backdrop-blur-md">
								<p className="text-lg font-medium">{galleryImages[selectedImageIndex].alt}</p>
							</div>
						</div>

						<Button
							variant="ghost"
							size="icon"
							className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
							onClick={nextImage}
						>
							<ChevronRight className="h-8 w-8" />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	)
}
