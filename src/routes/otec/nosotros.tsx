import { createFileRoute } from "@tanstack/react-router"
import { Target, Eye, ShieldCheck } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"

export const Route = createFileRoute("/otec/nosotros")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="mx-auto max-w-4xl text-center">
							<h1 className="text-primary mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
								Quiénes Somos
							</h1>
							<p className="text-xl leading-relaxed text-gray-700">
								Líderes en capacitación y entrenamiento para trabajos de alto riesgo
							</p>
						</div>
					</FadeIn>
				</div>
			</section>

			{/* Purpose Section */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<SlideIn direction="left">
							<div className="flex flex-col justify-center">
								<div className="bg-primary/10 mb-6 inline-flex w-fit rounded-full p-3">
									<ShieldCheck className="text-primary h-8 w-8" />
								</div>
								<h2 className="text-primary mb-6 text-3xl font-bold">Nuestro Propósito</h2>
								<p className="text-lg leading-relaxed text-gray-700">
									El propósito de CAEMP SPA es proporcionar servicios de capacitación y
									entrenamiento especializados en trabajos de alto riesgo y respuesta ante
									emergencias, con el objetivo de mejorar la seguridad laboral de nuestros clientes
									y contribuir a la prevención de accidentes y riesgos laborales.
								</p>
							</div>
						</SlideIn>

						<SlideIn direction="right" delay={0.2}>
							<div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
								{/* Placeholder for Purpose Image */}
								<div className="absolute inset-0 flex items-center justify-center text-gray-400">
									<ShieldCheck className="h-24 w-24 opacity-20" />
								</div>
							</div>
						</SlideIn>
					</div>
				</div>
			</section>

			{/* Vision & Mission */}
			<section className="bg-gray-50 py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid gap-8 md:grid-cols-2">
						<FadeIn delay={0.2}>
							<Card className="border-primary/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary/10 mb-6 inline-flex rounded-full p-4">
										<Eye className="text-primary h-8 w-8" />
									</div>
									<h2 className="text-primary mb-4 text-2xl font-bold">Visión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										La visión de CAEMP SPA es ser reconocidos como líderes en capacitación y
										entrenamiento especializados en trabajos de alto riesgo y respuesta ante
										emergencias, destacándonos por la calidad de nuestros servicios, la experiencia
										de nuestros docentes y la eficiencia de nuestra infraestructura y equipamiento.
									</p>
								</CardContent>
							</Card>
						</FadeIn>

						<FadeIn delay={0.3}>
							<Card className="border-primary/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary/10 mb-6 inline-flex rounded-full p-4">
										<Target className="text-primary h-8 w-8" />
									</div>
									<h2 className="text-primary mb-4 text-2xl font-bold">Misión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										La misión de CAEMP SPA es facilitar servicios de capacitación, entrenamiento y
										respuesta ante emergencias en la transversalidad de los procesos de nuestros
										clientes, entregando nuestro conocimiento de manera personalizada y grupal,
										aportando valor en la formación de sus trabajadores y garantizando una
										experiencia humana y de calidad. Asimismo, nos comprometemos a mantener una
										infraestructura y equipamiento de punta dentro y fuera de nuestros campos de
										entrenamiento, con el fin de brindar una experiencia única y completa a nuestros
										clientes.
									</p>
								</CardContent>
							</Card>
						</FadeIn>
					</div>
				</div>
			</section>
		</main>
	)
}
