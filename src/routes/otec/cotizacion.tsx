import { CheckCircle2Icon, MailIcon, PhoneIcon } from "lucide-react"
import { createFileRoute } from "@tanstack/react-router"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QuoteForm } from "@/components/sections/quote/quote-form"
import { SlideIn } from "@/components/animations/slide-in"
import { FadeIn } from "@/components/animations/fade-in"

export const Route = createFileRoute("/otec/cotizacion")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center space-y-6 overflow-x-hidden pb-20">
			<section className="bg-primary relative w-screen px-4 py-14 text-white lg:py-24">
				<div className="absolute -top-1 -right-1/3 z-0 size-full bg-[linear-gradient(to_right,#3d16162e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px] group-hover:bg-[linear-gradient(to_right,#0279D97e_1px,transparent_1px),linear-gradient(to_bottom,#0279D97e_1px,transparent_1px)]"></div>

				<FadeIn>
					<div className="mx-auto max-w-3xl space-y-4 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							Cotiza tus cursos
						</h1>
						<p className="text-lg leading-relaxed text-pretty">
							Completá el formulario y obtené una cotización personalizada. No dudes en contactarnos
							si necesitas más información.
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
							<CardTitle className="text-xl">¿Por qué elegirnos?</CardTitle>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Respuesta Rápida</p>
									<p className="text-muted-foreground text-sm">Cotización en menos de 24 horas</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Propuesta Personalizada</p>
									<p className="text-muted-foreground text-sm">Adaptada a tus necesidades</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Sin Compromiso</p>
									<p className="text-muted-foreground text-sm">
										Cotización gratuita y sin obligación
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<CheckCircle2Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
								<div>
									<p className="font-medium">Instructores Certificados</p>
									<p className="text-muted-foreground text-sm">Expertos en cada área</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-primary gap-5 text-white">
						<CardHeader>
							<CardTitle className="text-xl">¿Necesitas ayuda?</CardTitle>
							<CardDescription className="text-sm text-white">
								Nuestro equipo está disponible para ayudarte
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm">
									<PhoneIcon className="h-4 w-4" />
									<span>2 2667 6455</span>
								</div>

								<div className="flex items-center gap-2 text-sm">
									<PhoneIcon className="h-4 w-4" />
									<span>+56 9 3247 8827</span>
								</div>

								<div className="flex items-center gap-2 text-sm">
									<MailIcon className="h-4 w-4" />
									<span>contacto@caemp.cl</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</SlideIn>

				<SlideIn direction="up" delay={0.4} className="md:w-4/6">
					<QuoteForm />
				</SlideIn>
			</section>
		</main>
	)
}
