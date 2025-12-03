"use client"

import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards"
import { FadeIn } from "@/components/animations/fade-in"

const testimonials: {
	quote: string
	name: string
}[] = [
	{
		name: "PSS INGENIERÍA",
		quote:
			"Los servicios de capacitación de CAEMP destacan por su profesionalismo técnico, rapidez en las respuestas y una gran flexibilidad, cualidades que realmente marcan la diferencia. Estas características han sido clave para elegir a CAEMP como nuestra opción confiable en capacitación",
	},
	{
		name: "TEISA",
		quote:
			"Elegimos a CAEMP por su innovador enfoque en seguridad y salud en el trabajo. Las obras de teatro que han desarrollado logran conectar de una manera única con nuestros colaboradores, profundizando en temas cruciales y promoviendo una conciencia profunda sobre el autocuidado y el valor de la vida. Gracias a estas experiencias, nuestros equipos no solo han adquirido conocimientos, sino que han internalizado el compromiso con su propia seguridad y bienestar.",
	},
	{
		name: "SIGRO",
		quote:
			"El compromiso, la calidad humana y la excelencia técnica de los instructores de CAEMP han sido fundamentales para el desarrollo cultural en temas de seguridad y salud en el trabajo de nuestros colaboradores. Gracias a estos aspectos, hemos logrado fortalecer la conciencia y el conocimiento en áreas cruciales para el bienestar laboral.",
	},
	{
		name: "AEROPUERTO NUEVO PUDAHUEL RRHH",
		quote:
			"La experiencia de los coaches de CAEMP, junto con su calidad humana y profundo dominio de cada tema, ha logrado transformar nuestra perspectiva sobre liderazgo y trabajo en equipo. Gracias a su aporte, hemos logrado una comunicación más efectiva entre áreas, potenciando la colaboración y el entendimiento mutuo.",
	},
	{
		name: "NUEVO PUDAHUEL PPRR",
		quote:
			"CAEMP se ha convertido en un aliado estratégico para nuestra área de prevención de riesgos laborales. Su equipo combina un equipamiento de alto nivel con experiencia y conocimientos sólidos, lo cual nos ha permitido mantener y superar los estándares de seguridad que exigimos. Su compromiso y profesionalismo en la prevención de riesgos han sido fundamentales para fortalecer nuestra cultura de seguridad.",
	},
	{
		name: "TRAZA",
		quote:
			"CAEMP ha sido un socio estratégico invaluable para nuestra empresa. Su comunicación constante, el ajuste preciso a nuestros estándares y necesidades de capacitación, junto con su experiencia y calidad de servicio, han sido claves para establecer y fortalecer esta alianza. Gracias a CAEMP, hemos logrado un nivel de capacitación que impulsa nuestra cultura de seguridad y desempeño.",
	},
	{
		name: "SICE",
		quote:
			"Las labores de alto riesgo a las que están expuestos nuestros colaboradores requieren una capacitación teórico-práctica que cumpla con altos estándares de seguridad y que brinde conocimientos sólidos en la materia. Caemp cumple con todos los requisitos necesarios para garantizar la calidad y efectividad de nuestros programas de capacitación, asegurando que nuestros equipos estén completamente preparados para enfrentar los desafíos con seguridad y profesionalismo.",
	},
	{
		name: "BTYS",
		quote:
			"Esta larga relación con Caemp, tanto en materias de capacitación como en la asesoría y adquisición de equipos de protección personal adecuados al riesgo al que se exponen nuestros colaboradores, ha sido fundamental para garantizar su seguridad y eficacia en el desempeño de sus labores. La expertise de Caemp nos ha permitido contar con soluciones integrales que responden a nuestras necesidades específicas.",
	},
]

export default function TrustUs(): React.ReactElement {
	return (
		<section className="max-w-screen overflow-x-hidden px-4 py-16 md:py-24">
			<div className="container">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							Confían en Nosotros
						</h2>
						<p className="text-muted-foreground text-lg">
							Empresas líderes que han capacitado a su personal con CAEMP.
						</p>
					</div>
				</FadeIn>

				<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
			</div>
		</section>
	)
}
