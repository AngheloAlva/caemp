import { createFileRoute } from "@tanstack/react-router"

import Services from "@/components/sections/plus/services"
import Products from "@/components/sections/plus/products"
import Hero from "@/components/sections/plus/hero"
import Cta from "@/components/sections/plus/cta"

export const Route = createFileRoute("/plus/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<Services />
			<Products />
			<Cta />
		</main>
	)
}
