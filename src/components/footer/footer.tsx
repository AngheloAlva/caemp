import { Link, useRouterState } from "@tanstack/react-router"
import { Image } from "@/components/shared/image"
import {
	MailIcon,
	PhoneIcon,
	LinkedinIcon,
	FacebookIcon,
	InstagramIcon,
	ArrowRightIcon,
} from "lucide-react"

export function Footer() {
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	const isOtec = pathname.startsWith("/otec")
	const isCrecimiento = pathname.startsWith("/crecimiento")
	const isPlus = pathname.startsWith("/plus")
	const isGrupo = pathname === "/" || (!isOtec && !isCrecimiento && !isPlus)

	const config = isOtec
		? {
				logo: "/images/logo/logo-o-black.png",
				alt: "CAEMP OTEC logo",
				brandName: "CAEMP OTEC",
				navItems: [
					{ to: "/otec", label: "Inicio" },
					{ to: "/otec/cursos", label: "Cursos" },
					{ to: "/otec/nosotros", label: "Nosotros" },
					{ to: "/otec/galeria", label: "Galería" },
					{ to: "/otec/contacto", label: "Contacto" },
				],
			}
		: isCrecimiento
			? {
					logo: "/images/logo/logo-c-black.png",
					alt: "CRECIMIENTO logo",
					brandName: "CRECIMIENTO",
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
				}
			: isPlus
				? {
						logo: "/images/logo/logo-p-black.png",
						alt: "CAEMP PLUS logo",
						brandName: "CAEMP PLUS",
						navItems: [
							{ to: "/plus", label: "Inicio" },
							{ to: "/plus/nosotros", label: "Nosotros" },
							{ to: "/plus/productos", label: "Productos" },
							{ to: "/plus/contacto", label: "Contacto" },
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
		<footer className="bg-muted/30 min-h-[400px] border-t px-4 md:min-h-[350px]">
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

						<div>
							<h3 className="mb-4 font-semibold">Contacto</h3>
							<ul className="space-y-3 text-sm">
								<li className="text-muted-foreground flex items-center gap-2">
									<PhoneIcon className="h-4 w-4" />
									<span>+56 9 9884 3486</span>
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
