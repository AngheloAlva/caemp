import { createFileRoute } from "@tanstack/react-router"

import CourseGrid from "@/components/sections/courses/course-grid"
import Filters from "@/components/sections/courses/filters"
import { FadeIn } from "@/components/animations/fade-in"
import { courses } from "@/data/otec/courses"
import { Image } from "@unpic/react"

export const Route = createFileRoute("/otec/cursos/")({
	component: CoursesPage,
})

function CoursesPage() {
	const coursesList = Object.values(courses)

	return (
		<main className="flex flex-col items-center justify-center overflow-x-hidden">
			<section className="relative w-screen overflow-hidden border-b py-12 lg:py-24 xl:py-32">
				<div className="absolute inset-0 -z-10">
					<Image
						layout="fullWidth"
						alt="Catálogo de Cursos"
						src="/images/otec/courses.jpg"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/60" />
				</div>
				<div className="relative z-10 container mx-auto">
					<FadeIn>
						<div className="mx-auto max-w-3xl space-y-4 text-center">
							<h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
								Catálogo de Cursos
							</h1>
							<p className="text-lg leading-relaxed text-pretty text-gray-200">
								Descubre nuestra amplia oferta de capacitaciones en prevención de riesgos y
								seguridad laboral.
							</p>
						</div>
					</FadeIn>
				</div>
			</section>

			<Filters totalCourses={coursesList.length} />

			<CourseGrid courses={coursesList} />
		</main>
	)
}
