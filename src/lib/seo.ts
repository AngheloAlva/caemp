import { DOMAINS } from "./domains"

interface SEOMetadata {
	title: string
	description: string
	keywords?: string
	ogImage?: string
	ogType?: string
	twitterCard?: "summary" | "summary_large_image"
	canonical?: string
	noindex?: boolean
}

export const SITE_URL = `https://${DOMAINS.group}`

export const defaultSEO: SEOMetadata = {
	title: "Grupo CAEMP - Capacitación, Seguridad y Desarrollo de Talento",
	description:
		"Grupo CAEMP ofrece capacitación en seguridad laboral, venta de EPP y desarrollo de habilidades blandas. Más de 14 años de experiencia en Chile.",
	keywords:
		"capacitación laboral, seguridad industrial, EPP, prevención de riesgos, coaching empresarial, team building, cursos SENCE",
	ogImage: "/images/og-image.jpg",
	ogType: "website",
	twitterCard: "summary_large_image",
}

// OTEC Metadata
export const otecSEO: Record<string, SEOMetadata> = {
	"/otec": {
		title: "CAEMP OTEC - Capacitación y Entrenamiento en Seguridad Laboral",
		description:
			"Especialistas en capacitación, prevención de riesgos y entrenamiento ante emergencias. Cursos certificados SENCE para minería, energía y telecomunicaciones.",
		keywords:
			"OTEC, capacitación laboral, prevención de riesgos, seguridad industrial, cursos SENCE, emergencias, primeros auxilios",
		ogImage: "/images/otec/og-image.jpg",
	},
	"/otec/cursos": {
		title: "Cursos de Capacitación Laboral | CAEMP OTEC",
		description:
			"Cursos certificados en prevención de riesgos, trabajo en altura, espacios confinados, primeros auxilios y más. Certificación SENCE.",
		keywords:
			"cursos SENCE, capacitación laboral, trabajo en altura, espacios confinados, prevención riesgos",
	},
	"/otec/nosotros": {
		title: "Nosotros | CAEMP OTEC - Más de 14 años capacitando",
		description:
			"Conoce a CAEMP OTEC, organismo técnico de capacitación con más de 14 años formando profesionales en seguridad y prevención de riesgos.",
		keywords: "OTEC Chile, capacitación profesional, seguridad laboral, historia CAEMP",
	},
	"/otec/galeria": {
		title: "Galería de Capacitaciones | CAEMP OTEC",
		description:
			"Revisa nuestra galería de actividades prácticas en terreno. Capacitaciones reales con equipos profesionales.",
		keywords: "galería capacitaciones, actividades OTEC, entrenamiento práctico",
	},
	"/otec/contacto": {
		title: "Contacto | CAEMP OTEC - Solicita una Cotización",
		description:
			"Contáctanos para cotizar cursos de capacitación y seguridad laboral. Irarrazaval 5225, oficina 1. Tel: +56 9 4476 9378",
		keywords: "contacto OTEC, cotización cursos, capacitación Chile",
	},
}

// Crecimiento Metadata
export const crecimientoSEO: Record<string, SEOMetadata> = {
	"/crecimiento": {
		title: "Crecimiento - Capacitación en Habilidades Blandas y Team Building",
		description:
			"Potenciamos el liderazgo, comunicación y trabajo en equipo. Programas de coaching, talleres vivenciales y teatro aplicado para empresas.",
		keywords:
			"habilidades blandas, team building, coaching empresarial, liderazgo, comunicación efectiva, talleres vivenciales",
		ogImage: "/images/crecimiento/og-image.jpg",
	},
	"/crecimiento/cursos": {
		title: "Cursos de Desarrollo Personal | Crecimiento",
		description:
			"Cursos especializados en liderazgo, comunicación, inteligencia emocional y gestión de equipos. Modalidad presencial y online.",
		keywords: "cursos liderazgo, desarrollo personal, inteligencia emocional, gestión equipos",
	},
	"/crecimiento/talleres": {
		title: "Talleres Vivenciales | Crecimiento",
		description:
			"Talleres experienciales diseñados para fortalecer la confianza, cohesión y compromiso de equipos de trabajo.",
		keywords: "talleres vivenciales, team building, cohesión equipos, talleres empresariales",
	},
	"/crecimiento/programas": {
		title: "Programas de Capacitación Empresarial | Crecimiento",
		description:
			"Programas transformadores de liderazgo, comunicación y trabajo en equipo para el éxito organizacional.",
		keywords: "programas empresariales, capacitación ejecutiva, desarrollo organizacional",
	},
	"/crecimiento/teatro": {
		title: "Teatro Aplicado | Crecimiento - Educación a través del Arte",
		description:
			"Teatro aplicado para educar y transformar equipos. Obras sobre Ley Karin, inclusión, clima laboral y más.",
		keywords: "teatro aplicado, teatro empresarial, Ley Karin, educación corporativa",
	},
	"/crecimiento/noticias": {
		title: "Noticias | Crecimiento - Últimas Actividades",
		description:
			"Mantente al tanto de nuestras últimas actividades, proyectos y colaboraciones en desarrollo de personas y equipos.",
		keywords: "noticias Crecimiento, actividades empresariales, team building noticias",
	},
	"/crecimiento/nosotros": {
		title: "Nosotros | Crecimiento - Transformamos Potencial en Resultados",
		description:
			"Conoce Crecimiento, parte del Grupo CAEMP. Especializados en desarrollo profesional y personal mediante programas transformadores.",
		keywords: "Crecimiento CAEMP, coaching Chile, desarrollo profesional",
	},
	"/crecimiento/contacto": {
		title: "Contacto | Crecimiento - Solicita una Propuesta",
		description:
			"Contáctanos para programas de coaching y desarrollo organizacional. Irarrazaval 5225, oficina 1. Tel: +56 9 9884 3486",
		keywords: "contacto Crecimiento, cotización coaching, programas empresariales Chile",
	},
}

// Plus Metadata
export const plusSEO: Record<string, SEOMetadata> = {
	"/plus": {
		title: "CAEMP Plus - Venta de Equipos de Protección Personal (EPP)",
		description:
			"Comercialización de equipos de protección personal y colectiva de última generación. Asesoría técnica especializada en seguridad laboral.",
		keywords:
			"EPP, equipos protección personal, seguridad laboral, venta EPP Chile, asesoría técnica",
		ogImage: "/images/plus/og-image.jpg",
	},
	"/plus/nosotros": {
		title: "Nosotros | CAEMP Plus - Expertos en EPP",
		description:
			"CAEMP Plus, especialistas en equipos de protección personal con asesoría técnica para garantizar seguridad en entornos laborales.",
		keywords: "CAEMP Plus, venta EPP, equipos seguridad Chile",
	},
	"/plus/productos": {
		title: "Productos | CAEMP Plus - Catálogo de EPP",
		description:
			"Amplio catálogo de equipos de protección personal: cascos, guantes, arneses, respiradores y más. Marcas de calidad internacional.",
		keywords: "catálogo EPP, productos seguridad, equipos protección, comprar EPP",
	},
	"/plus/contacto": {
		title: "Contacto | CAEMP Plus - Cotiza tus EPP",
		description:
			"Solicita cotización de equipos de protección personal. Irarrazaval 5225, oficina 1. Tel: +56 2 2667 6455",
		keywords: "cotización EPP, contacto CAEMP Plus, venta equipos seguridad",
	},
}

export function getSEOMetadata(pathname: string): SEOMetadata {
	// Check OTEC routes
	if (pathname.startsWith("/otec")) {
		return otecSEO[pathname] || { ...defaultSEO, title: "CAEMP OTEC" }
	}

	// Check Crecimiento routes
	if (pathname.startsWith("/crecimiento")) {
		return crecimientoSEO[pathname] || { ...defaultSEO, title: "Crecimiento" }
	}

	// Check Plus routes
	if (pathname.startsWith("/plus")) {
		return plusSEO[pathname] || { ...defaultSEO, title: "CAEMP Plus" }
	}

	// Default Grupo CAEMP
	return defaultSEO
}

// Helper to get domain and clean path
export function getTenantContext(pathname: string) {
	if (pathname.startsWith("/crecimiento")) {
		return {
			domain: `https://${DOMAINS.growth}`,
			cleanPath: pathname.replace("/crecimiento", "") || "/",
		}
	}
	if (pathname.startsWith("/plus")) {
		return {
			domain: `https://${DOMAINS.plus}`,
			cleanPath: pathname.replace("/plus", "") || "/",
		}
	}
	if (pathname.startsWith("/otec")) {
		return {
			domain: `https://${DOMAINS.otec}`,
			cleanPath: pathname.replace("/otec", "") || "/",
		}
	}
	return {
		domain: `https://${DOMAINS.group}`,
		cleanPath: pathname,
	}
}

export function generateMetaTags(metadata: SEOMetadata, pathname: string) {
	const { domain, cleanPath } = getTenantContext(pathname)
	// If metadata.canonical is set, use it. Otherwise construct it.
	// We use the tenant domain and the clean path (without prefix)
	const canonical = metadata.canonical || `${domain}${cleanPath === "/" ? "" : cleanPath}`

	return [
		// Basic meta tags
		{ charSet: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ title: metadata.title },
		{ name: "description", content: metadata.description },
		...(metadata.keywords ? [{ name: "keywords", content: metadata.keywords }] : []),

		// Open Graph
		{ property: "og:title", content: metadata.title },
		{ property: "og:description", content: metadata.description },
		{ property: "og:type", content: metadata.ogType || "website" },
		{ property: "og:url", content: canonical },
		{ property: "og:site_name", content: "Grupo CAEMP" },
		{ property: "og:locale", content: "es_CL" },
		...(metadata.ogImage
			? [
					{ property: "og:image", content: `${domain}${metadata.ogImage}` },
					{ property: "og:image:width", content: "1200" },
					{ property: "og:image:height", content: "630" },
				]
			: []),

		// Twitter Card
		{ name: "twitter:card", content: metadata.twitterCard || "summary_large_image" },
		{ name: "twitter:title", content: metadata.title },
		{ name: "twitter:description", content: metadata.description },
		...(metadata.ogImage
			? [{ name: "twitter:image", content: `${domain}${metadata.ogImage}` }]
			: []),

		// Additional SEO
		{ name: "robots", content: metadata.noindex ? "noindex, nofollow" : "index, follow" },
		{ name: "googlebot", content: metadata.noindex ? "noindex, nofollow" : "index, follow" },
		{ name: "author", content: "Grupo CAEMP" },
		{ name: "language", content: "Spanish" },
		{ name: "geo.region", content: "CL" },
		{ name: "geo.placename", content: "Santiago" },
	]
}

export function generateLinkTags(pathname: string, metadata: SEOMetadata) {
	const { domain, cleanPath } = getTenantContext(pathname)
	const canonical = metadata.canonical || `${domain}${cleanPath === "/" ? "" : cleanPath}`

	return [
		{ rel: "canonical", href: canonical },
		{ rel: "icon", href: "/favicon.ico" },
		{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
	]
}
