import { Link } from "@tanstack/react-router"

import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

export default function Cta(): React.ReactElement {
	return (
		<section className="bg-primary text-primary-foreground relative w-screen overflow-hidden px-4 py-16 md:py-24">
			<div className="animate-float bg-primary-foreground absolute top-10 left-10 h-32 w-32 rounded-full blur-3xl" />

			<div
				className="animate-float bg-primary-foreground absolute right-10 bottom-10 h-40 w-40 rounded-full blur-3xl"
				style={{ animationDelay: "1.5s" }}
			/>

			<div className="relative container mx-auto">
				<FadeIn delay={0.2}>
					<div className="mx-auto max-w-3xl space-y-8 text-center">
						<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
							¿Listo para capacitar a tu equipo?
						</h2>
						<p className="text-primary-foreground/90 text-lg leading-relaxed text-pretty">
							Solicita una cotización personalizada y descubre cómo podemos ayudarte a mejorar la
							seguridad laboral en tu empresa.
						</p>
						<div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
							<HoverScale>
								<Button size="lg" variant="secondary" asChild className="text-base">
									<Link to="/otec/cotizacion">Solicitar Cotización</Link>
								</Button>
							</HoverScale>

							<HoverScale>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-base text-white hover:text-white"
								>
									<Link to="/otec/cursos">Explorar Cursos</Link>
								</Button>
							</HoverScale>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
