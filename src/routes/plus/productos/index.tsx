import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@/components/shared/image"
import { Products } from "@/data/plus/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/plus/productos/")({
	component: RouteComponent,
})

function RouteComponent() {
	const productsList = Object.values(Products)

	return (
		<main className="container mx-auto max-w-7xl px-4 py-12 pb-24">
			<FadeIn>
				<h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">Nuestros Productos</h1>
				<p className="text-muted-foreground mb-12 text-lg">
					Descubre nuestra gama de equipos de protección y seguridad industrial.
				</p>
			</FadeIn>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{productsList.map((product, index) => (
					<FadeIn key={product.slug} delay={index * 0.05}>
						<Card className="flex h-full flex-col overflow-hidden pt-0 transition-shadow hover:shadow-lg">
							<div className="relative aspect-square overflow-hidden bg-white p-6">
								<Image
									width={400}
									height={400}
									alt={product.name}
									src={`/images/plus/productos/${product.image}`}
									className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<CardHeader className="pb-2">
								<Badge className="bg-primary-green/10 text-primary-green hover:bg-primary-green/20 mb-2 w-fit border-0 shadow-none">
									{product.category}
								</Badge>
								<Link
									to="/plus/productos/$productId"
									params={{ productId: product.slug }}
									className="hover:text-primary-green line-clamp-2 text-lg font-bold transition-colors"
								>
									{product.name}
								</Link>
							</CardHeader>
							<CardContent className="flex-1 pb-4">
								<p className="text-muted-foreground line-clamp-3 text-sm">{product.description}</p>
							</CardContent>
							<CardFooter className="pt-0">
								<Button asChild variant="outline" className="hover:text-primary-green w-full">
									<Link to="/plus/productos/$productId" params={{ productId: product.slug }}>
										Ver Detalle
									</Link>
								</Button>
								{/* <Button
									asChild
									className="bg-primary-green hover:bg-primary-green/90 w-full text-white"
								>
									<Link to="/plus/cotizacion" search={{ productSlug: product.slug }}>
										<ShoppingCart className="h-4 w-4" />
									</Link>
								</Button> */}
							</CardFooter>
						</Card>
					</FadeIn>
				))}
			</div>
		</main>
	)
}
