"use client"

import { motion, AnimatePresence } from "motion/react"
import { Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import NavItem from "./nav-item"

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center space-x-2">
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
							<Image alt="Logo" width={64} height={64} src="/images/logo/logo-o-black.png" />
						</motion.div>
						<span className="text-xl font-bold">CAEMP</span>
					</motion.div>
				</Link>

				<nav className="hidden items-center gap-6 md:flex">
					<NavItem to="/" label="Inicio" />
					<NavItem to="/cursos" label="Cursos" />
					<NavItem to="/nosotros" label="Nosotros" />
					<NavItem to="/galeria" label="Galería" />
					<NavItem to="/contacto" label="Contacto" />
				</nav>

				<div className="flex items-center gap-4">
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button asChild className="hidden md:inline-flex">
							<Link to="/cotizacion">Solicitar Cotización</Link>
						</Button>
					</motion.div>

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
							<NavItem to="/" label="Inicio" />
							<NavItem to="/cursos" label="Cursos" />
							<NavItem to="/nosotros" label="Nosotros" />
							<NavItem to="/galeria" label="Galería" />
							<NavItem to="/contacto" label="Contacto" />

							<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
								<Button asChild className="w-full">
									<Link to="/cotizacion">Solicitar Cotización</Link>
								</Button>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
