import { Image } from "@/components/shared/image"
import { CheckCircle2Icon, MailIcon, PhoneIcon } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GrowthQuoteForm } from "@/components/sections/quote/growth-quote-form"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"

const searchSchema = z.object({
	serviceType: z.string().optional(),
	serviceItem: z.string().optional(),
})

export const Route = createFileRoute("/crecimiento/cotizacion")({
	validateSearch: (search) => searchSchema.parse(search),
	component: RouteComponent,
})

function RouteComponent() {
	const { serviceType, serviceItem } = Route.useSearch()

	return (
		<main className="flex flex-col items-center justify-center space-y-6 overflow-x-hidden pb-20">
			<section className="relative w-screen py-14 lg:py-24">
				<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
					<Image
						width={1920}
						height={1080}
						src="/images/crecimiento/hero.png"
						alt="Fondo Crecimiento"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-purple-900/80" />
					<div className="absolute -top-1 -right-1/3 z-10 size-full bg-[linear-gradient(to_right,#7C3AED2e_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED5e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px]"></div>
				</div>

				<FadeIn>
					<div className="relative z-10 mx-auto max-w-3xl space-y-4 px-4 text-center text-white">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							Solicita tu Cotización
						</h1>
						<p className="text-lg leading-relaxed text-pretty text-white/90">
							Completa el formulario y recibe una propuesta personalizada para tu proceso de
							coaching, talleres o programas de capacitación.
						</p>
					</div>
				</FadeIn>
			</section>

			<section className="flex w-full max-w-6xl flex-col-reverse gap-8 px-4 md:flex-row lg:gap-10">
				<SlideIn
					delay={0.4}
					direction="left"
					className="sticky top-20 space-y-6 md:w-2/6 lg:col-span-1"
				>
					<Card className="gap-2">
						<CardHeader>
							<CardTitle className="text-xl">¿Por qué elegir Crecimiento?</CardTitle>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Respuesta Rápida</p>
									<p className="text-muted-foreground text-sm">Propuesta en menos de 24 horas</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Procesos Personalizados</p>
									<p className="text-muted-foreground text-sm">
										Diseñados según tus necesidades específicas
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Sin Compromiso</p>
									<p className="text-muted-foreground text-sm">
										Cotización gratuita y sin obligación
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Coaches Certificados</p>
									<p className="text-muted-foreground text-sm">
										Certificaciones internacionales IAC, LATAM Coaching
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary-purple mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Resultados Medibles</p>
									<p className="text-muted-foreground text-sm">
										Cambios concretos desde las primeras sesiones
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="gap-5 text-white" style={{ backgroundColor: "#8B5CF6" }}>
						<CardHeader>
							<CardTitle className="text-xl">¿Necesitas ayuda?</CardTitle>
							<CardDescription className="text-sm text-white/90">
								Nuestro equipo está disponible para orientarte
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm">
									<PhoneIcon className="h-4 w-4" />
									<span>+56 9 9884 3486</span>
								</div>

								<div className="flex items-center gap-2 text-sm">
									<MailIcon className="h-4 w-4" />
									<span>contacto@crecimiento.cl</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</SlideIn>

				<SlideIn direction="up" delay={0.4} className="md:w-4/6">
					<GrowthQuoteForm defaultServiceType={serviceType} defaultServiceItem={serviceItem} />
				</SlideIn>
			</section>
		</main>
	)
}
