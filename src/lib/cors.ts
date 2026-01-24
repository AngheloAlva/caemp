/**
 * CORS Configuration for CAEMP Multitenant Setup
 *
 * CAEMP operates across 4 domains:
 * - grupocaemp.cl (main - hosts API)
 * - otec.grupocaemp.cl
 * - crecimiento.grupocaemp.cl
 * - plus.grupocaemp.cl
 *
 * All API routes are on the main domain, so subdomains need CORS access.
 */

/**
 * Allowed origins for CORS
 * Update these with your actual production domains
 */
const ALLOWED_ORIGINS =
	process.env.NODE_ENV === "production"
		? [
				"https://grupocaemp.cl",
				"https://www.grupocaemp.cl",
				"https://caemp.cl",
				"https://www.caemp.cl",
				"https://crecimiento.cl",
				"https://www.crecimiento.cl",
				"https://caempplus.cl",
				"https://www.caempplus.cl",
			]
		: ["http://localhost:3000"]

/**
 * Creates CORS headers for a response
 *
 * @param request - Incoming request
 * @returns CORS headers object
 */
export function getCorsHeaders(request: Request): Record<string, string> {
	const origin = request.headers.get("origin")

	// Check if origin is allowed
	const isAllowed = origin && ALLOWED_ORIGINS.includes(origin)

	return {
		"Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Max-Age": "86400", // 24 hours
	}
}

/**
 * Handles OPTIONS preflight request
 *
 * @param request - Incoming OPTIONS request
 * @returns Response with CORS headers
 */
export function handleCorsPreFlight(request: Request): Response {
	return new Response(null, {
		status: 204,
		headers: getCorsHeaders(request),
	})
}

/**
 * Adds CORS headers to an existing response
 *
 * @param response - Original response
 * @param request - Incoming request
 * @returns Response with CORS headers added
 */
export function addCorsHeaders(response: Response, request: Request): Response {
	const corsHeaders = getCorsHeaders(request)
	const headers = new Headers(response.headers)

	Object.entries(corsHeaders).forEach(([key, value]) => {
		headers.set(key, value)
	})

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	})
}
