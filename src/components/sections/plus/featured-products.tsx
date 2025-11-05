import { ShoppingCart, Eye } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
	{
		id: "calzado-quebec-500",
		name: "Calzado Seguridad Quebec 500 Antiperforante",
		category: "Calzado de Seguridad",
		price: "$35.000",
		image: "/images/plus/producto/image.png",
		features: ["Antiperforante", "Puntera de acero", "Suela antideslizante"],
		inStock: true,
	},
]

export default function FeaturedProducts() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-green mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Productos Destacados
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-700">
							Descubre nuestra selección de equipos de protección de alta calidad
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{products.map((product, index) => (
						<StaggerItem key={`${product.id}-${index}`}>
							<motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
								<Card className="group border-primary-green/20 hover:border-primary-green h-full overflow-hidden p-0 transition-all hover:shadow-xl">
									<div className="relative overflow-hidden bg-gray-50">
										<img
											src={product.image}
											alt={product.name}
											className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
										/>
										{product.inStock && (
											<Badge className="bg-primary-green absolute top-3 right-3 hover:bg-[#16A34A]">
												En Stock
											</Badge>
										)}
									</div>
									<CardContent className="p-6">
										<p className="text-primary-green mb-2 text-sm font-medium">
											{product.category}
										</p>
										<h3 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
											{product.name}
										</h3>
										<ul className="mb-4 space-y-1">
											{product.features.map((feature, idx) => (
												<li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
													<span className="bg-primary-green mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
										<div className="flex items-center justify-between border-t border-gray-100 pt-4">
											<p className="text-primary-green text-2xl font-bold">{product.price}</p>
											<div className="flex gap-2">
												<Button
													asChild
													size="sm"
													variant="outline"
													className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
												>
													<Link to="/plus/productos/$productId" params={{ productId: product.id }}>
														<Eye className="h-4 w-4" />
													</Link>
												</Button>
												<Button size="sm" className="bg-primary-green hover:bg-[#16A34A]">
													<ShoppingCart className="h-4 w-4" />
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	)
}
