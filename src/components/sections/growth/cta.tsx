import { ArrowRightIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

export default function Cta(): React.ReactElement {
	return (
		<section
			className="relative w-screen overflow-hidden py-16 text-white md:py-28"
			style={{ backgroundColor: "#8B5CF6" }}
		>
			<div className="from-primary-purple to-primary-purple absolute inset-0 bg-linear-to-br via-[#7C3AED] opacity-90" />

			<div className="relative container mx-auto max-w-3xl">
				<FadeIn>
					<div className="space-y-6 text-center">
						<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							¿Listo para transformar tu organización?
						</h2>
						<p className="text-xl leading-relaxed text-pretty text-white/90">
							Contáctanos y descubre cómo nuestros programas pueden impulsar el crecimiento de tu
							equipo.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-4">
							<HoverScale>
								<Button
									size="lg"
									className="text-primary-purple bg-white hover:bg-white/90"
									asChild
								>
									<Link to="/crecimiento/cotizacion">
										Solicitar Información
										<ArrowRightIcon className="h-5 w-5" />
									</Link>
								</Button>
							</HoverScale>
							<HoverScale>
								<Button
									size="lg"
									variant="outline"
									className="hover:text-primary-purple border-white bg-white/10 text-white hover:bg-white/90"
									asChild
								>
									<a href="tel:+56987654321">Llamar Ahora</a>
								</Button>
							</HoverScale>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
