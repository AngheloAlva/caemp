import { createFileRoute } from "@tanstack/react-router"

import FeaturedCourses from "@/components/sections/growth/featured-courses"
import Testimonials from "@/components/sections/growth/testimonials"
import Workshops from "@/components/sections/growth/workshops"
import WhyChose from "@/components/sections/growth/why-chose"
import Benefits from "@/components/sections/growth/benefits"
import Programs from "@/components/sections/growth/programs"
import Coaching from "@/components/sections/growth/coaching"
import Courses from "@/components/sections/growth/courses"
import Gallery from "@/components/sections/growth/gallery"
import Theater from "@/components/sections/growth/theater"
import Hero from "@/components/sections/growth/hero"
import Cta from "@/components/sections/growth/cta"

export const Route = createFileRoute("/crecimiento/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Hero />
			<Courses />
			<FeaturedCourses />
			<Gallery />
			<Workshops />
			<Theater />
			<Programs />
			<WhyChose />
			<Coaching />
			<Benefits />
			<Testimonials />
			<Cta />
		</main>
	)
}
