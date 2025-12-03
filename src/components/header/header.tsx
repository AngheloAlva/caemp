"use client"

import { Menu, ChevronDown, ArrowLeftIcon } from "lucide-react"
import { Link, useRouterState } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"
import { Image } from "@unpic/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import NavItem from "./nav-item"

interface HeaderConfig {
	logo: string[]
	homeLink: string
	brandName: string
	navItems: { to: string; label: string }[]
	lineOfBusiness: "crecimiento" | "otec" | "plus" | "grupo"
	ctaButton?: { to: string; label: string; className: string }
}

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [empresasMenuOpen, setEmpresasMenuOpen] = useState(false)
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	const isOtec = pathname.startsWith("/otec")
	const isCrecimiento = pathname.startsWith("/crecimiento")
	const isPlus = pathname.startsWith("/plus")
	const isGrupo = pathname === "/" || (!isOtec && !isCrecimiento && !isPlus)

	const config: HeaderConfig = isOtec
		? {
				logo: ["/images/logo/logo-o-black.png"],
				brandName: "Capacitacion y Entrenamiento",
				lineOfBusiness: "otec",
				homeLink: "/otec",
				navItems: [
					{ to: "/otec", label: "Inicio" },
					{ to: "/otec/cursos", label: "Cursos" },
					{ to: "/otec/nosotros", label: "Nosotros" },
					{ to: "#", label: "Galería" },
					{ to: "#", label: "Contacto" },
				],
				ctaButton: {
					to: "/otec/cotizacion",
					label: "Solicitar Cotización",
					className: "bg-primary text-white",
				},
			}
		: isCrecimiento
			? {
					logo: ["/images/logo/logo-c-black.png"],
					brandName: "Formacion y Couching",
					lineOfBusiness: "crecimiento",
					homeLink: "/crecimiento",
					navItems: [
						{ to: "/crecimiento", label: "Inicio" },
						{ to: "/crecimiento/cursos", label: "Cursos" },
						{ to: "/crecimiento/talleres", label: "Talleres" },
						{ to: "/crecimiento/programas", label: "Programas" },
						{ to: "/crecimiento/noticias", label: "Noticias" },
						{ to: "/crecimiento/teatro", label: "Teatro" },
						{ to: "/crecimiento/nosotros", label: "Nosotros" },
						{ to: "/crecimiento/contacto", label: "Contacto" },
					],
					ctaButton: {
						to: "/crecimiento/cotizacion",
						label: "Solicitar Cotización",
						className: "bg-primary-purple text-white",
					},
				}
			: isPlus
				? {
						logo: ["/images/logo/logo-p-black.png"],
						brandName: "Asesoria tecnica y venta de EPP",
						lineOfBusiness: "plus",
						homeLink: "/plus",
						navItems: [
							{ to: "/plus", label: "Inicio" },
							{ to: "/plus/nosotros", label: "Nosotros" },
							{ to: "#", label: "Productos" },
							{ to: "#", label: "Contacto" },
						],
						ctaButton: {
							to: "/plus/cotizacion",
							label: "Solicitar Cotización",
							className: "bg-primary-green text-white",
						},
					}
				: {
						logo: [
							"/images/logo/logo-o-black.png",
							"/images/logo/logo-c-black.png",
							"/images/logo/logo-p-black.png",
						],
						brandName: "Grupo CAEMP",
						lineOfBusiness: "grupo",
						homeLink: "/",
						navItems: [
							{ to: "/", label: "Inicio" },
							{ to: "#contacto", label: "Contacto" },
						],
					}

	return (
		<header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
			<div className="max-w-8xl mx-auto flex h-16 items-center justify-between gap-4">
				<Link to={config.homeLink} className="flex items-center justify-start space-x-2">
					<motion.div
						className="flex items-center gap-2"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<div className="flex h-14 w-auto items-center">
							{isGrupo ? (
								config.logo.map((logo, index) => (
									<motion.div
										key={logo}
										initial={{ opacity: 0, scale: 0, translateX: (index + 1) * -30 }}
										animate={{ opacity: 1, scale: 1, translateX: 0 }}
										transition={{
											duration: 0.5,
											delay: (index + 1) * 0.4,
											scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
										}}
									>
										<Image alt="Logo" width={64} height={64} src={logo} />
									</motion.div>
								))
							) : (
								<motion.div
									initial={{ opacity: 0, scale: 0, translateX: -40 }}
									animate={{ opacity: 1, scale: 1, translateX: 0 }}
									transition={{
										duration: 0.5,
										scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
									}}
								>
									<Image alt="Logo" width={64} height={64} src={config.logo[0]} />
								</motion.div>
							)}
						</div>

						<span className="text-lg leading-6 font-bold xl:text-xl">{config.brandName}</span>
					</motion.div>
				</Link>

				<div className="flex items-center justify-end gap-4">
					<nav className="hidden items-center justify-center gap-6 lg:flex">
						{config.navItems.map((item) => (
							<NavItem
								to={item.to}
								label={item.label}
								key={`${item.label}-${item.to}`}
								lineOfBusiness={config.lineOfBusiness}
							/>
						))}

						<div
							className="relative"
							onMouseEnter={() => setEmpresasMenuOpen(true)}
							onMouseLeave={() => setEmpresasMenuOpen(false)}
						>
							<a
								href="#nuestras-empresas"
								className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#004080]"
							>
								Lineas de Negocio
								<ChevronDown className="h-4 w-4" />
							</a>

							<AnimatePresence>
								{empresasMenuOpen && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.2 }}
										className="absolute top-full right-0 mt-2 w-48 rounded-md border bg-white shadow-lg"
									>
										<div className="py-2">
											<Link
												to="/otec"
												className="hover:text-primary hover:bg-primary/10 block px-4 py-2 text-sm text-gray-700"
											>
												CAEMP OTEC
											</Link>
											<Link
												to="/plus"
												className="hover:text-primary-green hover:bg-primary-green/10 block px-4 py-2 text-sm text-gray-700"
											>
												CAEMP PLUS
											</Link>
											<Link
												to="/crecimiento"
												className="hover:text-primary-purple hover:bg-primary-purple/10 block px-4 py-2 text-sm text-gray-700"
											>
												CRECIMIENTO
											</Link>

											{!isGrupo && (
												<>
													<div className="my-1 border-t" />
													<Link
														to="/"
														className="hover:text-primary hover:bg-primary/10 flex items-center gap-2 px-4 py-2 text-sm font-semibold"
													>
														<ArrowLeftIcon className="h-3 w-3" /> Grupo CAEMP
													</Link>
												</>
											)}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</nav>

					<div
						className={cn("flex items-center justify-end gap-4", {
							"md:hidden": !config.ctaButton,
						})}
					>
						{config.ctaButton && (
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button asChild className={cn("hidden md:inline-flex", config.ctaButton.className)}>
									<Link to={config.ctaButton.to}>{config.ctaButton.label}</Link>
								</Button>
							</motion.div>
						)}

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								<Menu className="h-5 w-5" />
							</Button>
						</motion.div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						className="border-border border-t md:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<nav className="container flex flex-col gap-4 p-4">
							{config.navItems.map((item) => (
								<NavItem
									to={item.to}
									label={item.label}
									key={`${item.label}-${item.to}`}
									lineOfBusiness={config.lineOfBusiness}
								/>
							))}

							<div className="border-t pt-4">
								<p className="mb-2 text-xs font-semibold text-gray-500">Lineas de Negocio</p>
								<div className="flex flex-col gap-2">
									<Link
										to="/otec"
										className="rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#F59E0B]"
									>
										CAEMP OTEC
									</Link>
									<Link
										to="/plus"
										className="hover:text-primary-green rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-green-50"
									>
										CAEMP PLUS
									</Link>
									<Link
										to="/crecimiento"
										className="hover:text-primary-purple rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-purple-50"
									>
										CRECIMIENTO
									</Link>
									<Link
										to="/"
										className="flex items-center gap-2 rounded-md py-2 text-sm font-semibold text-[#004080] hover:bg-blue-50"
									>
										<ArrowLeftIcon className="h-3 w-3" /> Grupo CAEMP
									</Link>
								</div>
							</div>

							{config.ctaButton && (
								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
									<Button asChild className={cn("w-full", config.ctaButton.className)}>
										<Link to={config.ctaButton.to}>{config.ctaButton.label}</Link>
									</Button>
								</motion.div>
							)}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
