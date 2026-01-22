import { useRouterState } from "@tanstack/react-router"
import { useEffect } from "react"

import { getSEOMetadata, getTenantContext } from "@/lib/seo"
import { getStructuredData } from "@/lib/structured-data"

export function SEOHead() {
	const routerState = useRouterState()
	const pathname = routerState.location.pathname

	useEffect(() => {
		const seo = getSEOMetadata(pathname)
		const { domain, cleanPath } = getTenantContext(pathname)

		// Canonical uses the tenant's domain with the clean path (without prefix)
		const canonical = `${domain}${cleanPath === "/" ? "" : cleanPath}`

		// Update title
		document.title = seo.title

		// Update or create meta tags
		updateMetaTag("description", seo.description)
		if (seo.keywords) {
			updateMetaTag("keywords", seo.keywords)
		}

		// Open Graph
		updateMetaTag("og:title", seo.title, "property")
		updateMetaTag("og:description", seo.description, "property")
		updateMetaTag("og:type", seo.ogType || "website", "property")
		updateMetaTag("og:url", canonical, "property")
		updateMetaTag("og:site_name", "Grupo CAEMP", "property")
		updateMetaTag("og:locale", "es_CL", "property")

		if (seo.ogImage) {
			updateMetaTag("og:image", `${domain}${seo.ogImage}`, "property")
			updateMetaTag("og:image:width", "1200", "property")
			updateMetaTag("og:image:height", "630", "property")
		}

		// Twitter Card
		updateMetaTag("twitter:card", seo.twitterCard || "summary_large_image")
		updateMetaTag("twitter:title", seo.title)
		updateMetaTag("twitter:description", seo.description)
		if (seo.ogImage) {
			updateMetaTag("twitter:image", `${domain}${seo.ogImage}`)
		}

		// Robots
		updateMetaTag("robots", seo.noindex ? "noindex, nofollow" : "index, follow")

		// Canonical URL
		updateOrCreateLink("canonical", canonical)

		// Structured Data
		updateStructuredData(getStructuredData(pathname))
	}, [pathname])

	return null
}

function updateMetaTag(name: string, content: string, attribute: "name" | "property" = "name") {
	let element = document.querySelector(`meta[${attribute}="${name}"]`)

	if (!element) {
		element = document.createElement("meta")
		element.setAttribute(attribute, name)
		document.head.appendChild(element)
	}

	element.setAttribute("content", content)
}

function updateOrCreateLink(rel: string, href: string) {
	let element = document.querySelector(`link[rel="${rel}"]`)

	if (!element) {
		element = document.createElement("link")
		element.setAttribute("rel", rel)
		document.head.appendChild(element)
	}

	element.setAttribute("href", href)
}

function updateStructuredData(data: any) {
	const scriptId = "structured-data"
	let script = document.getElementById(scriptId) as HTMLScriptElement

	if (!script) {
		script = document.createElement("script")
		script.id = scriptId
		script.type = "application/ld+json"
		document.head.appendChild(script)
	}

	script.textContent = JSON.stringify(data)
}
