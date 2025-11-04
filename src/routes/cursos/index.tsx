import { createFileRoute } from "@tanstack/react-router"

import CourseGrid from "@/components/sections/courses/course-grid"
import Filters from "@/components/sections/courses/filters"
import { FadeIn } from "@/components/animations/fade-in"

export const Route = createFileRoute("/cursos/")({
	component: CoursesPage,
})

const courses = [
	{
		id: "riesgos-electricos",
		title: "Control de Riesgos Eléctricos",
		category: "Prevención de Riesgos",
		description:
			"Capacitación completa en prevención y control de riesgos eléctricos según normativa chilena vigente.",
		duration: "16 horas",
		students: 450,
		rating: 4.8,
		level: "Intermedio",
		modality: "Presencial",
		image: "/images/courses/electrical-safety-training.jpg",
		price: "Consultar",
	},
	{
		id: "rescate-altura",
		title: "Técnicas de Rescate en Altura",
		category: "Trabajo en Altura",
		description:
			"Entrenamiento especializado en trabajo y rescate en altura con equipamiento certificado y prácticas reales.",
		duration: "24 horas",
		students: 380,
		rating: 4.9,
		level: "Avanzado",
		modality: "Presencial",
		image: "/images/courses/height-rescue-training.jpg",
		price: "Consultar",
	},
	{
		id: "primeros-auxilios",
		title: "Primeros Auxilios y Manejo del Trauma",
		category: "Salud y Emergencias",
		description:
			"Formación integral en respuesta a emergencias, primeros auxilios y manejo del trauma en el lugar de trabajo.",
		duration: "12 horas",
		students: 620,
		rating: 4.7,
		level: "Básico",
		modality: "Híbrido",
		image: "/images/courses/first-aid-training.png",
		price: "Consultar",
	},
	{
		id: "brigadas",
		title: "Formación de Brigadas de Emergencia",
		category: "Gestión de Emergencias",
		description:
			"Capacitación integral para brigadas de emergencia, protocolos de evacuación y gestión de crisis.",
		duration: "20 horas",
		students: 340,
		rating: 4.8,
		level: "Intermedio",
		modality: "Presencial",
		image: "/images/courses/emergency-brigade-training.jpg",
		price: "Consultar",
	},
	{
		id: "espacios-confinados",
		title: "Trabajo en Espacios Confinados",
		category: "Prevención de Riesgos",
		description:
			"Técnicas y protocolos de seguridad para trabajo en espacios confinados con certificación oficial.",
		duration: "16 horas",
		students: 280,
		rating: 4.6,
		level: "Avanzado",
		modality: "Presencial",
		image: "/images/courses/placeholder.svg?height=400&width=600",
		price: "Consultar",
	},
	{
		id: "extincion-incendios",
		title: "Extinción de Incendios",
		category: "Gestión de Emergencias",
		description:
			"Capacitación práctica en uso de extintores, técnicas de extinción y prevención de incendios.",
		duration: "8 horas",
		students: 520,
		rating: 4.7,
		level: "Básico",
		modality: "Presencial",
		image: "/images/courses/placeholder.svg?height=400&width=600",
		price: "Consultar",
	},
	{
		id: "izaje-cargas",
		title: "Izaje y Manipulación de Cargas",
		category: "Operaciones",
		description:
			"Técnicas seguras de izaje, manipulación y transporte de cargas pesadas con equipamiento especializado.",
		duration: "16 horas",
		students: 310,
		rating: 4.5,
		level: "Intermedio",
		modality: "Presencial",
		image: "/images/courses/placeholder.svg?height=400&width=600",
		price: "Consultar",
	},
	{
		id: "rcp-dea",
		title: "RCP y Uso de DEA",
		category: "Salud y Emergencias",
		description:
			"Reanimación cardiopulmonar y uso de desfibrilador externo automático con certificación internacional.",
		duration: "8 horas",
		students: 680,
		rating: 4.9,
		level: "Básico",
		modality: "Híbrido",
		image: "/images/courses/placeholder.svg?height=400&width=600",
		price: "Consultar",
	},
]

function CoursesPage() {
	return (
		<main className="flex flex-col items-center justify-center overflow-x-hidden">
			<section className="bg-muted/60 w-screen border-b py-12 lg:py-24">
				<div className="container mx-auto">
					<FadeIn>
						<div className="mx-auto max-w-3xl space-y-4 text-center">
							<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
								Catálogo de Cursos
							</h1>
							<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
								Descubre nuestra amplia oferta de capacitaciones en prevención de riesgos y
								seguridad laboral.
							</p>
						</div>
					</FadeIn>
				</div>
			</section>

			<Filters totalCourses={courses.length} />

			<CourseGrid courses={courses} />
		</main>
	)
}
