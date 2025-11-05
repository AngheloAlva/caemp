import { createFileRoute } from "@tanstack/react-router"

import Testimonials from "@/components/sections/growth/testimonials"
import Workshops from "@/components/sections/growth/workshops"
import WhyChose from "@/components/sections/growth/why-chose"
import Benefits from "@/components/sections/growth/benefits"
import Hero from "@/components/sections/growth/hero"
import Cta from "@/components/sections/growth/cta"

export const Route = createFileRoute("/crecimiento/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<Workshops />
			<Benefits />
			<WhyChose />
			{/* <Modalities /> */}
			<Testimonials />
			<Cta />
		</main>
	)
}
