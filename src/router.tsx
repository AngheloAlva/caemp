import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { DOMAINS } from "./lib/domains"

// Create a new router instance
export const getRouter = () => {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		rewrite: {
			input: ({ url }) => {
				const { pathname, hostname } = url

				// Crecimiento
				if (hostname.includes(DOMAINS.growth)) {
					if (pathname.startsWith("/crecimiento")) return url
					return {
						...url,
						pathname: `/crecimiento${pathname === "/" ? "" : pathname}`,
					}
				}

				// OTEC
				if (hostname.includes(DOMAINS.otec)) {
					if (pathname.startsWith("/otec")) return url
					return {
						...url,
						pathname: `/otec${pathname === "/" ? "" : pathname}`,
					}
				}

				// Plus
				if (hostname.includes(DOMAINS.plus)) {
					if (pathname.startsWith("/plus")) return url
					return {
						...url,
						pathname: `/plus${pathname === "/" ? "" : pathname}`,
					}
				}

				// Default (Group or Localhost)
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
