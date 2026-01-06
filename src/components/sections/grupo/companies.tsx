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
		address: "Blas Vial 8727, La Cisterna, Santiago",
		email: "grupocaemp@caemp.cl",
		link: "/otec",
	},
	{
		name: "CAEMP PLUS",
		logo: "/images/logo/logo-p-black.png",
		color: "#00a651", // Verde
		description:
			"Comercialización de equipos de protección personal y colectiva de última generación. Brindamos asesoría técnica especializada para garantizar la seguridad en cada entorno de trabajo.",
		address: "Blas Vial 8727, La Cisterna, Santiago",
		email: "venta@caemp.cl",
		link: "/plus",
	},
	{
		name: "CRECIMIENTO",
		logo: "/images/logo/logo-c-black.png",
		color: "#9b2789", // Púrpura
		description:
			"Potenciamos el liderazgo, la comunicación y la colaboración. Diseñamos programas de capacitación y talleres personalizados que fortalecen las habilidades blandas.",
		address: "Blas Vial 8727, La Cisterna, Santiago",
		email: "contacto@crecimiento.cl",
		link: "/crecimiento",
	},
]

export default function Companies() {
	return (
		<section id="nuestras-empresas" className="w-full bg-slate-50 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary mb-4 text-3xl font-medium md:text-4xl lg:text-5xl">
							Nuestras Líneas de Negocio
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-600">
							En <strong className="font-medium">Grupo CAEMP</strong>, integramos tres unidades de
							negocio especializadas para brindar soluciones completas a nuestros clientes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
					{companies.map((company, index) => (
						<StaggerItem key={index}>
							<motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="h-full">
								<div className="flex h-full flex-col bg-white px-8 py-10 transition-shadow hover:shadow-md">
									<div className="mb-8">
										<Image
											width={80}
											height={80}
											alt={company.name}
											src={company.logo}
											className="h-20 w-auto object-contain"
										/>
										<p className="mt-2 text-sm tracking-wide text-gray-400 uppercase">
											{company.name}
										</p>
									</div>

									<p className="mb-10 grow leading-relaxed text-gray-600">{company.description}</p>

									<div
										className="mb-10 border-l-2 py-1 pl-4"
										style={{ borderColor: company.color }}
									>
										<p className="text-sm leading-relaxed text-gray-500">
											<span className="font-semibold text-gray-700">Dirección: </span>
											{company.address}
										</p>
										<p className="mt-2 text-sm text-gray-500">
											<span className="font-semibold text-gray-700">Email: </span>
											<a
												href={`mailto:${company.email}`}
												className="transition-colors hover:underline"
												style={{ color: company.color }}
											>
												{company.email}
											</a>
										</p>
									</div>

									<div>
										<Link to={company.link}>
											<motion.button
												whileTap={{ scale: 0.95 }}
												aria-label={`Ver más sobre ${company.name}`}
												whileHover={{ backgroundColor: company.color, scale: 1.05 }}
												className="group flex h-14 w-14 items-center justify-center rounded-full border-2 duration-100 hover:scale-105"
												style={{
													borderColor: company.color,
													color: company.color,
												}}
											>
												<ArrowRight className="h-5 w-5 transition-colors group-hover:text-white" />
											</motion.button>
										</Link>
									</div>
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="bg-primary mx-auto mt-16 max-w-6xl rounded-xs p-8 text-center text-white shadow md:p-12">
						<h3 className="mb-4 text-2xl font-medium md:text-3xl">Valor Diferencial</h3>
						<p className="mx-auto mb-8 max-w-3xl text-lg">
							<span className="font-medium">Grupo CAEMP</span> no solo entrega servicios
							individuales, sino{" "}
							<span className="font-medium">soluciones estratégicas integrales</span> para las
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
