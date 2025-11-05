import { createFileRoute } from "@tanstack/react-router"

import FeatureCourses from "@/components/sections/otec/feature-courses"
import WhyChoseUs from "@/components/sections/otec/why-chose-us"
import Services from "@/components/sections/otec/services"
import Benefits from "@/components/sections/otec/benefits"
import TrustUs from "@/components/sections/otec/trust-us"
import Stats from "@/components/sections/otec/stats"
import Hero from "@/components/sections/otec/hero"
import Cta from "@/components/sections/otec/cta"

export const Route = createFileRoute("/otec/")({ component: App })

function App() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<Stats />
			<WhyChoseUs />
			<Benefits />
			<Services />
			<FeatureCourses />
			<TrustUs />
			<Cta />
		</main>
	)
}
