import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Link, useRouterState } from "@tanstack/react-router"
import { Image } from "@unpic/react"

export function Footer() {
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	const isOtec = pathname.startsWith("/otec")
	const isCrecimiento = pathname.startsWith("/crecimiento")
	const isPlus = pathname.startsWith("/plus")

	const config = isOtec
		? {
				logo: "/images/logo/logo-o-black.png",
				alt: "CAEMP OTEC logo",
				brandName: "CAEMP OTEC",
				navItems: [
					{ to: "/otec", label: "Inicio" },
					{ to: "/otec/cursos", label: "Cursos" },
					{ to: "#", label: "Nosotros" },
					{ to: "#", label: "Galería" },
					{ to: "#", label: "Contacto" },
				],
			}
		: isCrecimiento
			? {
					logo: "/images/logo/logo-c-black.png",
					alt: "CRECIMIENTO logo",
					brandName: "CRECIMIENTO",
					navItems: [
						{ to: "/crecimiento", label: "Inicio" },
						{ to: "/crecimiento/talleres", label: "Talleres" },
						{ to: "/crecimiento/nosotros", label: "Nosotros" },
						{ to: "#", label: "Contacto" },
					],
				}
			: isPlus
				? {
						logo: "/images/logo/logo-p-black.png",
						alt: "CAEMP PLUS logo",
						brandName: "CAEMP PLUS",
						navItems: [
							{ to: "/plus", label: "Inicio" },
							{ to: "/plus/nosotros", label: "Nosotros" },
							{ to: "#", label: "Productos" },
							{ to: "#", label: "Contacto" },
						],
					}
				: {
						logo: "/images/logo/logo-o-black.png",
						alt: "Grupo CAEMP logo",
						brandName: "Grupo CAEMP",
						navItems: [
							{ to: "/", label: "Inicio" },
							{ to: "#contacto", label: "Contacto" },
						],
					}

	return (
		<footer className="bg-muted/30 border-t px-4">
			<div className="container mx-auto py-12 md:py-16">
				<div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
					<div className="space-y-4 lg:w-1/3">
						<div className="flex flex-col items-start gap-2">
							<Image
								width={112}
								height={112}
								loading="lazy"
								alt={config.alt}
								src={config.logo}
								className="h-28 w-28 object-contain"
							/>
							<span className="text-xl font-bold">{config.brandName}</span>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{isCrecimiento
								? "Cambiamos culturas, despertamos líderes."
								: "Especialistas en capacitación y entrenamiento en prevención de riesgos y seguridad laboral."}
						</p>

						<div className="flex gap-4">
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<FacebookIcon className="h-5 w-5" />
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<InstagramIcon className="h-5 w-5" />
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<LinkedinIcon className="h-5 w-5" />
							</a>
						</div>
					</div>

					<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2">
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
							<h3 className="mb-4 font-semibold">Contacto</h3>
							<ul className="space-y-3 text-sm">
								<li className="text-muted-foreground flex items-center gap-2">
									<PhoneIcon className="h-4 w-4" />
									<span>2 2667 6455</span>
								</li>
								<li className="text-muted-foreground flex items-center gap-2">
									<PhoneIcon className="h-4 w-4" />
									<span>+56 9 3247 8827</span>
								</li>
								<li className="text-muted-foreground flex items-center gap-2">
									<MailIcon className="h-4 w-4" />
									<span>contacto@caemp.cl</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="text-muted-foreground mt-12 border-t pt-8 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} Grupo CAEMP</p>
				</div>
			</div>
		</footer>
	)
}
