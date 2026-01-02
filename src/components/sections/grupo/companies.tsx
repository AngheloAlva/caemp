"use client"

import { ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { Image } from "@/components/shared/image"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"

const companies = [
	{
		name: "CAEMP (OTEC)",
		logo: "/images/logo/logo-o-black.png",
		color: "#0066b3", // Azul
		description:
			"Capacitación, entrenamiento y respuesta ante emergencias. Diseñamos programas certificados por SENCE en sectores como minería, energía, telecomunicaciones y maestranzas.",
		address: "Calle Uno 6415, Parque Industrial, Pudahuel – Santiago – Chile",
		email: "contacto@grupocaemp.cl",
		link: "/otec",
	},
	{
		name: "CAEMP PLUS",
		logo: "/images/logo/logo-p-black.png",
		color: "#00a651", // Verde
		description:
			"Comercialización de equipos de protección personal y colectiva de última generación. Brindamos asesoría técnica especializada para garantizar la seguridad en cada entorno de trabajo.",
		address: "Calle Uno 6415, Parque Industrial, Pudahuel – Santiago – Chile",
		email: "contacto@grupocaemp.cl",
		link: "/plus",
	},
	{
		name: "CRECIMIENTO",
		logo: "/images/logo/logo-c-black.png",
		color: "#9b2789", // Púrpura
		description:
			"Potenciamos el liderazgo, la comunicación y la colaboración. Diseñamos programas de capacitación y talleres personalizados que fortalecen las habilidades blandas.",
		address: "Calle Uno 6415, Parque Industrial, Pudahuel – Santiago – Chile",
		email: "contacto@grupocaemp.cl",
		link: "/crecimiento",
	},
]

export default function Companies() {
	return (
		<section id="nuestras-empresas" className="w-full bg-slate-100 py-16 md:py-28">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Nuestras Líneas de Negocio
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							En <strong>Grupo CAEMP</strong>, integramos tres unidades de negocio especializadas
							para brindar soluciones completas a nuestros clientes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-0 md:grid-cols-1 lg:grid-cols-3">
					{companies.map((company, index) => (
						<StaggerItem key={index}>
							<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
								<div className="flex h-full flex-col bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
									{/* Logo Section */}
									<div className="mb-6">
										<Image
											src={company.logo}
											alt={company.name}
											width={140}
											height={70}
											className="h-16 w-auto object-contain"
										/>
										<p className="mt-1 text-xs text-gray-400">Grupo CAEMP</p>
									</div>

									{/* Description */}
									<p className="mb-8 grow text-sm leading-relaxed text-gray-700">
										{company.description}
									</p>

									{/* Contact Info with colored left border */}
									<div className="mb-8 border-l-2 pl-4" style={{ borderColor: company.color }}>
										<p className="text-xs text-gray-600">
											<span className="font-medium text-gray-800">Dirección: </span>
											{company.address}
										</p>
										<p className="mt-1 text-xs text-gray-600">
											<span className="font-medium text-gray-800">Email: </span>
											<a
												href={`mailto:${company.email}`}
												className="hover:underline"
												style={{ color: company.color }}
											>
												{company.email}
											</a>
										</p>
									</div>

									{/* Circular Arrow Button */}
									<div>
										<Link to={company.link}>
											<motion.button
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.95 }}
												className="flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors"
												style={{
													borderColor: company.color,
													color: company.color,
												}}
												aria-label={`Ver más sobre ${company.name}`}
											>
												<ArrowRight className="h-5 w-5" />
											</motion.button>
										</Link>
									</div>
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="bg-primary mt-16 rounded-lg p-8 text-center text-white shadow md:p-12">
						<h3 className="mb-4 text-2xl font-bold md:text-3xl">Valor Diferencial</h3>
						<p className="mx-auto mb-8 max-w-3xl text-lg">
							<span className="font-semibold">Grupo CAEMP</span> no solo entrega servicios
							individuales, sino{" "}
							<span className="font-semibold">soluciones estratégicas integrales</span> para las
							organizaciones que buscan crecer con propósito.
						</p>
						<blockquote className="text-xl italic opacity-90">
							"La seguridad comienza con la conciencia y el compromiso humano."
						</blockquote>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
