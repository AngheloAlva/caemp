import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import {
	TargetIcon,
	BookOpenIcon,
	FileTextIcon,
	ArrowLeftIcon,
	CheckCircle2Icon,
	LightbulbIcon,
	GraduationCapIcon,
	UsersIcon,
} from "lucide-react"

import { workshops } from "@/data/crecimiento/workshops"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/crecimiento/talleres/$workshopSlug")({
	component: RouteComponent,
})

function RouteComponent() {
	const { workshopSlug } = Route.useParams()
	const workshop = workshops[workshopSlug]

	if (!workshop) {
		throw notFound()
	}

	return (
		<main className="flex flex-col items-center justify-center bg-gray-50 px-4 pt-4 pb-8 md:pb-12">
			<div className="container mx-auto flex max-w-7xl flex-col gap-2">
				<Link to="/crecimiento/talleres">
					<Button
						variant={"ghost"}
						className="hover:text-primary-purple hover:bg-primary-purple/10 text-gray-600"
					>
						<ArrowLeftIcon className="mr-2 h-5 w-5" />
						Volver a Talleres
					</Button>
				</Link>

				<div className="grid gap-8 lg:grid-cols-7">
					<div className="space-y-8 lg:col-span-4">
						<div className="lg:hidden">
							<div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
								<Image
									layout="fullWidth"
									alt={workshop.nombre}
									className="h-full w-full object-cover"
									src={workshop.imagen || "/images/placeholder.svg"}
								/>
							</div>
						</div>

						<div className="space-y-4 lg:hidden">
							<h1 className="text-primary-purple text-2xl font-bold tracking-tight text-balance sm:text-3xl">
								{workshop.nombre}
							</h1>
							<p className="text-muted-foreground text-lg leading-relaxed">
								{workshop.objetivoGeneral}
							</p>
						</div>

						<Tabs defaultValue="general" className="w-full">
							<TabsList className="grid w-full grid-cols-2 bg-gray-200">
								<TabsTrigger
									value="general"
									className="data-[state=active]:bg-primary-purple data-[state=active]:text-white"
								>
									Información General
								</TabsTrigger>
								<TabsTrigger
									value="content"
									className="data-[state=active]:bg-primary-purple data-[state=active]:text-white"
								>
									Contenido y Metodología
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value="general"
								className="animate-in fade-in-50 slide-in-from-bottom-4 space-y-4 duration-500"
							>
								{workshop.objetivosEspecificos && workshop.objetivosEspecificos.length > 0 && (
									<Card className="gap-2">
										<CardHeader>
											<CardTitle className="text-primary-purple flex items-center gap-2">
												<TargetIcon className="h-5 w-5" />
												Objetivos Específicos
											</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="grid gap-2">
												{workshop.objetivosEspecificos.map((item, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="bg-primary-purple/20 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
														<span className="text-muted-foreground leading-relaxed">{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								)}

								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="text-primary-purple flex items-center gap-2">
											<UsersIcon className="h-5 w-5" />
											Dirigido a
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground leading-relaxed">{workshop.dirigidoA}</p>
									</CardContent>
								</Card>

								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="text-primary-purple flex items-center gap-2">
											<CheckCircle2Icon className="h-5 w-5" />
											Requisitos de Ingreso
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-2">
											{workshop.requisitosIngreso.map((item, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary-purple/20 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
													<span className="text-muted-foreground leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent
								value="content"
								className="animate-in fade-in-50 slide-in-from-bottom-4 space-y-6 duration-500"
							>
								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="text-primary-purple flex items-center gap-2">
											<BookOpenIcon className="h-5 w-5" />
											Módulos del Taller
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-6">
											{workshop.modulos.map((modulo, index) => (
												<li key={index} className="flex flex-col gap-1">
													<div className="flex items-start gap-3">
														<div className="bg-primary-purple/20 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
														<span className="text-muted-foreground leading-relaxed font-medium">
															{modulo.nombre}
														</span>
													</div>
													{modulo.contenidos && (
														<ul className="mt-1 ml-5 grid gap-1">
															{modulo.contenidos.map((contenido, idx) => (
																<li
																	key={idx}
																	className="text-muted-foreground flex items-start gap-2 text-sm"
																>
																	<div className="bg-primary-purple/10 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
																	<span>{contenido}</span>
																</li>
															))}
														</ul>
													)}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								{workshop.metodologia && workshop.metodologia.length > 0 && (
									<Card className="gap-2">
										<CardHeader>
											<CardTitle className="text-primary-purple flex items-center gap-2">
												<LightbulbIcon className="h-5 w-5" />
												Metodología
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-muted-foreground leading-relaxed">
												{workshop.metodologia}
											</p>
										</CardContent>
									</Card>
								)}

								{workshop.evaluacion && workshop.evaluacion.length > 0 && (
									<Card className="gap-2">
										<CardHeader>
											<CardTitle className="text-primary-purple flex items-center gap-2">
												<FileTextIcon className="h-5 w-5" />
												Evaluación
											</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="grid gap-2">
												{workshop.evaluacion.map((item, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="bg-primary-purple/20 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
														<span className="text-muted-foreground leading-relaxed">{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								)}
							</TabsContent>
						</Tabs>
					</div>

					<div className="space-y-6 lg:col-span-3">
						<div className="hidden space-y-6 lg:block">
							<div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border shadow-lg">
								<Image
									layout="fullWidth"
									alt={workshop.nombre}
									className="h-full w-full object-cover"
									src={workshop.imagen || "/images/placeholder.svg"}
								/>
							</div>

							<div className="space-y-4">
								<h1 className="text-primary-purple text-3xl font-bold tracking-tight text-balance md:text-4xl">
									{workshop.nombre}
								</h1>
								<p className="text-muted-foreground text-lg leading-relaxed">
									{workshop.objetivoGeneral}
								</p>
							</div>

							{workshop.competencias && workshop.competencias.length > 0 && (
								<div className="space-y-3">
									<h2 className="text-primary-purple flex items-center gap-2 text-xl font-bold">
										<GraduationCapIcon className="h-6 w-6" />
										Competencias a Desarrollar
									</h2>

									<ul className="grid gap-2">
										{workshop.competencias.map((item, index) => (
											<li key={index} className="flex items-start gap-3 text-base">
												<CheckCircle2Icon className="text-primary-purple mt-1 h-5 w-5 shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}
							<Separator />
						</div>

						<Card className="border-primary-purple/20 sticky top-24 gap-0 overflow-hidden border pt-0 shadow-lg">
							<CardHeader className="bg-primary-purple/5 gap-0 py-6">
								<CardTitle className="text-primary-purple text-lg">Solicitar Taller</CardTitle>
								<CardDescription>
									¿Interesado en llevar este taller a tu organización? Solicita una cotización.
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-6 pt-6">
								<Button
									size="lg"
									className="bg-primary-purple hover:bg-primary-purple/90 w-full text-base font-semibold shadow-md"
									asChild
								>
									<Link
										to="/crecimiento/cotizacion"
										search={{ serviceType: "talleres", serviceItem: workshop.slug }}
									>
										Solicitar Cotización
									</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</main>
	)
}
