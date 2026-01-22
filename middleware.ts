import { DOMAINS, getPathPrefix, getTenantFromHost } from "./src/lib/domains"

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
		newUrl.pathname = `${prefix}${url.pathname}`
		// @ts-expect-error - Response.rewrite exists in Vercel Edge Runtime
		return Response.rewrite(newUrl)
	}

	// Case B: We are on the Main Group Domain (grupocaemp.cl)
	// If the user tries to access a tenant path explicitly (e.g. /crecimiento),
	// we should REDIRECT them to the correct domain (crecimiento.cl)
	if (tenant === "group") {
		if (url.pathname.startsWith("/crecimiento")) {
			const newUrl = new URL(url)
			newUrl.hostname = DOMAINS.growth
			newUrl.pathname = url.pathname.replace("/crecimiento", "") || "/"
			return Response.redirect(newUrl, 307)
		}
		if (url.pathname.startsWith("/plus")) {
			const newUrl = new URL(url)
			newUrl.hostname = DOMAINS.plus
			newUrl.pathname = url.pathname.replace("/plus", "") || "/"
			return Response.redirect(newUrl, 307)
		}
		if (url.pathname.startsWith("/otec")) {
			const newUrl = new URL(url)
			newUrl.hostname = DOMAINS.otec
			newUrl.pathname = url.pathname.replace("/otec", "") || "/"
			return Response.redirect(newUrl, 307)
		}
	}

	// default: pass through (holding group matched correctly)
	// @ts-expect-error - Response.next exists in Vercel Edge Runtime
	return Response.next()
}
