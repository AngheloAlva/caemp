import { createFileRoute } from "@tanstack/react-router"
import { Shield, Eye, Target, CheckCircle2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"

export const Route = createFileRoute("/plus/nosotros")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-green-50 py-20 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="mx-auto max-w-4xl text-center">
							<h1 className="text-primary-green mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
								Quiénes Somos
							</h1>
							<p className="text-xl leading-relaxed text-gray-700">
								Protegemos a quienes hacen el trabajo duro
							</p>
						</div>
					</FadeIn>
				</div>
			</section>

			{/* About Section */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						<SlideIn direction="left">
							<div className="flex flex-col justify-center">
								<p className="mb-6 text-lg leading-relaxed text-gray-700">
									En <span className="text-primary-green font-semibold">CAEMP PLUS</span>, parte del
									Grupo CAEMP, brindamos soluciones en seguridad industrial a través de equipos de
									protección personal y colectiva diseñados para garantizar la seguridad en cada
									entorno de trabajo.
								</p>
								<p className="mb-6 text-lg leading-relaxed text-gray-700">
									Ofrecemos productos de alta calidad como cascos, guantes, mascarillas, gafas y
									líneas de vida, asegurando que cada trabajador cuente con la protección adecuada
									para desempeñar sus labores con confianza y tranquilidad.
								</p>
								<p className="text-lg leading-relaxed text-gray-700">
									Nuestra asesoría especializada permite a las empresas seleccionar el equipo ideal
									para cada necesidad, promoviendo entornos más seguros y productivos.
								</p>
							</div>
						</SlideIn>

						<SlideIn direction="right" delay={0.2}>
							<div className="relative">
								<div className="bg-primary-green/10 absolute inset-0 blur-3xl" />
								<div className="from-primary-green/20 relative rounded-2xl bg-linear-to-br to-[#16A34A]/20 p-12">
									<Shield className="text-primary-green h-64 w-64" strokeWidth={1} />
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
							<Card className="border-primary-green/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary-green/10 mb-6 inline-flex rounded-full p-4">
										<Eye className="text-primary-green h-8 w-8" />
									</div>
									<h2 className="text-primary-green mb-4 text-2xl font-bold">Visión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										Ser reconocidos como el aliado estratégico en seguridad industrial,
										proporcionando equipos de protección confiables y asesoría experta para reducir
										riesgos y fortalecer la cultura de prevención en el trabajo.
									</p>
								</CardContent>
							</Card>
						</FadeIn>

						<FadeIn delay={0.3}>
							<Card className="border-primary-green/20 h-full">
								<CardContent className="p-8">
									<div className="bg-primary-green/10 mb-6 inline-flex rounded-full p-4">
										<Target className="text-primary-green h-8 w-8" />
									</div>
									<h2 className="text-primary-green mb-4 text-2xl font-bold">Misión</h2>
									<p className="text-lg leading-relaxed text-gray-700">
										Nuestra misión es proteger a los trabajadores a través de soluciones de
										seguridad industrial innovadoras y certificadas, garantizando la prevención de
										riesgos y el cumplimiento de normativas en cada sector.
									</p>
								</CardContent>
							</Card>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* Commitment Section */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<FadeIn>
						<div className="from-primary-green/10 rounded-2xl bg-linear-to-br to-[#16A34A]/10 p-8 md:p-12">
							<div className="flex items-start gap-4">
								<div className="bg-primary-green rounded-full p-3">
									<CheckCircle2 className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="text-primary-green mb-4 text-2xl font-bold">
										Seguridad y Confianza para Trabajos de Alto Riesgo
									</h3>
									<p className="text-lg leading-relaxed text-gray-700">
										Brindamos las herramientas y servicios esenciales para garantizar la seguridad
										en trabajos con exposición a caídas y situaciones de riesgo. Nos comprometemos a
										ser tu aliado estratégico en la prevención, ofreciendo asesoría experta y
										soluciones profesionales para un entorno de trabajo más seguro y eficiente.
									</p>
								</div>
							</div>
						</div>
					</FadeIn>
				</div>
			</section>
		</main>
	)
}
