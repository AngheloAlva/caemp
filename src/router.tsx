import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { DOMAINS, type DomainType } from "./lib/domains"

/**
 * Maps domain to its internal route prefix
 */
function getDomainConfig(hostname: string): { tenant: DomainType; prefix: string } | null {
	if (hostname.includes(DOMAINS.growth)) return { tenant: "growth", prefix: "/crecimiento" }
	if (hostname.includes(DOMAINS.otec)) return { tenant: "otec", prefix: "/otec" }
	if (hostname.includes(DOMAINS.plus)) return { tenant: "plus", prefix: "/plus" }
	return null // group domain or localhost without tenant
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

				// No tenant domain (group or localhost) - no rewrite needed
				if (!config) return url

				const { prefix } = config
				const { pathname } = url

				// Already has prefix (shouldn't happen, but safety check)
				if (pathname.startsWith(prefix)) return url

				// Add prefix: / → /plus, /productos → /plus/productos
				const newPathname = pathname === "/" ? prefix : `${prefix}${pathname}`

				return { ...url, pathname: newPathname }
			},

			// OUTPUT: Internal route → External URL for links/navigation
			// /plus/productos → /productos (when on caempplus.cl)
			output: ({ url }) => {
				const config = getDomainConfig(url.hostname)

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
