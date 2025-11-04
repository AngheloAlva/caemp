import { createFileRoute } from "@tanstack/react-router"

import FeatureCourses from "@/components/sections/home/feature-courses"
import WhyChoseUs from "@/components/sections/home/why-chose-us"
import Services from "@/components/sections/home/services"
import Benefits from "@/components/sections/home/benefits"
import TrustUs from "@/components/sections/home/trust-us"
import Stats from "@/components/sections/home/stats"
import Hero from "@/components/sections/home/hero"
import Cta from "@/components/sections/home/cta"

export const Route = createFileRoute("/")({ component: App })

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
