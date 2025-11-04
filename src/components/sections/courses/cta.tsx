import { Link } from "@tanstack/react-router"

import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

export default function Cta(): React.ReactElement {
	return (
		<section className="bg-muted/30 border-t py-16">
			<div className="container">
				<FadeIn>
					<div className="mx-auto max-w-3xl space-y-6 text-center">
						<h2 className="text-3xl font-bold tracking-tight text-balance">
							¿No encuentras el curso que buscas?
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
							Contáctanos y diseñaremos un programa de capacitación personalizado para las
							necesidades específicas de tu empresa.
						</p>
						<HoverScale>
							<Button size="lg" asChild>
								<Link to="/cotizacion">Solicitar Capacitación Personalizada</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
