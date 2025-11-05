import { AwardIcon, ShieldIcon, ZapIcon } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@unpic/react"

export default function Benefits(): React.ReactElement {
	return (
		<section className="bg-muted/30 px-4 py-16 md:py-24">
			<div className="container">
				<FadeIn>
					<div className="mx-auto mb-16 max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							Algunos Beneficios
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
							Trabajamos con los más altos estándares de calidad para garantizar la mejor
							experiencia de capacitación.
						</p>
					</div>
				</FadeIn>

				<div className="text-gray-600">
					<div className="container mx-auto flex flex-wrap">
						<div className="mb-10 size-1/2 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
							<Image
								width={460}
								height={500}
								alt="feature"
								src="/images/home/electrical-safety-training.jpg"
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
							<div className="mb-10 flex flex-col items-center lg:items-start">
								<div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-500">
									<ZapIcon className="h-8 w-8" />
								</div>
								<div className="grow">
									<h2 className="mb-3 text-lg font-medium text-gray-900">Flexibilidad y Rapidez</h2>
									<p className="text-base leading-relaxed">
										Minimización de tiempos de atención y ejecución en cada curso, adaptándonos a
										las necesidades de su operación con soluciones ágiles y personalizadas.
									</p>
								</div>
							</div>
							<div className="mb-10 flex flex-col items-center lg:items-start">
								<div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-500">
									<ShieldIcon className="h-8 w-8" />
								</div>
								<div className="grow">
									<h2 className="mb-3 text-lg font-medium text-gray-900">Cumplimiento Normativo</h2>
									<p className="text-base leading-relaxed">
										Cursos alineados con la legislación vigente, normativas y altos estándares de
										seguridad y salud laboral específicos de cada cliente.
									</p>
								</div>
							</div>
							<div className="mb-10 flex flex-col items-center lg:items-start">
								<div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-500">
									<AwardIcon className="h-8 w-8" />
								</div>
								<div className="grow">
									<h2 className="mb-3 text-lg font-medium text-gray-900">
										Soporte y Certificación Inmediata
									</h2>
									<p className="text-base leading-relaxed">
										Soporte continuo durante el proceso de capacitación y entrega de certificados en
										línea al finalizar y aprobar los cursos.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
