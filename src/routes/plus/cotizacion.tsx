import { Image } from "@/components/shared/image"
import { CheckCircle2Icon, MailIcon, PhoneIcon } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusQuoteForm } from "@/components/sections/quote/plus-quote-form"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"

const searchSchema = z.object({
	productSlug: z.string().optional(),
})

export const Route = createFileRoute("/plus/cotizacion")({
	validateSearch: (search) => searchSchema.parse(search),
	component: RouteComponent,
})

function RouteComponent() {
	const { productSlug } = Route.useSearch()

	return (
		<main className="flex flex-col items-center justify-center space-y-6 overflow-x-hidden pb-20">
			<section className="relative w-screen py-14 lg:py-24">
				<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
					<Image
						width={1920}
						height={1080}
						alt="Fondo Plus"
						src="/images/plus/hero.jpg"
						className="h-full w-full object-cover"
					/>
					<video
						autoPlay
						loop
						muted
						playsInline
						className="absolute inset-0 h-full w-full object-cover"
					>
						<source src="/images/plus/hero.mp4" type="video/mp4" />
					</video>
					<div className="bg-primary-green/90 absolute inset-0 mix-blend-multiply" />
					<div className="absolute -top-1 -right-1/3 z-10 size-full bg-[linear-gradient(to_right,#3d16162e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px]"></div>
				</div>

				<FadeIn>
					<div className="relative z-10 mx-auto max-w-3xl space-y-4 px-4 text-center text-white">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							Cotiza tus equipos
						</h1>
						<p className="text-lg leading-relaxed text-pretty">
							Seguridad y Rendimiento. Completa el formulario y recibe asesoría experta y una
							cotización a medida.
						</p>
					</div>
				</FadeIn>
			</section>

			<section className="flex w-full max-w-6xl flex-col gap-8 px-4 md:flex-row lg:gap-10">
				<SlideIn
					delay={0.4}
					direction="left"
					className="sticky top-20 space-y-6 md:w-2/6 lg:col-span-1"
				>
					<Card className="gap-2">
						<CardHeader>
							<CardTitle className="text-xl">¿Por qué elegir Plus?</CardTitle>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-green mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Asesoría Técnica</p>
									<p className="text-muted-foreground text-sm">Expertos en seguridad industrial</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-green mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Equipos Certificados</p>
									<p className="text-muted-foreground text-sm">Cumplimiento de normativas</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-green mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Respuesta Rápida</p>
									<p className="text-muted-foreground text-sm">Cotización ágil y eficiente</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-green mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Soporte Integral</p>
									<p className="text-muted-foreground text-sm">Acompañamiento post-venta</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-primary-green gap-5 text-white">
						<CardHeader>
							<CardTitle className="text-xl">¿Necesitas ayuda?</CardTitle>
							<CardDescription className="text-sm text-white/90">
								Nuestro equipo está disponible para ayudarte
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm">
									<PhoneIcon className="h-4 w-4" />
									<span>+56 9 3913 7837</span>
								</div>

								<div className="flex items-center gap-2 text-sm">
									<MailIcon className="h-4 w-4" />
									<a href="mailto:contacto@plus.cl">contacto@plus.cl</a>
								</div>
							</div>
						</CardContent>
					</Card>
				</SlideIn>

				<SlideIn direction="up" delay={0.4} className="md:w-4/6">
					<PlusQuoteForm defaultProduct={productSlug} />
				</SlideIn>
			</section>
		</main>
	)
}
