import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { type DomainType, getTenantFromHost } from "./lib/domains"

/**
 * Maps domain to its internal route prefix
 * Returns null for "group" tenant (no rewrite needed)
 */
function getDomainConfig(hostname: string): { tenant: DomainType; prefix: string } | null {
	const tenant = getTenantFromHost(hostname)

	switch (tenant) {
		case "growth":
			return { tenant, prefix: "/crecimiento" }
		case "otec":
			return { tenant, prefix: "/otec" }
		case "plus":
			return { tenant, prefix: "/plus" }
		case "group":
		default:
			return null // No rewrite for group domain
	}
}

// Create a new router instance
export const getRouter = () => {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		rewrite: {
			// INPUT: External URL → Internal route
			// caempplus.cl/productos → matches /plus/productos internally
			input: ({ url }) => {
				const config = getDomainConfig(url.hostname)

				console.log("[REWRITE INPUT]", {
					hostname: url.hostname,
					pathname: url.pathname,
					config,
					href: url.href,
				})

				// No tenant domain (group or localhost) - no rewrite needed
				if (!config) return url

				const { prefix } = config
				const { pathname } = url

				// Already has prefix (shouldn't happen, but safety check)
				if (pathname.startsWith(prefix)) return url

				// Add prefix: / → /plus, /productos → /plus/productos
				const newPathname = pathname === "/" ? prefix : `${prefix}${pathname}`

				console.log("[REWRITE INPUT] Rewriting to:", newPathname)

				return { ...url, pathname: newPathname }
			},

			// OUTPUT: Internal route → External URL for links/navigation
			// /plus/productos → /productos (when on caempplus.cl)
			output: ({ url }) => {
				const config = getDomainConfig(url.hostname)

				console.log("[REWRITE OUTPUT]", {
					hostname: url.hostname,
					pathname: url.pathname,
					config,
				})

				// No tenant domain - no rewrite needed
				if (!config) return url

				const { prefix } = config
				const { pathname } = url

				// Remove prefix: /plus → /, /plus/productos → /productos
				if (pathname === prefix) {
					return { ...url, pathname: "/" }
				}

				if (pathname.startsWith(`${prefix}/`)) {
					return { ...url, pathname: pathname.slice(prefix.length) }
				}

				return url
			},
		},
		context: {
			tenant: {
				id: "group",
				name: "Grupo CAEMP",
			},
			prefix: "",
		},
	})

	return router
}
