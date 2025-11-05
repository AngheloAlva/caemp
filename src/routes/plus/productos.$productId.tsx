import { ShoppingCart, Check, Package, Shield, Truck, ArrowLeft } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { useState } from "react"

import { SlideIn } from "@/components/animations/slide-in"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/plus/productos/$productId")({
	component: RouteComponent,
})

const productData = {
	id: "calzado-quebec-500",
	name: "Calzado Seguridad Quebec 500 Antiperforante",
	category: "Calzado de Seguridad",
	price: "$35.000",
	description:
		"Calzado de seguridad de alta resistencia, diseñado para proteger en entornos laborales exigentes. Cuenta con puntera de acero, plantilla antiperforante y suela antideslizante para máxima seguridad y comodidad.",
	images: [
		"/images/plus/producto/image.png",
		"/images/plus/producto/image-1.png",
		"/images/plus/producto/image-2.png",
		"/images/plus/producto/image-3.png",
	],
	features: [
		"Puntera de acero reforzada",
		"Plantilla antiperforante",
		"Suela antideslizante de alta tracción",
		"Material resistente al agua",
		"Diseño ergonómico",
		"Certificación ISP",
	],
	specifications: [
		{ label: "Material exterior", value: "Cuero sintético resistente" },
		{ label: "Suela", value: "Goma antideslizante" },
		{ label: "Puntera", value: "Acero reforzado" },
		{ label: "Plantilla", value: "Antiperforante" },
		{ label: "Tallas disponibles", value: "36 - 46" },
		{ label: "Certificación", value: "ISP Chile" },
	],
	inStock: true,
}

function RouteComponent() {
	const product = productData
	const [selectedImage, setSelectedImage] = useState(0)

	return (
		<main className="flex flex-col">
			<section className="bg-white py-4">
				<div className="container mx-auto max-w-7xl px-4">
					<Button
						asChild
						variant="ghost"
						className="text-primary-green hover:text-primary-green mb-8"
					>
						<Link to="/plus">
							<ArrowLeft className="h-4 w-4" />
							Volver a productos
						</Link>
					</Button>

					<div className="grid gap-12 lg:grid-cols-2">
						<div className="space-y-4">
							<FadeIn>
								<div className="border-primary-green/20 overflow-hidden rounded-2xl border-2 bg-gray-50">
									<img
										src={product.images[selectedImage]}
										alt={product.name}
										className="h-[500px] w-full object-contain"
									/>
								</div>
							</FadeIn>

							<div className="grid grid-cols-4 gap-4">
								{product.images.map((image, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.05 }}
										onClick={() => setSelectedImage(index)}
										className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
											selectedImage === index
												? "border-primary-green shadow-md"
												: "border-gray-200 hover:border-primary-green"
										}`}
									>
										<img
											src={image}
											alt={`${product.name} - Vista ${index + 1}`}
											className="h-24 w-full object-contain"
										/>
									</motion.div>
								))}
							</div>
						</div>

						<div className="flex flex-col">
							<SlideIn direction="right">
								<h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
									{product.name}
								</h1>
								<Badge className="bg-primary-green hover:bg-primary-green mb-8 w-fit">
									{product.category}
								</Badge>
								<p className="text-primary-green mb-6 text-4xl font-bold">{product.price}</p>
								<p className="mb-8 text-lg leading-relaxed text-gray-700">{product.description}</p>

								<div className="mb-8">
									<h3 className="mb-4 text-xl font-semibold text-gray-900">
										Características principales
									</h3>
									<ul className="space-y-3">
										{product.features.map((feature, index) => (
											<li key={index} className="flex items-start gap-3">
												<div className="bg-primary-green/10 mt-1 rounded-full p-1">
													<Check className="text-primary-green h-4 w-4" />
												</div>
												<span className="text-gray-700">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="space-y-4">
									<Button size="lg" className="bg-primary-green hover:bg-primary-green w-full">
										<ShoppingCart className="h-5 w-5" />
										Solicitar Cotización
									</Button>

									<div className="flex flex-row items-center justify-center gap-4 text-center lg:gap-8">
										<div className="flex flex-col items-center gap-2 text-sm">
											<div className="bg-primary-green/10 rounded-full p-3">
												<Package className="text-primary-green h-5 w-5" />
											</div>
											<span className="text-gray-600">En Stock</span>
										</div>
										<div className="flex flex-col items-center gap-2 text-sm">
											<div className="bg-primary-green/10 rounded-full p-3">
												<Shield className="text-primary-green h-5 w-5" />
											</div>
											<span className="text-gray-600">Certificado</span>
										</div>
										<div className="flex flex-col items-center gap-2 text-sm">
											<div className="bg-primary-green/10 rounded-full p-3">
												<Truck className="text-primary-green h-5 w-5" />
											</div>
											<span className="text-gray-600">Envío Rápido</span>
										</div>
									</div>
								</div>
							</SlideIn>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-12 md:py-20">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<h2 className="text-primary-green mb-8 text-3xl font-bold">
							Especificaciones Técnicas
						</h2>
						<Card className="border-primary-green/20">
							<CardContent className="p-6">
								<div className="grid gap-4 gap-x-10 md:grid-cols-2">
									{product.specifications.map((spec, index) => (
										<div
											key={index}
											className="flex justify-between border-b border-gray-100 pb-3 last:border-0"
										>
											<span className="font-semibold text-gray-900">{spec.label}:</span>
											<span className="text-gray-700">{spec.value}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</FadeIn>
				</div>
			</section>
		</main>
	)
}
