import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"

const testimonials = [
	{
		quote:
			"Los cascos de seguridad que adquirimos son ligeros, cómodos y muy resistentes. Nuestros trabajadores los usan todo el día sin molestias, lo que mejora la seguridad sin sacrificar comodidad.",
		author: "Javiera G.",
		role: "Coordinadora de Seguridad Industrial",
	},
	{
		quote:
			"Probamos diferentes marcas de guantes hasta que encontramos los de CAEMP PLUS. Son resistentes, cómodos y permiten un agarre seguro, ideales para el tipo de trabajo que realizamos.",
		author: "María L.",
		role: "Gerente de Operaciones",
	},
	{
		quote:
			"En nuestro proyecto necesitábamos guantes, gafas y cascos que cumplieran con los más altos estándares de seguridad. CAEMP PLUS nos ofreció equipos certificados y de excelente calidad.",
		author: "Carlos M.",
		role: "Supervisor de Obra",
	},
	{
		quote:
			"En nuestra industria es clave contar con protección respiratoria y visual de calidad. Estas mascarillas y gafas ofrecen la seguridad que necesitamos sin afectar la movilidad ni la visibilidad.",
		author: "Andrés G.",
		role: "Técnico en Mantenimiento",
	},
]

export default function Testimonials() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-green mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Testimonios
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-700">Experiencias que inspiran</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
					{testimonials.map((testimonial, index) => (
						<StaggerItem key={index}>
							<Card className="border-primary-green/20 hover:border-primary-green h-full transition-all hover:shadow-lg">
								<CardContent className="p-6">
									<Quote className="text-primary-green/30 mb-4 h-8 w-8" />
									<p className="mb-6 leading-relaxed text-gray-700">{testimonial.quote}</p>
									<div className="border-t border-gray-100 pt-4">
										<p className="font-semibold text-gray-900">{testimonial.author}</p>
										<p className="text-sm text-gray-600">{testimonial.role}</p>
									</div>
								</CardContent>
							</Card>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	)
}
