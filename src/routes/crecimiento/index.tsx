import { createFileRoute } from "@tanstack/react-router"

import Hero from "@/components/sections/growth/hero"
import Workshops from "@/components/sections/growth/workshops"
import Benefits from "@/components/sections/growth/benefits"
import WhyChose from "@/components/sections/growth/why-chose"
import Modalities from "@/components/sections/growth/modalities"
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
			<Modalities />
			<Cta />
		</main>
	)
}
