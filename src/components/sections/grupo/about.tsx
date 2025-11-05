import { Building2Icon, TargetIcon, EyeIcon } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { SlideIn } from "@/components/animations/slide-in"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export default function About() {
	return (
		<section className="w-full bg-white py-20">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Quiénes Somos
						</h2>

						<div className="mx-auto max-w-3xl">
							<p className="mb-6 text-lg text-gray-700">
								<span className="text-primary font-semibold">Grupo CAEMP</span> es un ecosistema
								integral de soluciones en seguridad laboral, formación técnica y desarrollo
								organizacional.
							</p>
							<p className="text-lg text-gray-700">
								Nuestra sinergia nos permite ofrecer una{" "}
								<span className="text-primary font-semibold">propuesta de valor diferenciada</span>,
								que abarca desde la prevención de riesgos hasta la optimización del desempeño humano
								en las organizaciones.
							</p>
						</div>
					</div>
				</FadeIn>

				<div className="mx-auto mb-8 max-w-6xl">
					<SlideIn direction="up">
						<Card className="border-primary/20 bg-linear-to-br from-blue-50 to-white p-0">
							<CardContent className="p-8 md:p-10">
								<div className="flex items-start gap-4">
									<div className="bg-primary rounded-full p-3">
										<Building2Icon className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="text-primary mb-4 text-2xl font-bold">Nuestra Historia</h3>
										<p className="mb-4 text-gray-700">
											Formado por un equipo multidisciplinario de Ingenieros en Prevención de
											Riesgos, Ingenieros en Calidad y Coaches de Vida,{" "}
											<span className="font-semibold">Grupo CAEMP</span> nace en 2010 con el
											propósito de cuidar, enseñar y transformar la forma en que trabajamos y
											crecemos.
										</p>
										<p className="text-gray-700">
											Desde entonces, más de{" "}
											<span className="text-primary text-xl font-bold">700 clientes</span> han
											confiado en nosotros para fortalecer sus capacidades, seguridad y liderazgo.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</SlideIn>
				</div>

				<StaggerContainer className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
					<StaggerItem>
						<Card className="border-primary/20 h-full p-0 transition-shadow">
							<CardContent className="p-8 md:p-10">
								<div className="mb-4 flex items-center gap-3">
									<div className="bg-primary rounded-full p-3">
										<TargetIcon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-primary text-2xl font-bold">Misión</h3>
								</div>
								<p className="text-gray-700">
									Inspiramos a las personas y organizaciones a desarrollar su máximo potencial,
									integrando seguridad, conocimiento y crecimiento humano. A través de la
									capacitación técnica, la asesoría experta y el entrenamiento interpersonal,
									transformamos entornos laborales en espacios más{" "}
									<span className="font-semibold">seguros, colaborativos y sostenibles</span>.
								</p>
							</CardContent>
						</Card>
					</StaggerItem>

					<StaggerItem>
						<Card className="border-primary/20 h-full p-0 transition-shadow">
							<CardContent className="p-8 md:p-10">
								<div className="mb-4 flex items-center gap-3">
									<div className="bg-primary rounded-full p-3">
										<EyeIcon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-primary text-2xl font-bold">Visión</h3>
								</div>
								<p className="text-gray-700">
									Ser un referente nacional e internacional en la formación técnica y el desarrollo
									humano, consolidando una cultura de seguridad, liderazgo y bienestar integral .
									Nos proyectamos como un <span className="font-semibold">aliado estratégico</span>{" "}
									que conecta tecnología, prevención e inteligencia emocional para construir un
									futuro donde{" "}
									<span className="font-semibold">
										trabajar y crecer sean una misma experiencia transformadora
									</span>
									.
								</p>
							</CardContent>
						</Card>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	)
}
