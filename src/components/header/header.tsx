"use client"

import { Link, useRouterState } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"
import { Menu, ChevronDown } from "lucide-react"
import { Image } from "@unpic/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import NavItem from "./nav-item"

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [empresasMenuOpen, setEmpresasMenuOpen] = useState(false)
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	const isOtec = pathname.startsWith("/otec")
	const isCrecimiento = pathname.startsWith("/crecimiento")
	const isPlus = pathname.startsWith("/plus")
	const isGrupo = pathname === "/" || (!isOtec && !isCrecimiento && !isPlus)

	const config = isOtec
		? {
				logo: "/images/logo/logo-o-black.png",
				brandName: "CAEMP OTEC",
				homeLink: "/otec",
				navItems: [
					{ to: "/otec", label: "Inicio" },
					{ to: "/otec/cursos", label: "Cursos" },
					{ to: "#", label: "Nosotros" },
					{ to: "#", label: "Galería" },
					{ to: "#", label: "Contacto" },
				],
				ctaButton: { to: "/otec/cotizacion", label: "Solicitar Cotización" },
			}
		: isCrecimiento
			? {
					logo: "/images/logo/logo-c-black.png",
					brandName: "CRECIMIENTO",
					homeLink: "/crecimiento",
					navItems: [
						{ to: "/crecimiento", label: "Inicio" },
						{ to: "#", label: "Talleres" },
						{ to: "#", label: "Nosotros" },
						{ to: "#", label: "Contacto" },
					],
					ctaButton: { to: "/crecimiento/cotizacion", label: "Solicitar Cotización" },
				}
			: isPlus
				? {
						logo: "/images/logo/logo-p-black.png",
						brandName: "CAEMP PLUS",
						homeLink: "/plus",
						navItems: [
							{ to: "/plus", label: "Inicio" },
							{ to: "#", label: "Servicios" },
							{ to: "#", label: "Productos" },
							{ to: "#", label: "Contacto" },
						],
						ctaButton: { to: "/plus/cotizacion", label: "Solicitar Cotización" },
					}
				: {
						logo: "/images/logo/logo-o-black.png",
						brandName: "Grupo CAEMP",
						homeLink: "/",
						navItems: [
							{ to: "/", label: "Inicio" },
							{ to: "#contacto", label: "Contacto" },
						],
						ctaButton: null,
					}

	return (
		<header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between">
				<Link to={config.homeLink} className="flex items-center space-x-2">
					<motion.div
						className="flex items-center gap-2"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<motion.div
							className="h-14 w-14"
							whileHover={{ rotate: 6 }}
							transition={{ duration: 0.3 }}
						>
							<Image alt="Logo" width={64} height={64} src={config.logo} />
						</motion.div>
						<span className="text-xl font-bold">{config.brandName}</span>
					</motion.div>
				</Link>

				<nav className="hidden items-center gap-6 md:flex">
					{config.navItems.map((item) => (
						<NavItem key={item.to} to={item.to} label={item.label} />
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
													className="hover:text-primary hover:bg-primary/10 block px-4 py-2 text-sm font-semibold"
												>
													← Grupo CAEMP
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
					className={cn("flex items-center gap-4", {
						"md:hidden": !config.ctaButton,
					})}
				>
					{config.ctaButton && (
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button asChild className="hidden md:inline-flex">
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
								<NavItem key={item.to} to={item.to} label={item.label} />
							))}

							<div className="border-t pt-4">
								<p className="mb-2 text-xs font-semibold text-gray-500">EMPRESAS</p>
								<div className="flex flex-col gap-2">
									<Link
										to="/otec"
										className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#F59E0B]"
									>
										🔶 CAEMP OTEC
									</Link>
									<Link
										to="/plus"
										className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-[#22C55E]"
									>
										🟩 CAEMP PLUS
									</Link>
									<Link
										to="/crecimiento"
										className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-[#8B5CF6]"
									>
										🟪 CRECIMIENTO
									</Link>
									<Link
										to="/"
										className="rounded-md px-3 py-2 text-sm font-semibold text-[#004080] hover:bg-blue-50"
									>
										← Grupo CAEMP
									</Link>
								</div>
							</div>

							{config.ctaButton && (
								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
									<Button asChild className="w-full">
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
