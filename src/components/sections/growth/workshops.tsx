import { ArrowRight } from "lucide-react"
import { Image } from "@unpic/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

const workshopsList = [
	{
		title: "Dinámicas de alto impacto",
		description:
			"Experiencias diseñadas para movilizar energía, romper barreras y generar aprendizajes profundos en poco tiempo.",
		image: "/images/crecimiento/galery-1.jpeg",
	},
	{
		title: "Ejercicios de comunicación efectiva",
		description:
			"Prácticas para mejorar la escucha activa, la asertividad y la claridad en la transmisión de mensajes.",
		image: "/images/crecimiento/galery-2.jpeg",
	},
	{
		title: "Prácticas de liderazgo consciente",
		description:
			"Herramientas para liderar desde la empatía, la autoconciencia y el propósito compartido.",
		image: "/images/crecimiento/galery-3.jpeg",
	},
	{
		title: "Integración de PNL",
		description:
			"Técnicas de Programación Neurolingüística para gestionar creencias limitantes, emociones y conductas.",
		image: "/images/crecimiento/galery-4.jpeg",
	},
	{
		title: "Simulaciones y juegos de roles",
		description:
			"Escenarios prácticos para ensayar nuevas habilidades en un entorno seguro y recibir feedback inmediato.",
		image: "/images/crecimiento/galery-5.jpeg",
	},
	{
		title: "Reflexiones guiadas",
		description:
			"Espacios de introspección para integrar lo aprendido y conectarlo con la realidad laboral y personal.",
		image: "/images/crecimiento/galery-6.jpeg",
	},
]

export default function Workshops(): React.ReactElement {
	return (
		<section id="talleres" className="w-full bg-gray-50 py-16 md:py-24">
			<div className="container mx-auto max-w-7xl">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Talleres Vivenciales
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Estos talleres fortalecen la confianza, la cohesión y el compromiso, impactando tanto
							en el bienestar individual como en el clima laboral. Cuando las personas crecen, las
							organizaciones también.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer staggerDelay={0.1}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{workshopsList.map((workshop, index) => (
							<StaggerItem key={index} className="h-full">
								<HoverScale scale={1.03} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden border-none pt-0 shadow-md transition-all hover:shadow-xl">
										<div className="bg-muted relative aspect-video overflow-hidden">
											<Image
												src={workshop.image}
												alt={workshop.title}
												layout="fullWidth"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="from-primary-purple/80 to-primary-purple/40 absolute inset-0 bg-linear-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										</div>
										<CardContent className="p-6">
											<h3 className="text-primary-purple mb-3 text-xl font-bold group-hover:text-[#55206C]">
												{workshop.title}
											</h3>
											<p className="text-muted-foreground text-base leading-relaxed">
												{workshop.description}
											</p>
										</CardContent>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.5}>
					<div className="mt-12 text-center">
						<HoverScale>
							<Button
								size="lg"
								variant="outline"
								style={{
									borderColor: "#55206C",
									color: "#55206C",
								}}
								asChild
							>
								<Link to="/crecimiento/talleres">
									Ver detalle de talleres
									<ArrowRight className="h-5 w-5" />
								</Link>
							</Button>
						</HoverScale>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
