import { createFileRoute } from "@tanstack/react-router"
import { Target, Eye, Users, TrendingUp, Lightbulb } from "lucide-react"
import { Image } from "@/components/shared/image"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export const Route = createFileRoute("/crecimiento/nosotros")({
	component: RouteComponent,
})

const stats = [
	{ value: new Date().getFullYear() - 2010 + "+", label: "Años de experiencia" },
	{ value: "750+", label: "Titulados" },
	{ value: "100%", label: "Comprometidos" },
	{ value: "100%", label: "Experiencia Enriquecedora" },
]

const reasons = [
	{
		icon: Target,
		title: "Compromiso con el Éxito",
		description:
			"Creemos que invertir en las personas es invertir en el futuro de la organización, impulsando el liderazgo y las habilidades interpersonales necesarias para triunfar.",
	},
	{
		icon: TrendingUp,
		title: "Programas Transformadores",
		description:
			"Ofrecemos capacitaciones que no solo enseñan, sino que transforman el talento en resultados tangibles.",
	},
	{
		icon: Users,
		title: "Enfoque Integral",
		description:
			"Diseñamos cursos para todos los niveles de la organización, garantizando un desarrollo completo y sostenible.",
	},
	{
		icon: Lightbulb,
		title: "Metodologías Modernas",
		description:
			"Utilizamos herramientas y técnicas efectivas para asegurar un aprendizaje práctico y aplicable.",
	},
]

function RouteComponent() {
	return (
		<main className="flex flex-col">
			<section className="relative overflow-hidden py-20 md:py-36">
				<div className="absolute inset-0 -z-10">
					<Image
						src="/images/crecimiento/nosotros-2.jpg"
						layout="fullWidth"
						alt="Background"
						className="h-full w-full object-cover brightness-[0.3]"
					/>
				</div>

				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="mx-auto max-w-4xl text-center text-white">
							<h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
								Quiénes Somos
							</h1>
							<p className="text-xl leading-relaxed text-white/90">
								Transformamos potencial en resultados concretos
							</p>
						</div>
					</FadeIn>
				</div>
			</section>

			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						<SlideIn direction="left">
							<div className="flex flex-col justify-center">
								<p className="mb-6 text-lg leading-relaxed text-gray-700">
									En <span className="text-primary-purple font-semibold">Crecimiento</span>, parte
									del Grupo CAEMP, potencia el desarrollo profesional y personal mediante programas
									de capacitación transformadores.
								</p>
								<p className="mb-6 text-lg leading-relaxed text-gray-700">
									Ofrecemos cursos para todos los niveles organizacionales en áreas como liderazgo,
									coaching y trabajo en equipo, basándonos en metodologías modernas y herramientas
									efectivas.
								</p>
								<p className="text-lg leading-relaxed text-gray-700">
									Creemos que el desarrollo humano es clave para el éxito empresarial, y nuestros
									programas convierten el potencial de las personas en resultados tangibles,
									fortaleciendo relaciones laborales y optimizando el rendimiento organizacional.
								</p>
							</div>
						</SlideIn>

						<SlideIn direction="right" delay={0.2}>
							<div className="relative aspect-square overflow-hidden rounded-2xl">
								<Image
									src="/images/crecimiento/nosotros.jpg"
									layout="fullWidth"
									alt="Nosotros"
									className="h-full w-full object-cover"
								/>
							</div>
						</SlideIn>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid gap-8 md:grid-cols-2">
						<FadeIn delay={0.2}>
							<Card className="border-primary-purple/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary-purple/10 mb-6 inline-flex rounded-full p-4">
										<Eye className="text-primary-purple h-8 w-8" />
									</div>
									<h2 className="text-primary-purple mb-4 text-2xl font-bold">Visión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										Ser reconocidos como líderes en el desarrollo de programas de capacitación que
										impacten positivamente en el crecimiento humano y el éxito organizacional.
									</p>
								</CardContent>
							</Card>
						</FadeIn>

						<FadeIn delay={0.3}>
							<Card className="border-primary-purple/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary-purple/10 mb-6 inline-flex rounded-full p-4">
										<Target className="text-primary-purple h-8 w-8" />
									</div>
									<h2 className="text-primary-purple mb-4 text-2xl font-bold">Misión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										Nuestra misión es acompañar a las organizaciones en su camino hacia el éxito,
										enfocándonos en el fortalecimiento de las habilidades interpersonales y el
										liderazgo efectivo.
									</p>
								</CardContent>
							</Card>
						</FadeIn>
					</div>
				</div>
			</section>

			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat, index) => (
							<StaggerItem key={index}>
								<Card className="border-primary-purple/20 text-center">
									<CardContent className="p-8">
										<p className="text-primary-purple mb-2 text-4xl font-bold">{stat.value}</p>
										<p className="text-gray-700">{stat.label}</p>
									</CardContent>
								</Card>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>

			<section className="bg-gray-50 py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="mb-12 text-center">
							<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl">
								¿Por qué elegirnos?
							</h2>
						</div>
					</FadeIn>

					<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{reasons.map((reason, index) => {
							const Icon = reason.icon
							return (
								<StaggerItem key={index}>
									<Card className="border-primary-purple/20 hover:border-primary-purple h-full transition-all hover:shadow-lg">
										<CardContent className="p-6">
											<div className="bg-primary-purple/10 mb-4 inline-flex rounded-full p-3">
												<Icon className="text-primary-purple h-6 w-6" />
											</div>
											<h3 className="mb-3 text-lg font-semibold text-gray-900">{reason.title}</h3>
											<p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
										</CardContent>
									</Card>
								</StaggerItem>
							)
						})}
					</StaggerContainer>
				</div>
			</section>
		</main>
	)
}
