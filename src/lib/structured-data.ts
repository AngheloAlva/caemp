import { SITE_URL } from "./seo"

export interface Organization {
	"@context": string
	"@type": string
	"name": string
	"url": string
	"logo": string
	"description": string
	"contactPoint": ContactPoint[]
	"address": PostalAddress
	"sameAs": string[]
}

export interface LocalBusiness extends Organization {
	"@type": "LocalBusiness" | "EducationalOrganization"
	"priceRange"?: string
	"telephone"?: string
	"email"?: string
	"openingHours"?: string[]
	"areaServed"?: string
}

interface ContactPoint {
	"@type": "ContactPoint"
	"telephone": string
	"contactType": string
	"availableLanguage": string
	"areaServed": string
}

interface PostalAddress {
	"@type": "PostalAddress"
	"streetAddress": string
	"addressLocality": string
	"addressRegion": string
	"addressCountry": string
}

// Grupo CAEMP Organization
export const grupoCAEMPStructuredData: Organization = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Grupo CAEMP",
	"url": SITE_URL,
	"logo": `${SITE_URL}/images/logo/logo-o-black.png`,
	"description":
		"Grupo empresarial chileno especializado en capacitación laboral, seguridad industrial y desarrollo de talento humano.",
	"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "+56-2-2667-6455",
			"contactType": "customer service",
			"availableLanguage": "Spanish",
			"areaServed": "CL",
		},
	],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Irarrazaval 5225, oficina 1",
		"addressLocality": "Santiago",
		"addressRegion": "Región Metropolitana",
		"addressCountry": "CL",
	},
	"sameAs": [
		// Agregar URLs de redes sociales reales aquí
		"https://www.facebook.com/grupocaemp",
		"https://www.linkedin.com/company/grupocaemp",
		"https://www.instagram.com/grupocaemp",
	],
}

// CAEMP OTEC - Educational Organization
export const otecStructuredData: LocalBusiness = {
	"@context": "https://schema.org",
	"@type": "EducationalOrganization",
	"name": "CAEMP OTEC",
	"url": `${SITE_URL}/otec`,
	"logo": `${SITE_URL}/images/logo/logo-o-black.png`,
	"description":
		"Organismo Técnico de Capacitación especializado en prevención de riesgos, seguridad laboral y entrenamiento ante emergencias. Cursos certificados SENCE.",
	"telephone": "+56-2-2667-6455",
	"email": "grupo@caemp.cl",
	"priceRange": "$$",
	"areaServed": "Chile",
	"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "+56-2-2667-6455",
			"contactType": "sales",
			"availableLanguage": "Spanish",
			"areaServed": "CL",
		},
	],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Irarrazaval 5225, oficina 1",
		"addressLocality": "Santiago",
		"addressRegion": "Región Metropolitana",
		"addressCountry": "CL",
	},
	"sameAs": ["https://www.facebook.com/caempotec", "https://www.instagram.com/caempotec"],
	"openingHours": ["Mo-Fr 09:00-18:00"],
}

// Crecimiento - Training & Coaching
export const crecimientoStructuredData: LocalBusiness = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "Crecimiento",
	"url": `${SITE_URL}/crecimiento`,
	"logo": `${SITE_URL}/images/logo/logo-c-black.png`,
	"description":
		"Especialistas en desarrollo de habilidades blandas, coaching empresarial, team building y teatro aplicado. Transformamos equipos y potenciamos liderazgo.",
	"telephone": "+56-9-9884-3486",
	"email": "grupo@caemp.cl",
	"priceRange": "$$",
	"areaServed": "Chile",
	"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "+56-9-9884-3486",
			"contactType": "customer support",
			"availableLanguage": "Spanish",
			"areaServed": "CL",
		},
	],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Irarrazaval 5225, oficina 1",
		"addressLocality": "Santiago",
		"addressRegion": "Región Metropolitana",
		"addressCountry": "CL",
	},
	"sameAs": ["https://www.instagram.com/crecimientocaemp"],
	"openingHours": ["Mo-Fr 09:00-18:00"],
}

// CAEMP Plus - Store
export const plusStructuredData: LocalBusiness = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "CAEMP Plus",
	"url": `${SITE_URL}/plus`,
	"logo": `${SITE_URL}/images/logo/logo-p-black.png`,
	"description":
		"Comercialización de equipos de protección personal (EPP) y colectiva de última generación. Asesoría técnica especializada en seguridad laboral.",
	"telephone": "+56-2-2667-6455",
	"email": "grupo@caemp.cl",
	"priceRange": "$$",
	"areaServed": "Chile",
	"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "+56-2-2667-6455",
			"contactType": "sales",
			"availableLanguage": "Spanish",
			"areaServed": "CL",
		},
	],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Irarrazaval 5225, oficina 1",
		"addressLocality": "Santiago",
		"addressRegion": "Región Metropolitana",
		"addressCountry": "CL",
	},
	"sameAs": ["https://www.instagram.com/caemplus"],
	"openingHours": ["Mo-Fr 09:00-18:00"],
}

export function getStructuredData(pathname: string): Organization | LocalBusiness {
	if (pathname.startsWith("/otec")) return otecStructuredData
	if (pathname.startsWith("/crecimiento")) return crecimientoStructuredData
	if (pathname.startsWith("/plus")) return plusStructuredData
	return grupoCAEMPStructuredData
}

export function generateStructuredDataScript(data: Organization | LocalBusiness) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data),
	}
}
