import { ShoppingCart, ArrowLeft } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Products } from "@/data/plus/products"

export const Route = createFileRoute("/plus/productos/$productId")({
	component: RouteComponent,
})

function RouteComponent() {
	const { productId } = Route.useParams()
	const product = Products[productId]

	if (!product) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="mb-4 text-2xl font-bold">Producto no encontrado</h1>
				<Button asChild>
					<Link to="/plus">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Volver a productos
					</Link>
				</Button>
			</main>
		)
	}

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
						<FadeIn>
							<div className="border-primary-green/20 overflow-hidden rounded-2xl border-2 bg-gray-50">
								<img
									src={`/images/plus/productos/${product.image}`}
									alt={product.name}
									className="h-[500px] w-full object-contain p-8"
								/>
							</div>
						</FadeIn>

						<div className="flex flex-col">
							<SlideIn direction="right">
								<h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
									{product.name}
								</h1>
								<Badge className="bg-primary-green hover:bg-primary-green mb-8 w-fit">
									{product.category}
								</Badge>

								<div className="mb-8">
									<h3 className="mb-4 text-xl font-semibold text-gray-900">Descripción</h3>
									<p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
										{product.description}
									</p>
								</div>

								<Button size="lg" className="bg-primary-green w-full hover:bg-[#16A34A]">
									<ShoppingCart className="mr-2 h-5 w-5" />
									Solicitar Cotización
								</Button>
							</SlideIn>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
