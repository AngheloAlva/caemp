import { Link } from "@tanstack/react-router"
import { EyeIcon } from "lucide-react"
import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Products } from "@/data/plus/products"

const featuredSlugs = [
	"calzado-quebec-500-antiperforante",
	"arnés-eqs-basic-4d-respaldo-lumbar",
	"guante-executive-impact-force",
	"casco-yako-con-visera",
	"auto-rescatador-caemp-plus",
	"calzado-quebec-apollo",
]

// Get featured products from the Products object
const products = featuredSlugs
	.map((slug) => Products[slug])
	.filter((product) => product !== undefined)

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
						<StaggerItem key={`${product.slug}-${index}`}>
							<motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
								<Card className="group border-primary-green/20 hover:border-primary-green h-full overflow-hidden p-0 transition-all hover:shadow-xl">
									<div className="relative overflow-hidden bg-gray-50">
										<img
											src={`/images/plus/productos/${product.image}`}
											alt={product.name}
											className="h-64 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
									<CardContent className="p-6">
										<p className="text-primary-green mb-2 text-sm font-medium">
											{product.category}
										</p>
										<h3 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
											{product.name}
										</h3>
										<p className="mb-4 line-clamp-3 text-sm text-gray-600">{product.description}</p>
										<div className="flex items-center justify-between border-t border-gray-100 pt-4">
											<Button
												asChild
												size="sm"
												className="bg-primary-green w-full hover:bg-[#16A34A]"
											>
												<Link to="/plus/productos/$productId" params={{ productId: product.slug }}>
													<EyeIcon className="mr-2 h-4 w-4" />
													Ver Detalles
												</Link>
											</Button>
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
