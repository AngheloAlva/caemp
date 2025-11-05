import { createFileRoute } from "@tanstack/react-router"

import FeaturedProducts from "@/components/sections/plus/featured-products"
import Testimonials from "@/components/sections/plus/testimonials"
import Categories from "@/components/sections/plus/categories"
import Hero from "@/components/sections/plus/hero"
import About from "@/components/sections/plus/about"
import Cta from "@/components/sections/plus/cta"

export const Route = createFileRoute("/plus/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<About />
			<Categories />
			<FeaturedProducts />
			<Testimonials />
			<Cta />
		</main>
	)
}
