import { createFileRoute, Link } from "@tanstack/react-router"
import {
	Clock,
	Users,
	Target,
	Settings,
	BookOpen,
	ArrowRight,
	CheckCircle2,
	GraduationCap,
	ClipboardCheck,
} from "lucide-react"

import { courses } from "@/data/crecimiento/courses"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export const Route = createFileRoute("/crecimiento/cursos/$slug")({
	component: RouteComponent,
})

function RouteComponent() {
	const { slug } = Route.useParams()
	const course = courses[slug]

	if (!course) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center px-4">
				<FadeIn>
					<div className="text-center">
						<h1 className="mb-4 text-4xl font-bold">Taller no encontrado</h1>
						<p className="text-muted-foreground mb-8">
							El taller que buscas no existe o ha sido movido.
						</p>
						<Button asChild>
							<a href="/crecimiento/talleres">Ver todos los talleres</a>
						</Button>
					</div>
				</FadeIn>
			</main>
		)
	}

	return (
		<main className="flex flex-col items-center justify-center overflow-x-hidden pb-20">
			<section
				className="relative w-screen px-6 py-14 text-white lg:py-20"
				style={{ backgroundColor: "#8B5CF6" }}
			>
				<div className="absolute -top-1 -right-1/3 z-0 size-full bg-[linear-gradient(to_right,#7C3AED2e_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED5e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px]"></div>

				<FadeIn>
					<div className="relative z-10 mx-auto max-w-6xl">
						<div className="mb-6">
							<Badge className="mb-4 bg-white/20 text-white backdrop-blur">
								SENCE: {course.codigoSENCE}
							</Badge>
							<h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
								{course.title}
							</h1>
						</div>

						<div className="flex flex-col gap-2 text-white/90">
							<div className="flex items-center gap-2">
								<Clock className="h-5 w-5" />
								<span>{course.duracion}</span>
							</div>
							<div className="flex items-center gap-2">
								<BookOpen className="h-5 w-5" />
								<span>{Object.keys(course.contenidos).length} módulos</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="h-5 w-5" />
								<span>{course.ejecucion}</span>
							</div>
						</div>
					</div>
				</FadeIn>
			</section>

			<section className="w-full max-w-6xl px-4 py-12">
				<FadeIn delay={0.1}>
					<div className="mb-8 grid gap-4 md:grid-cols-3">
						<Card className="border-primary-purple/20 bg-linear-to-br from-purple-50 to-white">
							<CardContent className="flex items-start gap-4 p-6">
								<div className="bg-primary-purple/10 rounded-lg p-3">
									<Users className="text-primary-purple h-6 w-6" />
								</div>
								<div>
									<p className="text-muted-foreground text-sm">Dirigido a</p>
									<p className="font-semibold">{course.dirigidoA.split(",")[0]}</p>
								</div>
							</CardContent>
						</Card>

						<Card className="border-primary-purple/20 bg-linear-to-br from-purple-50 to-white">
							<CardContent className="flex items-start gap-4 p-6">
								<div className="rounded-lg bg-purple-500/10 p-3">
									<BookOpen className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<p className="text-muted-foreground text-sm">Módulos</p>
									<p className="font-semibold">{Object.keys(course.contenidos).length} módulos</p>
								</div>
							</CardContent>
						</Card>

						<Card className="border-primary-purple/20 bg-linear-to-br from-purple-50 to-white">
							<CardContent className="flex items-start gap-4 p-6">
								<div className="rounded-lg bg-purple-500/10 p-3">
									<GraduationCap className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<p className="text-muted-foreground text-sm">Modalidades</p>
									<p className="font-semibold">{course.modalidad.length} disponibles</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</FadeIn>

				<FadeIn delay={0.2}>
					<Tabs defaultValue="descripcion" className="w-full">
						<TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 md:grid-cols-4">
							<TabsTrigger
								value="descripcion"
								className="data-[state=active]:bg-primary-purple flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white py-3 data-[state=active]:text-white"
							>
								<Target className="h-4 w-4" />
								<span className="hidden sm:inline">Descripción</span>
								<span className="sm:hidden">Desc.</span>
							</TabsTrigger>
							<TabsTrigger
								value="contenidos"
								className="data-[state=active]:bg-primary-purple flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white py-3 data-[state=active]:text-white"
							>
								<BookOpen className="h-4 w-4" />
								Contenidos
							</TabsTrigger>
							<TabsTrigger
								value="metodologia"
								className="data-[state=active]:bg-primary-purple flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white py-3 data-[state=active]:text-white"
							>
								<Settings className="h-4 w-4" />
								<span className="hidden sm:inline">Metodología</span>
								<span className="sm:hidden">Método</span>
							</TabsTrigger>
							<TabsTrigger
								value="requisitos"
								className="data-[state=active]:bg-primary-purple flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white py-3 data-[state=active]:text-white"
							>
								<ClipboardCheck className="h-4 w-4" />
								Requisitos
							</TabsTrigger>
						</TabsList>

						<TabsContent value="descripcion" className="mt-6 space-y-6">
							<Card className="border-primary-purple/20 gap-2">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Target className="text-primary-purple h-5 w-5" />
										Tendencia Actual
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">{course.tendenciaActual}</p>
								</CardContent>
							</Card>

							<Card className="border-primary-purple/20 gap-2">
								<CardHeader>
									<CardTitle>Objetivo General</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">{course.objetivoGeneral}</p>
								</CardContent>
							</Card>

							<Card className="border-primary-purple/20 gap-2">
								<CardHeader>
									<CardTitle>Objetivos Específicos</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{course.objetivosEspecificos.map((objetivo, index) => (
											<li key={index} className="flex items-start gap-3">
												<CheckCircle2 className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
												<span className="text-muted-foreground">{objetivo}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<div className="grid gap-6 md:grid-cols-2">
								<Card className="border-primary-purple/20 gap-2">
									<CardHeader>
										<CardTitle>Dirigido a</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground leading-relaxed">{course.dirigidoA}</p>
									</CardContent>
								</Card>

								<Card className="border-primary-purple/20 gap-2">
									<CardHeader>
										<CardTitle>Modalidades Disponibles</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{course.modalidad.map((mod, index) => (
												<Badge
													key={index}
													variant="secondary"
													className="bg-primary-purple/10 text-primary-purple"
												>
													{mod}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="contenidos" className="mt-6">
							<Card className="border-primary-purple/20 gap-2">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<BookOpen className="text-primary-purple h-5 w-5" />
										Contenidos del Programa
									</CardTitle>
									<p className="text-muted-foreground text-sm">
										Explora cada módulo para ver los temas detallados
									</p>
								</CardHeader>
								<CardContent>
									<Accordion type="single" collapsible className="w-full">
										{Object.entries(course.contenidos).map(([key, modulo], index) => (
											<AccordionItem key={key} value={`item-${index}`}>
												<AccordionTrigger className="text-primary-purple hover:text-primary-purple/80 text-left font-semibold">
													Módulo {index + 1}: {modulo.titulo}
												</AccordionTrigger>
												<AccordionContent>
													<ul className="space-y-2 pl-4">
														{modulo.items.map((item, itemIndex) => (
															<li key={itemIndex} className="flex items-start gap-2">
																<span className="text-primary-purple mt-1">•</span>
																<span className="text-muted-foreground text-sm">{item}</span>
															</li>
														))}
													</ul>
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</CardContent>
							</Card>

							<Card className="border-primary-purple/20 mt-6">
								<CardHeader>
									<CardTitle>Competencias a Desarrollar</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid gap-3 md:grid-cols-2">
										{course.competencias.map((competencia, index) => (
											<div key={index} className="flex items-start gap-3">
												<CheckCircle2 className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
												<span className="text-muted-foreground">{competencia}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="metodologia" className="mt-6">
							<div className="grid gap-6 md:grid-cols-2">
								<Card className="border-primary-purple/20 gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Settings className="text-primary-purple h-5 w-5" />
											Metodología
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="space-y-3">
											{course.metodologia.map((metodo, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary-purple/10 text-primary-purple mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
														{index + 1}
													</div>
													<span className="text-muted-foreground">{metodo}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								<Card className="border-primary-purple/20 gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<ClipboardCheck className="text-primary-purple h-5 w-5" />
											Evaluación
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="space-y-3">
											{course.evaluacion.map((evaluacion, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600">
														{index + 1}
													</div>
													<span className="text-muted-foreground">{evaluacion}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="requisitos" className="mt-6">
							<Card className="border-primary-purple/20 gap-6">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<ClipboardCheck className="text-primary-purple h-5 w-5" />
										Requisitos de Ingreso
									</CardTitle>
									<p className="text-muted-foreground text-sm">
										Asegúrate de cumplir con estos requisitos para aprovechar al máximo el taller
									</p>
								</CardHeader>
								<CardContent>
									<ul className="grid gap-4 md:grid-cols-2">
										{course.requisitosIngreso.map((requisito, index) => (
											<li
												key={index}
												className="border-primary-purple/20 flex items-start gap-3 rounded-lg border-l-4 bg-gray-50 p-4"
											>
												<CheckCircle2 className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
												<span className="text-muted-foreground">{requisito}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</FadeIn>

				<FadeIn delay={0.3}>
					<div className="bg-primary-purple/10 mt-12 rounded-2xl p-8 text-center">
						<h3 className="text-primary-purple mb-4 text-2xl font-bold">
							¿Interesado en este taller?
						</h3>
						<p className="text-muted-foreground mb-6 text-lg">
							Solicita una cotización personalizada para tu organización
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<HoverScale>
								<Button
									size="lg"
									className="bg-primary-purple hover:bg-primary-purple/80 tracking-wider text-white hover:opacity-90"
									asChild
								>
									<Link
										to="/crecimiento/cotizacion"
										search={{ serviceType: "cursos", serviceItem: course.slug }}
									>
										Solicitar Cotización
										<ArrowRight className="h-5 w-5" />
									</Link>
								</Button>
							</HoverScale>
							<HoverScale>
								<Button size="lg" variant="outline" className="hover:text-primary-purple" asChild>
									<Link to="/crecimiento/talleres">Ver más talleres</Link>
								</Button>
							</HoverScale>
						</div>
					</div>
				</FadeIn>
			</section>
		</main>
	)
}
