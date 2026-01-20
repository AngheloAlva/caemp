interface FooterConfig {
	logo: string
	logoCrecimiento?: string
	logoPlus?: string
	alt: string
	brandName: string
	navItems: { to: string; label: string }[]
	email: string
	phone: string
	tagline?: string
}

export const otecFooterConfig: FooterConfig = {
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
	email: "grupocaemp@caemp.cl",
	phone: "+56 2 2667 6455",
	tagline:
		"Especialistas en capacitación y entrenamiento en prevención de riesgos y seguridad laboral.",
}

export const crecimientoFooterConfig: FooterConfig = {
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
	email: "grupocaemp@caemp.cl",
	phone: "+56 2 2667 6455",
	tagline: "Cambiamos culturas, despertamos líderes.",
}

export const plusFooterConfig: FooterConfig = {
	logo: "/images/logo/logo-p-black.png",
	alt: "CAEMP PLUS logo",
	brandName: "CAEMP PLUS",
	navItems: [
		{ to: "/plus", label: "Inicio" },
		{ to: "/plus/nosotros", label: "Nosotros" },
		{ to: "/plus/productos", label: "Productos" },
		{ to: "/plus/contacto", label: "Contacto" },
	],
	email: "ventas@caemplus",
	phone: "+56 2 2667 6455",
	tagline:
		"Especialistas en capacitación y entrenamiento en prevención de riesgos y seguridad laboral.",
}

export const grupoFooterConfig: FooterConfig = {
	logo: "/images/logo/logo-o-black.png",
	logoCrecimiento: "/images/logo/logo-c-black.png",
	logoPlus: "/images/logo/logo-p-black.png",
	alt: "Grupo CAEMP logo",
	brandName: "Grupo CAEMP",
	navItems: [
		{ to: "/", label: "Inicio" },
		{ to: "#quienes-somos", label: "Quiénes Somos" },
		{ to: "#contacto", label: "Contacto" },
	],
	email: "grupocaemp@caemp.cl",
	phone: "+56 2 2667 6455",
	tagline: "",
}

export function getFooterConfig(pathname: string): FooterConfig {
	if (pathname.startsWith("/otec")) return otecFooterConfig
	if (pathname.startsWith("/crecimiento")) return crecimientoFooterConfig
	if (pathname.startsWith("/plus")) return plusFooterConfig
	return grupoFooterConfig
}
