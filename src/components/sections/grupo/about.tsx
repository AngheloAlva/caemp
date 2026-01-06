import { Building2Icon, TargetIcon, EyeIcon } from "lucide-react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"

export default function About() {
	return (
		<section id="quienes-somos" className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-12 text-center md:mb-16">
						<h2 className="text-primary mb-4 text-3xl font-medium md:text-4xl lg:text-5xl">
							Quiénes Somos
						</h2>
						<div className="mx-auto max-w-3xl">
							<p className="text-base leading-relaxed text-gray-600 md:text-lg">
								<span className="text-primary font-normal">Grupo CAEMP</span> es un ecosistema
								integral de soluciones en seguridad laboral, formación técnica y desarrollo
								organizacional. Nuestra sinergia nos permite ofrecer una{" "}
								<span className="text-primary font-normal">propuesta de valor diferenciada</span>,
								que abarca desde la prevención de riesgos hasta la optimización del desempeño
								humano.
							</p>
						</div>
					</div>
				</FadeIn>

				<FadeIn delay={0.2}>
					<div className="mx-auto max-w-5xl border border-gray-100 bg-linear-to-br from-slate-50 to-white p-6 shadow-sm md:p-8 md:py-12">
						<div className="flex items-start gap-4">
							<div className="bg-primary/10 shrink-0 rounded-full p-2.5">
								<Building2Icon className="text-primary h-6 w-6" />
							</div>
							<div>
								<h3 className="text-primary mb-3 text-xl font-medium md:text-2xl">
									Nuestra Historia
								</h3>
								<p className="mb-3 text-sm leading-relaxed text-gray-600 md:text-base">
									Formado por un equipo multidisciplinario de Ingenieros en Prevención de Riesgos,
									Ingenieros en Calidad y Coaches de Vida,{" "}
									<span className="font-normal">Grupo CAEMP</span> nace en 2010 con el propósito de
									cuidar, enseñar y transformar la forma en que trabajamos y crecemos.
								</p>
								<p className="text-sm text-gray-600 md:text-base">
									Desde entonces, más de{" "}
									<span className="text-primary text-lg font-medium md:text-xl">700 clientes</span>{" "}
									han confiado en nosotros para fortalecer sus capacidades, seguridad y liderazgo.
								</p>
							</div>
						</div>
					</div>
				</FadeIn>

				<StaggerContainer className="mx-auto grid max-w-5xl md:grid-cols-2">
					<StaggerItem>
						<div className="h-full border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
							<div className="mb-4 flex items-center gap-3">
								<div className="bg-primary/10 rounded-full p-2.5">
									<TargetIcon className="text-primary h-6 w-6" />
								</div>
								<h3 className="text-primary text-xl font-medium md:text-2xl">Misión</h3>
							</div>
							<p className="text-sm leading-relaxed text-gray-600 md:text-base">
								Inspiramos a las personas y organizaciones a desarrollar su máximo potencial,
								integrando seguridad, conocimiento y crecimiento humano. A través de la capacitación
								técnica, la asesoría experta y el entrenamiento interpersonal, transformamos
								entornos laborales en espacios más{" "}
								<span className="font-normal">seguros, colaborativos y sostenibles</span>.
							</p>
						</div>
					</StaggerItem>

					<StaggerItem>
						<div className="h-full border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
							<div className="mb-4 flex items-center gap-3">
								<div className="bg-primary/10 rounded-full p-2.5">
									<EyeIcon className="text-primary h-6 w-6" />
								</div>
								<h3 className="text-primary text-xl font-medium md:text-2xl">Visión</h3>
							</div>
							<p className="text-sm leading-relaxed text-gray-600 md:text-base">
								Ser un referente nacional e internacional en la formación técnica y el desarrollo
								humano, consolidando una cultura de seguridad, liderazgo y bienestar integral. Nos
								proyectamos como un <span className="font-normal">aliado estratégico</span> que
								conecta tecnología, prevención e inteligencia emocional para construir un futuro
								donde{" "}
								<span className="font-normal">
									trabajar y crecer sean una misma experiencia transformadora
								</span>
								.
							</p>
						</div>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	)
}
