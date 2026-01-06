import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"

import { galleryImages } from "@/data/otec/galery"

import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@/components/shared/image"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/otec/galeria")({
	component: RouteComponent,
})

const IMAGES_PER_PAGE = 12

function RouteComponent() {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
	const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE)
	const [isLoading, setIsLoading] = useState(false)
	const loadMoreRef = useRef<HTMLDivElement>(null)

	const visibleImages = galleryImages.slice(0, visibleCount)
	const hasMore = visibleCount < galleryImages.length

	// Load more images when reaching the bottom
	const loadMore = useCallback(() => {
		if (isLoading || !hasMore) return

		setIsLoading(true)
		// Simulate network delay for smooth UX (remove in production if images are local)
		setTimeout(() => {
			setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, galleryImages.length))
			setIsLoading(false)
		}, 300)
	}, [isLoading, hasMore])

	// Intersection Observer for infinite scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore && !isLoading) {
					loadMore()
				}
			},
			{ rootMargin: "200px" } // Start loading before reaching the end
		)

		const currentRef = loadMoreRef.current
		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [hasMore, isLoading, loadMore])

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

	// Keyboard navigation for lightbox
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedImageIndex === null) return

			switch (e.key) {
				case "ArrowRight":
					nextImage()
					break
				case "ArrowLeft":
					prevImage()
					break
				case "Escape":
					closeLightbox()
					break
			}
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [selectedImageIndex])

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-primary relative py-20 text-white md:py-32">
				<div className="absolute inset-0 overflow-hidden opacity-10">
					<Image
						src="/images/otec/galery.jpg"
						alt=""
						width={1920}
						height={1080}
						loading="lazy"
						decoding="async"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="relative container mx-auto px-4 text-center">
					<FadeIn>
						<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
							Galería de Capacitaciones
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
							Excelencia en formación técnica y seguridad laboral. Un vistazo a nuestras actividades
							prácticas en terreno.
						</p>
						<p className="mt-4 text-sm text-white/70">
							{galleryImages.length} imágenes • Mostrando {visibleImages.length}
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Gallery Grid */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{visibleImages.map((image, index) => (
							<motion.div
								key={image}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: (index % IMAGES_PER_PAGE) * 0.05 }}
								className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all hover:shadow-md"
								onClick={() => openLightbox(index)}
							>
								<div className="aspect-square overflow-hidden">
									<Image
										src={image}
										width={400}
										height={400}
										alt={"Imagen " + index}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
										decoding="async"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
									<ZoomIn className="h-8 w-8 text-white drop-shadow-md" />
								</div>
								<div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
									<p className="translate-y-2 text-sm font-medium text-white transition-transform duration-200 group-hover:translate-y-0">
										{image}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Load More Trigger / Loading Indicator */}
					<div ref={loadMoreRef} className="mt-12 flex justify-center">
						{isLoading && (
							<div className="flex items-center gap-2 text-gray-500">
								<Loader2 className="h-5 w-5 animate-spin" />
								<span>Cargando más imágenes...</span>
							</div>
						)}
						{!hasMore && galleryImages.length > IMAGES_PER_PAGE && (
							<p className="text-sm text-gray-400">
								Has visto todas las {galleryImages.length} imágenes
							</p>
						)}
					</div>
				</div>
			</section>

			{/* Lightbox */}
			<AnimatePresence>
				{selectedImageIndex !== null && (
					<motion.div
						exit={{ opacity: 0 }}
						onClick={closeLightbox}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
					>
						{/* Counter */}
						<div className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
							{selectedImageIndex + 1} / {galleryImages.length}
						</div>

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

						<motion.div
							key={selectedImageIndex}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								alt={"Imagen " + selectedImageIndex}
								src={galleryImages[selectedImageIndex]}
								className="max-h-[85vh] w-auto object-contain shadow-2xl"
							/>
							<div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4 text-center text-white backdrop-blur-md">
								<p className="text-lg font-medium">Imagen {selectedImageIndex + 1}</p>
							</div>
						</motion.div>

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
