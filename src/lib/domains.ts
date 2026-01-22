export const DOMAINS = {
	// Production domains
	growth: "crecimiento.cl",
	plus: "caempplus.cl",
	otec: "caemp.cl",
	group: "grupocaemp.cl",

	// Localhost aliases (for testing with host editing if needed, or logical mapping)
	localhost: "localhost:3000",
}

export type DomainType = "growth" | "plus" | "otec" | "group"

/**
 * Checks if hostname matches a domain (exact match or with www. prefix)
 * This avoids false positives like "grupocaemp.cl".includes("caemp.cl") = true
 */
function matchesDomain(hostname: string, domain: string): boolean {
	// Remove port if present (for localhost testing)
	const hostWithoutPort = hostname.split(":")[0]

	// Exact match or www. prefix
	return hostWithoutPort === domain || hostWithoutPort === `www.${domain}`
}

export function getTenantFromHost(host: string): DomainType {
	if (matchesDomain(host, DOMAINS.growth)) return "growth"
	if (matchesDomain(host, DOMAINS.plus)) return "plus"
	if (matchesDomain(host, DOMAINS.otec)) return "otec"
	// grupocaemp.cl or any other domain defaults to group
	return "group"
}

export function getPathPrefix(tenant: DomainType): string {
	switch (tenant) {
		case "growth":
			return "/crecimiento"
		case "plus":
			return "/plus"
		case "otec":
			return "/otec"
		case "group":
		default:
			return ""
	}
}
