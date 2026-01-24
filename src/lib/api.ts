/**
 * API Helper for multitenant architecture
 *
 * CAEMP uses 4 domains but all API routes are served from the main domain (grupocaemp.cl)
 * This helper ensures all API calls go to the correct domain regardless of which subdomain
 * the user is on.
 */

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL || "https://grupocaemp.cl"

/**
 * Constructs full API URL for multitenant setup
 *
 * @param path - API path (e.g., "/api/contact")
 * @returns Full URL to API endpoint
 *
 * @example
 * getApiUrl("/api/contact")
 * // Development: "http://localhost:3000/api/contact"
 * // Production: "https://grupocaemp.cl/api/contact"
 */
export function getApiUrl(path: string): string {
	// Remove leading slash if present to avoid double slashes
	const cleanPath = path.startsWith("/") ? path.slice(1) : path

	return `${BASE_URL}/${cleanPath}`
}

/**
 * Makes a POST request to the API with proper error handling
 *
 * @param path - API path
 * @param body - Request body (will be JSON stringified)
 * @returns Response data or throws error
 */
export async function postApi<TData = unknown, TResponse = unknown>(
	path: string,
	body: TData
): Promise<TResponse> {
	const url = getApiUrl(path)

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		// Include credentials for cross-origin requests
		credentials: "include",
	})

	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.error || "Error en la solicitud")
	}

	return data
}
