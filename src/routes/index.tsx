import { createFileRoute } from "@tanstack/react-router"

import Companies from "@/components/sections/grupo/companies"
import Contact from "@/components/sections/grupo/contact"
import About from "@/components/sections/grupo/about"
import Hero from "@/components/sections/grupo/hero"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<About />
			<Companies />
			<Contact />
		</main>
	)
}
