import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"
import { useState } from "react"
import {
	UsersIcon,
	TargetIcon,
	HammerIcon,
	BookOpenIcon,
	FileTextIcon,
	ArrowLeftIcon,
	CheckCircle2Icon,
} from "lucide-react"

import { courses } from "@/data/otec/courses"
import { cn } from "@/lib/utils"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/otec/cursos/$courseSlug")({
	component: RouteComponent,
})

function RouteComponent() {
	const [activeImageIndex, setActiveImageIndex] = useState(0)
	const { courseSlug } = Route.useParams()
	const course = courses[courseSlug]

	if (!course) {
		throw notFound()
	}

	return (
		<main className="flex flex-col items-center justify-center px-4">
			<div className="container mx-auto flex max-w-7xl flex-col gap-2 py-2">
				<Link to="/otec/cursos">
					<Button variant={"ghost"}>
						<ArrowLeftIcon className="h-5 w-5" />
						Volver
					</Button>
				</Link>

				<div className="grid gap-8 lg:grid-cols-7">
					<div className="space-y-6 lg:col-span-4 lg:space-y-10">
						<div className="space-y-2">
							<div className="bg-muted relative aspect-square overflow-hidden rounded-xl border shadow-sm">
								<Image
									layout="fullWidth"
									alt={course.title}
									className="h-full w-full object-cover"
									src={`/images/otec/courses/${course.images[activeImageIndex]}`}
								/>
							</div>

							{course.images.length > 1 && (
								<div className="flex gap-4 overflow-x-auto py-2">
									{course.images.map((image, index) => (
										<button
											key={index}
											onClick={() => setActiveImageIndex(index)}
											className={cn(
												"relative aspect-square w-32 shrink-0 overflow-hidden rounded-lg border-2 transition-all hover:opacity-100",
												activeImageIndex === index
													? "border-primary ring-primary/20 ring-2 ring-offset-2"
													: "hover:border-primary/50 border-transparent opacity-70"
											)}
										>
											<Image
												layout="fullWidth"
												src={`/images/otec/courses/${image}`}
												className="h-full w-full object-cover"
												alt={`${course.title} - Imagen ${index + 1}`}
											/>
										</button>
									))}
								</div>
							)}
						</div>

						<div className="space-y-4 lg:hidden">
							<div className="space-y-4">
								<h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
									{course.title}
								</h1>
							</div>

							<div className="space-y-1">
								<h2 className="flex items-center gap-2 text-lg font-semibold">
									<TargetIcon className="h-5 w-5" />
									Competencias
								</h2>

								<ul className="grid gap-1">
									{course.competencies.map((item, index) => (
										<li key={index} className="flex items-start gap-3 text-sm">
											<span className="leading-relaxed">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<Tabs defaultValue="general" className="w-full">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="general">Información General</TabsTrigger>
								<TabsTrigger value="content">Contenido</TabsTrigger>
							</TabsList>

							<TabsContent
								value="general"
								className="animate-in fade-in-50 slide-in-from-bottom-4 mt-2 space-y-4 duration-500"
							>
								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<UsersIcon className="text-primary h-5 w-5" />
											Público Objetivo
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-1">
											{course.directedTo.map((item, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary/10 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
													<span className="text-muted-foreground leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<CheckCircle2Icon className="text-primary h-5 w-5" />
											Requisitos de Ingreso
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-1">
											{course.preRequisites.map((item, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary/10 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
													<span className="text-muted-foreground leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<FileTextIcon className="text-primary h-5 w-5" />
											Metodología de Enseñanza
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-1">
											{course.methodology.map((item, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary/10 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
													<span className="text-muted-foreground leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent
								value="content"
								className="animate-in fade-in-50 slide-in-from-bottom-4 mt-2 space-y-6 duration-500"
							>
								<Card className="gap-2">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<BookOpenIcon className="text-primary h-5 w-5" />
											Contenido Teórico
										</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid gap-1">
											{course.theoreticalContent.map((item, index) => (
												<li key={index} className="flex items-start gap-3">
													<div className="bg-primary/10 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
													<span className="text-muted-foreground leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								{course.practicalContent && course.practicalContent.length > 0 && (
									<Card className="gap-2">
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<HammerIcon className="text-primary h-5 w-5" />
												Contenido Práctico
											</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="grid gap-1">
												{course.practicalContent.map((item, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="bg-primary/10 mt-2.5 h-2 w-2 shrink-0 rounded-full" />
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
						<div className="hidden space-y-4 lg:block">
							<div className="space-y-4">
								<h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
									{course.title}
								</h1>
							</div>

							<div className="space-y-1">
								<h2 className="flex items-center gap-2 text-lg font-semibold">
									<TargetIcon className="h-5 w-5" />
									Competencias
								</h2>

								<ul className="grid gap-1">
									{course.competencies.map((item, index) => (
										<li key={index} className="flex items-start gap-3 text-sm">
											<span className="leading-relaxed">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<Separator />

						<Card className="sticky top-24 overflow-hidden">
							<CardHeader>
								<CardTitle>Solicitar Información</CardTitle>
								<CardDescription>
									¿Interesado en este curso? Solicita una cotización personalizada para tu empresa o
									grupo.
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-6">
								<Separator />

								<Button size="lg" className="w-full text-base font-semibold shadow-md" asChild>
									<Link to="/otec/cotizacion" search={{ courseSlug: course.slug }}>
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
