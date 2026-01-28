"use client"

import { Menu, ChevronDown, ArrowLeftIcon } from "lucide-react"
import { Link, useRouterState } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import { TenantLink } from "@/components/shared/tenant-link"
import { Image } from "@/components/shared/image"
import { Button } from "@/components/ui/button"
import NavItem from "./nav-item"

import { getHeaderConfig, serviciosCrecimiento } from "./header-config"

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [empresasMenuOpen, setEmpresasMenuOpen] = useState(false)
	const [serviciosMenuOpen, setServiciosMenuOpen] = useState(false)
	const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false)
	const [mobileLineasOpen, setMobileLineasOpen] = useState(false)

	const closeMobileMenu = () => setMobileMenuOpen(false)

	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	const config = getHeaderConfig(pathname)
	const isCrecimiento = config.lineOfBusiness === "crecimiento"
	const isGrupo = config.lineOfBusiness === "grupo"

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
										<Image alt="Logo" width={60} height={60} src={logo} />
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

						<span className="text-lg leading-6 font-semibold xl:text-xl">{config.brandName}</span>
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

						{isCrecimiento && (
							<div
								className="relative"
								onMouseEnter={() => setServiciosMenuOpen(true)}
								onMouseLeave={() => setServiciosMenuOpen(false)}
							>
								<a
									href="#servicios"
									className="hover:text-primary-purple flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors"
								>
									Servicios
									<ChevronDown className="h-4 w-4" />
								</a>

								<AnimatePresence>
									{serviciosMenuOpen && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.2 }}
											className="absolute top-full right-0 mt-2 w-48 rounded-md border bg-white shadow-lg"
										>
											<div className="py-2">
												{serviciosCrecimiento.map((servicio) => (
													<Link
														key={servicio.to}
														to={servicio.to}
														className="hover:text-primary-purple hover:bg-primary-purple/10 block px-4 py-2 text-sm text-gray-700"
													>
														{servicio.label}
													</Link>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						)}

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
											<TenantLink
												to="/otec"
												className="hover:text-primary hover:bg-primary/10 block px-4 py-2 text-sm text-gray-700"
											>
												CAEMP OTEC
											</TenantLink>
											<TenantLink
												to="/plus"
												className="hover:text-primary-green hover:bg-primary-green/10 block px-4 py-2 text-sm text-gray-700"
											>
												CAEMP PLUS
											</TenantLink>
											<TenantLink
												to="/crecimiento"
												className="hover:text-primary-purple hover:bg-primary-purple/10 block px-4 py-2 text-sm text-gray-700"
											>
												CRECIMIENTO
											</TenantLink>

											{!isGrupo && (
												<>
													<div className="my-1 border-t" />
													<TenantLink
														to="/"
														className="hover:text-primary hover:bg-primary/10 flex items-center gap-2 px-4 py-2 text-sm font-semibold"
													>
														<ArrowLeftIcon className="h-3 w-3" /> Grupo CAEMP
													</TenantLink>
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
							"lg:hidden": !config.ctaButton,
						})}
					>
						{config.ctaButton && (
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button asChild className={cn("hidden lg:inline-flex", config.ctaButton.className)}>
									<Link to={config.ctaButton.to}>{config.ctaButton.label}</Link>
								</Button>
							</motion.div>
						)}

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="icon"
								className="lg:hidden"
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
						className="border-border border-t lg:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<nav className="container flex flex-col px-2 py-4">
							{config.navItems.map((item) => (
								<NavItem
									to={item.to}
									label={item.label}
									key={`${item.label}-${item.to}`}
									lineOfBusiness={config.lineOfBusiness}
									onClick={closeMobileMenu}
								/>
							))}

							{isCrecimiento && (
								<div className="border-t py-2">
									<button
										type="button"
										onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
										className="flex w-full items-center justify-between py-2 text-xs font-semibold text-gray-500"
									>
										Servicios
										<ChevronDown
											className={cn("h-4 w-4 transition-transform", {
												"rotate-180": mobileServiciosOpen,
											})}
										/>
									</button>
									<AnimatePresence>
										{mobileServiciosOpen && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												className="flex flex-col gap-0 overflow-hidden"
											>
												{serviciosCrecimiento.map((servicio) => (
													<Link
														key={servicio.to}
														to={servicio.to}
														onClick={closeMobileMenu}
														className="hover:text-primary-purple rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50"
													>
														{servicio.label}
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							)}

							<div className="border-t py-2">
								<button
									type="button"
									onClick={() => setMobileLineasOpen(!mobileLineasOpen)}
									className="flex w-full items-center justify-between py-2 text-xs font-semibold text-gray-500"
								>
									Lineas de Negocio
									<ChevronDown
										className={cn("h-4 w-4 transition-transform", {
											"rotate-180": mobileLineasOpen,
										})}
									/>
								</button>
								<AnimatePresence>
									{mobileLineasOpen && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											className="flex flex-col overflow-hidden"
										>
											<TenantLink
												to="/otec"
												onClick={closeMobileMenu}
												className="rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#F59E0B]"
											>
												CAEMP OTEC
											</TenantLink>
											<TenantLink
												to="/plus"
												onClick={closeMobileMenu}
												className="hover:text-primary-green rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-green-50"
											>
												CAEMP PLUS
											</TenantLink>
											<TenantLink
												to="/crecimiento"
												onClick={closeMobileMenu}
												className="hover:text-primary-purple rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50"
											>
												CRECIMIENTO
											</TenantLink>
											<TenantLink
												to="/"
												onClick={closeMobileMenu}
												className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-[#004080] hover:bg-blue-50"
											>
												<ArrowLeftIcon className="h-3 w-3" /> Grupo CAEMP
											</TenantLink>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{config.ctaButton && (
								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
									<Button asChild className={cn("w-full", config.ctaButton.className)}>
										<Link to={config.ctaButton.to} onClick={closeMobileMenu}>
											{config.ctaButton.label}
										</Link>
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
