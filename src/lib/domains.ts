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

export function getTenantFromHost(host: string): DomainType {
	if (host.includes(DOMAINS.growth)) return "growth"
	if (host.includes(DOMAINS.plus)) return "plus"
	if (host.includes(DOMAINS.otec)) return "otec"
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
