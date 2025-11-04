"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards"

export default function TrustUs(): React.ReactElement {
	const testimonials = [
		{
			name: "Empresa Traza",
			title: "Gerente de Seguridad",
			quote:
				"Las labores de alto riesgo a las que están expuestos nuestros colaboradores requieren una capacitación teórico-práctica que cumpla con altos estándares de seguridad y que brinde conocimientos sólidos en la materia. Caemp cumple con todos los requisitos necesarios para garantizar la calidad y efectividad de nuestros programas de capacitación, asegurando que nuestros equipos estén completamente preparados para enfrentar los desafíos con seguridad y profesionalismo.",
		},
		{
			name: "Nuevo Pudahuel",
			title: "Gerente de Operaciones",
			quote:
				"Excelente capacitación, instructores muy profesionales y con gran experiencia práctica en el campo. Nuestro equipo quedó muy bien preparado para enfrentar situaciones de riesgo eléctrico. Las instalaciones de CAEMP son de primer nivel y el material didáctico es muy completo. Sin duda, la mejor inversión en seguridad que hemos realizado este año.",
		},
		{
			name: "PSS Ingeniería",
			title: "Jefe de Prevención de Riesgos",
			quote:
				"La mejor inversión en seguridad laboral que hemos realizado. El equipo de CAEMP es altamente profesional, con conocimientos actualizados y metodología práctica. Las instalaciones son de primer nivel y cuentan con todo el equipamiento necesario para una capacitación efectiva. Nuestros trabajadores ahora están mucho mejor preparados para identificar y controlar riesgos en altura.",
		},
		{
			name: "Zener",
			title: "Coordinador de Recursos Humanos",
			quote:
				"Capacitación integral y práctica que superó nuestras expectativas. Los cursos están muy bien estructurados, combinando teoría con práctica de manera equilibrada. El material es excelente y los instructores demuestran un dominio completo de los temas. La certificación que obtuvieron nuestros colaboradores es reconocida en toda la industria, lo que nos da tranquilidad y cumplimiento normativo.",
		},
	]

	return (
		<section className="py-16 md:py-24">
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
