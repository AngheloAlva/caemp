import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import {
	AwardIcon,
	BookOpenIcon,
	CalendarIcon,
	CheckCircle2Icon,
	ClockIcon,
	MapPinIcon,
	PlayCircleIcon,
	ShieldIcon,
	StarIcon,
	TargetIcon,
	TrendingUpIcon,
	UsersIcon,
} from "lucide-react"

export const Route = createFileRoute("/cursos/$courseSlug")({
	component: RouteComponent,
})

const course = {
	id: "fdafa",
	title: "Control de Riesgos Eléctricos",
	subtitle:
		"Capacitación completa en prevención y control de riesgos eléctricos según normativa chilena vigente. Formación teórico-práctica con instructores certificados y equipamiento de última generación.",
	category: "Prevención de Riesgos",
	description:
		"Este curso proporciona una formación integral y exhaustiva en la identificación, evaluación y control de riesgos eléctricos en el lugar de trabajo. Los participantes aprenderán en profundidad las normativas vigentes en Chile, técnicas avanzadas de prevención, procedimientos de emergencia y el uso correcto de equipos de protección personal. El programa combina teoría con práctica intensiva en nuestras instalaciones especializadas, garantizando que los participantes adquieran las competencias necesarias para trabajar de manera segura en entornos con riesgo eléctrico.",
	duration: "16 horas",
	students: 450,
	rating: 4.8,
	reviews: 89,
	level: "Intermedio",
	modality: "Presencial",
	image: "/electrical-safety-training.jpg",
	instructor: "Juan Carlos Pérez",
	instructorTitle: "Ingeniero en Prevención de Riesgos",
	price: "Consultar",
	nextDate: "15 de Enero, 2025",
	location: "Campo de Entrenamiento CAEMP, Santiago",
}

const modules = [
	{
		title: "Módulo 1: Fundamentos de Electricidad",
		duration: "2 horas",
		lessons: [
			"Conceptos básicos de electricidad",
			"Tipos de corriente eléctrica",
			"Magnitudes eléctricas fundamentales",
			"Ley de Ohm y circuitos eléctricos",
		],
	},
	{
		title: "Módulo 2: Riesgos Eléctricos",
		duration: "3 horas",
		lessons: [
			"Identificación de peligros eléctricos",
			"Efectos de la corriente eléctrica en el cuerpo",
			"Factores que influyen en la gravedad del accidente",
			"Casos de estudio y análisis de accidentes",
		],
	},
	{
		title: "Módulo 3: Normativa y Legislación",
		duration: "3 horas",
		lessons: [
			"Marco legal chileno en seguridad eléctrica",
			"Normas técnicas aplicables (NCh Elec. 4/2003)",
			"Responsabilidades legales del empleador",
			"Procedimientos de fiscalización",
		],
	},
	{
		title: "Módulo 4: Medidas de Control",
		duration: "4 horas",
		lessons: [
			"Equipos de protección personal",
			"Sistemas de puesta a tierra",
			"Dispositivos de protección diferencial",
			"Señalización y delimitación de áreas",
		],
	},
	{
		title: "Módulo 5: Procedimientos de Emergencia",
		duration: "3 horas",
		lessons: [
			"Primeros auxilios en accidentes eléctricos",
			"Protocolos de rescate",
			"Uso de extintores en incendios eléctricos",
			"Simulacro práctico",
		],
	},
	{
		title: "Módulo 6: Evaluación Final",
		duration: "1 hora",
		lessons: ["Examen teórico", "Evaluación práctica", "Entrega de certificación"],
	},
]

const benefits = [
	"Certificación oficial reconocida a nivel nacional",
	"Material didáctico completo incluido",
	"Prácticas en campo con equipamiento real",
	"Instructores certificados con experiencia",
	"Coffee break y almuerzo incluidos",
	"Seguimiento post-capacitación",
	"Acceso a material digital complementario",
	"Posibilidad de capacitación in-company",
]

const requirements = [
	"Educación media completa",
	"Experiencia básica en el área (deseable)",
	"Certificado de salud compatible con el curso",
	"Ropa cómoda para prácticas",
]

function RouteComponent() {
	const { courseSlug } = Route.useParams()

	return (
		<main className="flex flex-col items-center justify-center">
			<section className="from-primary via-primary/95 to-primary/90 text-primary-foreground bg-gradient-to-br">
				<div className="container py-12 md:py-16">
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="space-y-6 lg:col-span-2">
							<div className="space-y-4">
								<Badge variant="secondary" className="mb-4">
									{course.category}
								</Badge>
								<h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
									{course.title}
								</h1>
								<p className="text-primary-foreground/90 text-lg leading-relaxed text-pretty">
									{course.subtitle}
								</p>
								<p className="text-primary-foreground/80 text-base leading-relaxed text-pretty">
									Nuestro programa está diseñado para profesionales que trabajan o supervisan
									actividades relacionadas con instalaciones eléctricas, mantenimiento, operación de
									equipos eléctricos o cualquier actividad donde exista exposición a riesgos
									eléctricos. Al finalizar, estarás completamente capacitado para identificar,
									evaluar y controlar los riesgos eléctricos en tu lugar de trabajo.
								</p>
							</div>

							<div className="flex flex-wrap items-center gap-6 text-sm">
								<div className="flex items-center gap-2">
									<StarIcon className="h-5 w-5 fill-current" />
									<span className="font-semibold">{course.rating}</span>
									<span className="text-primary-foreground/80">
										({course.reviews} valoraciones)
									</span>
								</div>
								<div className="flex items-center gap-2">
									<UsersIcon className="h-5 w-5" />
									<span>{course.students} estudiantes</span>
								</div>
								<div className="flex items-center gap-2">
									<ClockIcon className="h-5 w-5" />
									<span>{course.duration}</span>
								</div>
								<Badge variant="secondary">{course.level}</Badge>
							</div>

							<div className="flex items-center gap-3 pt-2">
								<div className="bg-primary-foreground/20 h-12 w-12 rounded-full" />
								<div>
									<div className="font-semibold">{course.instructor}</div>
									<div className="text-primary-foreground/80 text-sm">{course.instructorTitle}</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-1">
							<Card className="sticky top-20 py-0">
								<CardContent className="space-y-4 p-4">
									<div className="bg-muted aspect-video overflow-hidden rounded-lg">
										<Image
											layout="fullWidth"
											alt={course.title}
											className="h-full w-full object-cover"
											src={course.image || "/placeholder.svg"}
										/>
									</div>

									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-muted-foreground text-sm">Próxima fecha:</span>
											<span className="font-semibold">{course.nextDate}</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-muted-foreground text-sm">Modalidad:</span>
											<Badge variant="secondary">{course.modality}</Badge>
										</div>
										<div className="flex items-center gap-2 text-sm">
											<MapPinIcon className="text-muted-foreground h-4 w-4" />
											<span className="text-muted-foreground">{course.location}</span>
										</div>
									</div>

									<Separator />

									<div className="space-y-3">
										<Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
											<Link to="/cotizacion">Solicitar Cotización</Link>
										</Button>
									</div>

									<Separator />

									<div className="space-y-2 text-sm">
										<div className="flex items-center gap-2">
											<CheckCircle2Icon className="text-primary h-4 w-4" />
											<span>Certificación incluida</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle2Icon className="text-primary h-4 w-4" />
											<span>Material didáctico</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle2Icon className="text-primary h-4 w-4" />
											<span>Prácticas incluidas</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle2Icon className="text-primary h-4 w-4" />
											<span>Seguimiento post-curso</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Course Content */}
			<section className="py-12">
				<div className="container">
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="lg:col-span-2">
							<Tabs defaultValue="overview" className="space-y-6">
								<TabsList className="grid w-full grid-cols-4">
									<TabsTrigger value="overview">Descripción</TabsTrigger>
									<TabsTrigger value="curriculum">Contenido</TabsTrigger>
									<TabsTrigger value="instructor">Instructor</TabsTrigger>
									<TabsTrigger value="reviews">Reseñas</TabsTrigger>
								</TabsList>

								<TabsContent value="overview" className="space-y-6">
									<Card>
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<BookOpenIcon className="h-5 w-5" />
												Acerca del Curso
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4">
											<p className="text-muted-foreground leading-relaxed">{course.description}</p>
											<p className="text-muted-foreground leading-relaxed">
												Este programa está diseñado para profesionales que trabajan o supervisan
												actividades relacionadas con instalaciones eléctricas, mantenimiento,
												operación de equipos eléctricos o cualquier actividad donde exista
												exposición a riesgos eléctricos.
											</p>
											<p className="text-muted-foreground leading-relaxed">
												Al finalizar el curso, los participantes estarán capacitados para
												identificar, evaluar y controlar los riesgos eléctricos en sus lugares de
												trabajo, cumpliendo con la normativa chilena vigente y las mejores prácticas
												internacionales.
											</p>
										</CardContent>
									</Card>

									<Card>
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<TargetIcon className="h-5 w-5" />
												Objetivos de Aprendizaje
											</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="space-y-3">
												<li className="flex items-start gap-3">
													<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">
														Comprender los fundamentos de la electricidad y sus efectos en el cuerpo
														humano
													</span>
												</li>
												<li className="flex items-start gap-3">
													<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">
														Identificar y evaluar los riesgos eléctricos en diferentes entornos
														laborales
													</span>
												</li>
												<li className="flex items-start gap-3">
													<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">
														Aplicar medidas de control y prevención según normativa chilena
													</span>
												</li>
												<li className="flex items-start gap-3">
													<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">
														Utilizar correctamente los equipos de protección personal
													</span>
												</li>
												<li className="flex items-start gap-3">
													<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">
														Actuar correctamente en situaciones de emergencia eléctrica
													</span>
												</li>
											</ul>
										</CardContent>
									</Card>

									<Card>
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<TrendingUpIcon className="h-5 w-5" />
												Requisitos
											</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="space-y-3">
												{requirements.map((req, index) => (
													<li key={index} className="flex items-start gap-3">
														<CheckCircle2Icon className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
														<span className="text-muted-foreground leading-relaxed">{req}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</TabsContent>

								<TabsContent value="curriculum" className="space-y-4">
									<Card>
										<CardHeader>
											<CardTitle>Contenido del Curso</CardTitle>
											<p className="text-muted-foreground text-sm">
												{modules.length} módulos • {course.duration} de contenido total
											</p>
										</CardHeader>
										<CardContent className="space-y-4">
											{modules.map((module, index) => (
												<div key={index} className="space-y-3 rounded-lg border p-4">
													<div className="flex items-start justify-between gap-4">
														<div className="space-y-1">
															<h3 className="font-semibold">{module.title}</h3>
															<p className="text-muted-foreground flex items-center gap-2 text-sm">
																<ClockIcon className="h-4 w-4" />
																{module.duration}
															</p>
														</div>
														<Badge variant="outline">{module.lessons.length} lecciones</Badge>
													</div>
													<ul className="space-y-2 pl-4">
														{module.lessons.map((lesson, lessonIndex) => (
															<li
																key={lessonIndex}
																className="text-muted-foreground flex items-start gap-2 text-sm"
															>
																<PlayCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
																<span>{lesson}</span>
															</li>
														))}
													</ul>
												</div>
											))}
										</CardContent>
									</Card>
								</TabsContent>

								<TabsContent value="instructor" className="space-y-4">
									<Card>
										<CardContent className="space-y-6 pt-6">
											<div className="flex items-start gap-4">
												<div className="bg-muted h-20 w-20 shrink-0 rounded-full" />
												<div className="space-y-2">
													<h3 className="text-xl font-semibold">{course.instructor}</h3>
													<p className="text-muted-foreground">{course.instructorTitle}</p>
													<div className="flex items-center gap-4 text-sm">
														<div className="flex items-center gap-1">
															<StarIcon className="fill-primary text-primary h-4 w-4" />
															<span className="font-semibold">4.9</span>
														</div>
														<div className="flex items-center gap-1">
															<UsersIcon className="h-4 w-4" />
															<span>2,450 estudiantes</span>
														</div>
														<div className="flex items-center gap-1">
															<AwardIcon className="h-4 w-4" />
															<span>15 cursos</span>
														</div>
													</div>
												</div>
											</div>

											<Separator />

											<div className="space-y-4">
												<h4 className="font-semibold">Acerca del Instructor</h4>
												<p className="text-muted-foreground leading-relaxed">
													Ingeniero en Prevención de Riesgos con más de 15 años de experiencia en el
													área de seguridad eléctrica. Ha trabajado en importantes empresas del
													sector minero, industrial y de construcción.
												</p>
												<p className="text-muted-foreground leading-relaxed">
													Certificado como instructor por la Mutual de Seguridad y la Asociación
													Chilena de Seguridad. Especialista en normativa eléctrica chilena y
													auditor de sistemas de gestión de seguridad.
												</p>
											</div>
										</CardContent>
									</Card>
								</TabsContent>

								<TabsContent value="reviews" className="space-y-4">
									<Card>
										<CardHeader>
											<CardTitle>Valoraciones de Estudiantes</CardTitle>
											<div className="flex items-center gap-4 pt-2">
												<div className="text-4xl font-bold">{course.rating}</div>
												<div className="space-y-1">
													<div className="flex items-center gap-1">
														{[...Array(5)].map((_, i) => (
															<StarIcon key={i} className="fill-primary text-primary h-5 w-5" />
														))}
													</div>
													<p className="text-muted-foreground text-sm">
														{course.reviews} valoraciones
													</p>
												</div>
											</div>
										</CardHeader>
										<CardContent className="space-y-6">
											{[1, 2, 3].map((review) => (
												<div key={review} className="space-y-3 border-b pb-6 last:border-0">
													<div className="flex items-start gap-3">
														<div className="bg-muted h-10 w-10 shrink-0 rounded-full" />
														<div className="flex-1 space-y-2">
															<div className="flex items-center justify-between">
																<div>
																	<div className="font-semibold">Carlos Rodríguez</div>
																	<div className="text-muted-foreground text-sm">
																		Hace 2 semanas
																	</div>
																</div>
																<div className="flex items-center gap-1">
																	{[...Array(5)].map((_, i) => (
																		<StarIcon
																			key={i}
																			className="fill-primary text-primary h-4 w-4"
																		/>
																	))}
																</div>
															</div>
															<p className="text-muted-foreground leading-relaxed">
																Excelente curso, muy completo y práctico. Los instructores son muy
																profesionales y las instalaciones de primera. Totalmente
																recomendado.
															</p>
														</div>
													</div>
												</div>
											))}
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						<div className="lg:col-span-1">
							<div className="sticky top-20 space-y-6">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<ShieldIcon className="h-5 w-5" />
											Beneficios Incluidos
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="space-y-3">
											{benefits.map((benefit, index) => (
												<li key={index} className="flex items-start gap-2 text-sm">
													<CheckCircle2Icon className="text-primary mt-0.5 h-4 w-4 shrink-0" />
													<span className="text-muted-foreground leading-relaxed">{benefit}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<CalendarIcon className="h-5 w-5" />
											Próximas Fechas
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										<div className="space-y-1 rounded-lg border p-3">
											<div className="font-semibold">15 de Enero, 2025</div>
											<div className="text-muted-foreground text-sm">Santiago - Presencial</div>
											<Button size="sm" className="mt-2 w-full bg-transparent" variant="outline">
												Inscribirse
											</Button>
										</div>
										<div className="space-y-1 rounded-lg border p-3">
											<div className="font-semibold">5 de Febrero, 2025</div>
											<div className="text-muted-foreground text-sm">Valparaíso - Presencial</div>
											<Button size="sm" className="mt-2 w-full bg-transparent" variant="outline">
												Inscribirse
											</Button>
										</div>
										<div className="space-y-1 rounded-lg border p-3">
											<div className="font-semibold">20 de Febrero, 2025</div>
											<div className="text-muted-foreground text-sm">Concepción - Presencial</div>
											<Button size="sm" className="mt-2 w-full bg-transparent" variant="outline">
												Inscribirse
											</Button>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
