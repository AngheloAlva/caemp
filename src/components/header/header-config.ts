export interface HeaderConfig {
	logo: string[]
	homeLink: string
	brandName: string
	navItems: { to: string; label: string }[]
	lineOfBusiness: "crecimiento" | "otec" | "plus" | "grupo"
	ctaButton?: { to: string; label: string; className: string }
}

export const serviciosCrecimiento = [
	{ to: "/crecimiento/cursos", label: "Cursos" },
	{ to: "/crecimiento/talleres", label: "Talleres" },
	{ to: "/crecimiento/programas", label: "Programas" },
	{ to: "/crecimiento/teatro", label: "Teatro" },
] as const

export const otecConfig: HeaderConfig = {
	logo: ["/images/logo/logo-o-black.png"],
	brandName: "Capacitacion y Entrenamiento",
	lineOfBusiness: "otec",
	homeLink: "/otec",
	navItems: [
		{ to: "/otec", label: "Inicio" },
		{ to: "/otec/cursos", label: "Cursos" },
		{ to: "/otec/nosotros", label: "Nosotros" },
		{ to: "/otec/galeria", label: "Galería" },
		{ to: "/otec/contacto", label: "Contacto" },
	],
	ctaButton: {
		to: "/otec/cotizacion",
		label: "Solicitar Cotización",
		className: "bg-primary text-white",
	},
}

export const crecimientoConfig: HeaderConfig = {
	logo: ["/images/logo/logo-c-black.png"],
	brandName: "Formacion y Coaching",
	lineOfBusiness: "crecimiento",
	homeLink: "/crecimiento",
	navItems: [
		{ to: "/crecimiento", label: "Inicio" },
		{ to: "/crecimiento/noticias", label: "Noticias" },
		{ to: "/crecimiento/nosotros", label: "Nosotros" },
		{ to: "/crecimiento/galeria", label: "Galería" },
		{ to: "/crecimiento/contacto", label: "Contacto" },
	],
	ctaButton: {
		to: "/crecimiento/cotizacion",
		label: "Solicitar Cotización",
		className: "bg-primary-purple text-white",
	},
}

export const plusConfig: HeaderConfig = {
	logo: ["/images/logo/logo-p-black.png"],
	brandName: "Asesoria tecnica y venta de EPP",
	lineOfBusiness: "plus",
	homeLink: "/plus",
	navItems: [
		{ to: "/plus", label: "Inicio" },
		{ to: "/plus/nosotros", label: "Nosotros" },
		{ to: "/plus/productos", label: "Productos" },
		{ to: "/plus/contacto", label: "Contacto" },
	],
	ctaButton: {
		to: "/plus/cotizacion",
		label: "Solicitar Cotización",
		className: "bg-primary-green text-white",
	},
}

export const grupoConfig: HeaderConfig = {
	logo: [
		"/images/logo/logo-o-black.png",
		"/images/logo/logo-p-black.png",
		"/images/logo/logo-c-black.png",
	],
	brandName: "Grupo CAEMP",
	lineOfBusiness: "grupo",
	homeLink: "/",
	navItems: [
		{ to: "/", label: "Inicio" },
		{ to: "#quienes-somos", label: "Quiénes Somos" },
		{ to: "#contacto", label: "Contacto" },
	],
}

export function getHeaderConfig(pathname: string): HeaderConfig {
	if (pathname.startsWith("/otec")) return otecConfig
	if (pathname.startsWith("/crecimiento")) return crecimientoConfig
	if (pathname.startsWith("/plus")) return plusConfig
	return grupoConfig
}
