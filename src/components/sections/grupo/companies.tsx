"use client"

import { Image } from "@/components/shared/image"
import { TenantLink } from "@/components/shared/tenant-link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"

const companies = [
	{
		name: "CAEMP (OTEC)",
		logo: "/images/logo/logo-o-black.png",
		whiteLogo: "/images/logo/logo-o-white.png",
		color: "#0066b3", // Azul
		description:
			"Capacitación, entrenamiento y respuesta ante emergencias. Diseñamos programas certificados por SENCE en sectores como minería, energía, telecomunicaciones y maestranzas.",
		address: "Blas Vial 8727, La Cisterna, Santiago",
		email: "grupo@caemp.cl",
		link: "/otec",
	},
	{
		name: "CAEMP PLUS",
		logo: "/images/logo/logo-p-black.png",
		whiteLogo: "/images/logo/logo-p-white.png",
		color: "#00a651", // Verde
		description:
			"Comercialización de equipos de protección personal y colectiva de última generación. Brindamos asesoría técnica especializada para garantizar la seguridad en cada entorno de trabajo.",
		address: "Blas Vial 8727, La Cisterna, Santiago",
		email: "ventas@caemp.cl",
		link: "/plus",
	},
	{
		name: "CRECIMIENTO",
		logo: "/images/logo/logo-c-black.png",
		whiteLogo: "/images/logo/logo-c-white.png",
		color: "#9b2789", // Púrpura
		description:
			"Potenciamos el liderazgo, la comunicación y la colaboración. Diseñamos programas de capacitación y talleres personalizados que fortalecen las habilidades blandas.",
		address: "Irarrazaval 5225, oficina 1",
		email: "grupo@caemp.cl",
		link: "/crecimiento",
	},
]

export default function Companies() {
	return (
		<section id="nuestras-empresas" className="w-full bg-slate-50 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<FadeIn>
					<div className="mb-12 space-y-4 text-center">
						<h2 className="text-primary text-3xl font-bold md:text-4xl lg:text-6xl">Grupo CAEMP</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-600">
							Más de {new Date().getFullYear() - 2010} años acompañando a las empresas de Chile en
							la construcción de entornos laborales más seguros, conscientes y productivos.
						</p>
						<p className="mx-auto max-w-3xl text-lg text-gray-600">
							Integramos tres unidades de negocio especializadas para brindar soluciones completas a
							nuestros clientes.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
					{companies.map((company, index) => (
						<StaggerItem key={index}>
							<motion.div whileHover={{ y: -10 }} transition={{ duration: 0.2 }} className="h-full">
								<div
									className={cn(
										"group relative flex h-full flex-col bg-transparent px-8 py-10 shadow-2xl transition-shadow",
										{
											"shadow-neutral-400": index === 1,
											"shadow-neutral-500": index === 0,
										}
									)}
								>
									<div className="absolute inset-0 -z-10 flex items-end">
										<div
											className={cn(
												"bg-primary h-0 w-full transition-all duration-500 group-hover:h-full",
												{
													"bg-primary-green": index === 1,
													"bg-primary-purple": index === 2,
												}
											)}
										/>
									</div>

									<div className="mb-8">
										<Image
											width={90}
											height={90}
											alt={company.name}
											src={company.logo}
											className="h-22 w-auto object-contain group-hover:hidden"
										/>
										<Image
											width={90}
											height={90}
											alt={company.name}
											src={company.whiteLogo}
											className="hidden h-22 w-auto object-contain group-hover:block"
										/>
										<p className="mt-2 text-sm tracking-wide text-gray-400 uppercase transition-colors duration-500 group-hover:text-gray-200">
											{company.name}
										</p>
									</div>

									<p className="mb-10 grow leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white">
										{company.description}
									</p>

									<div
										className="mb-10 border-l-2 py-1 pl-4"
										style={{ borderColor: company.color }}
									>
										<p className="text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-200">
											<span className="font-semibold text-gray-700 transition-colors duration-300 group-hover:text-white">
												Dirección:{" "}
											</span>
											{company.address}
										</p>
										<p className="mt-2 text-sm text-gray-500 transition-colors duration-500 group-hover:text-gray-200">
											<span className="font-semibold text-gray-700 transition-colors duration-300 group-hover:text-white">
												Email:{" "}
											</span>
											<a
												href={`mailto:${company.email}`}
												className={cn("text-primary group-hover:text-white hover:underline", {
													"text-primary-green": index === 1,
													"text-primary-purple": index === 2,
												})}
											>
												{company.email}
											</a>
										</p>
									</div>

									<TenantLink to={company.link}>
										<motion.button
											whileTap={{ scale: 0.95 }}
											whileHover={{ scale: 1.05 }}
											aria-label={`Ver más sobre ${company.name}`}
											className={cn(
												"group border-primary text-primary z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 duration-100 group-hover:border-white group-hover:text-white hover:scale-105",
												{
													"text-primary-green border-primary-green": index === 1,
													"text-primary-purple border-primary-purple": index === 2,
												}
											)}
										>
											<ArrowRight className="h-5 w-5 transition-colors group-hover:text-white" />
										</motion.button>
									</TenantLink>
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeIn delay={0.6}>
					<div className="bg-primary mx-auto mt-20 max-w-6xl rounded-xs p-8 text-center text-white shadow md:p-12">
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
