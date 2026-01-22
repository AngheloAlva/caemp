import { getPathPrefix, getTenantFromHost } from "./src/lib/domains"

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - assets (standard static folder)
		 */
		"/((?!api|_nitro|assets|favicon.ico|.*\\..*).*)",
	],
}

export default function middleware(request: Request) {
	const url = new URL(request.url)
	const host = request.headers.get("host") || ""

	// 1. Identify Tenant
	const tenant = getTenantFromHost(host)
	const prefix = getPathPrefix(tenant)

	// Case A: We are on a specific Tenant Domain (e.g. crecimiento.cl)
	// We need to rewrite the URL to include the folder prefix internally
	if (prefix) {
		const newUrl = new URL(url)
		// Only append prefix if not already present (to avoid double prefixing if something else did it)
		if (!url.pathname.startsWith(prefix)) {
			newUrl.pathname = `${prefix}${url.pathname}`
			// Ensure trailing slash for root to match index routes
			if (newUrl.pathname === prefix) {
				newUrl.pathname = `${prefix}/`
			}
			// @ts-expect-error - Response.rewrite exists in Vercel Edge Runtime
			return Response.rewrite(newUrl)
		}
	}

	// default: pass through
	// @ts-expect-error - Response.next exists in Vercel Edge Runtime
	return Response.next()
}
