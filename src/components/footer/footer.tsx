"use client"

import { Link, useRouterState } from "@tanstack/react-router"
import { MailIcon, PhoneIcon, ArrowRightIcon } from "lucide-react"

import { Image } from "@/components/shared/image"
import { getFooterConfig } from "./footer-config"

export function Footer() {
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	// React Compiler will optimize this automatically
	const config = getFooterConfig(pathname)
	const isGrupo =
		pathname === "/" ||
		(!pathname.startsWith("/otec") &&
			!pathname.startsWith("/crecimiento") &&
			!pathname.startsWith("/plus"))

	return (
		<footer className="bg-muted/30 min-h-[400px] border-t px-4 md:min-h-[350px]">
			<div className="container mx-auto py-12 md:py-16">
				<div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
					<div className="space-y-4 lg:w-1/3">
						<div className="flex flex-col items-start gap-2">
							<div className="flex items-center gap-1">
								<Image
									width={112}
									height={112}
									loading="lazy"
									alt={config.alt}
									src={config.logo}
									className="h-28 w-28 object-contain"
								/>

								{config.logoCrecimiento && (
									<Image
										width={112}
										height={112}
										loading="lazy"
										alt={config.alt}
										src={config.logoCrecimiento}
										className="h-28 w-28 object-contain"
									/>
								)}

								{config.logoPlus && (
									<Image
										width={112}
										height={112}
										loading="lazy"
										alt={config.alt}
										src={config.logoPlus}
										className="h-28 w-28 object-contain"
									/>
								)}
							</div>

							<span className="text-xl font-bold">{config.brandName}</span>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">{config.tagline}</p>
					</div>

					<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-3">
						<div>
							<h3 className="mb-4 font-semibold">Navegación</h3>
							<ul className="space-y-3 text-sm">
								{config.navItems.map((item) => (
									<li key={`${item.label}-${item.to}`}>
										<Link
											to={item.to}
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="mb-4 font-semibold">Líneas de Negocio</h3>
							<ul className="space-y-3 text-sm">
								<li>
									<Link
										to="/otec"
										className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
									>
										CAEMP OTEC
									</Link>
								</li>
								<li>
									<Link
										to="/plus"
										className="text-muted-foreground hover:text-primary-green flex items-center gap-2 transition-colors"
									>
										CAEMP PLUS
									</Link>
								</li>
								<li>
									<Link
										to="/crecimiento"
										className="text-muted-foreground hover:text-primary-purple flex items-center gap-2 transition-colors"
									>
										CRECIMIENTO
									</Link>
								</li>
								{!isGrupo && (
									<li>
										<Link
											to="/"
											className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
										>
											<ArrowRightIcon className="h-3 w-3" /> Grupo CAEMP
										</Link>
									</li>
								)}
							</ul>
						</div>

						{config.email && config.phone && (
							<div>
								<h3 className="mb-4 font-semibold">Contacto</h3>
								<ul className="space-y-3 text-sm">
									<li className="text-muted-foreground flex items-center gap-2">
										<PhoneIcon className="h-4 w-4" />
										<a href={`tel:${config.phone}`}>{config.phone}</a>
									</li>
									<li className="text-muted-foreground flex items-center gap-2">
										<MailIcon className="h-4 w-4" />
										<a href={`mailto:${config.email}`}>{config.email}</a>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>

				<div className="text-muted-foreground mt-12 border-t pt-8 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} Grupo CAEMP</p>
				</div>
			</div>
		</footer>
	)
}
