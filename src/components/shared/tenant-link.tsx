import { Link } from "@tanstack/react-router"
import { DOMAINS, getTenantFromHost, type DomainType } from "@/lib/domains"

type TenantLinkProps = {
	/** The internal path (e.g., "/plus", "/plus/productos", "/crecimiento/cursos") */
	to: string
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

/**
 * Gets the tenant from a path (e.g., "/plus/productos" → "plus")
 */
function getTenantFromPath(path: string): DomainType | null {
	if (path.startsWith("/crecimiento")) return "growth"
	if (path.startsWith("/plus")) return "plus"
	if (path.startsWith("/otec")) return "otec"
	if (path === "/") return "group"
	return null
}

/**
 * Gets the domain for a tenant
 */
function getDomainForTenant(tenant: DomainType): string {
	switch (tenant) {
		case "growth":
			return DOMAINS.growth
		case "plus":
			return DOMAINS.plus
		case "otec":
			return DOMAINS.otec
		case "group":
		default:
			return DOMAINS.group
	}
}

/**
 * Removes the tenant prefix from a path
 * e.g., "/plus/productos" → "/productos", "/plus" → "/"
 */
function removePrefix(path: string, tenant: DomainType): string {
	const prefixes: Record<DomainType, string> = {
		growth: "/crecimiento",
		plus: "/plus",
		otec: "/otec",
		group: "",
	}

	const prefix = prefixes[tenant]
	if (!prefix) return path

	if (path === prefix) return "/"
	if (path.startsWith(`${prefix}/`)) return path.slice(prefix.length)
	return path
}

/**
 * Smart link component that handles cross-domain navigation.
 *
 * - If linking within the same tenant (e.g., from /plus to /plus/productos),
 *   uses TanStack Router's <Link> for SPA navigation.
 * - If linking to a different tenant (e.g., from /plus to /crecimiento),
 *   uses a regular <a> tag with the full domain URL.
 *
 * @example
 * // From grupocaemp.cl (group tenant):
 * <TenantLink to="/plus">Plus</TenantLink>
 * // Renders: <a href="https://caempplus.cl/">Plus</a>
 *
 * @example
 * // From caempplus.cl (plus tenant):
 * <TenantLink to="/plus/productos">Productos</TenantLink>
 * // Renders: <Link to="/plus/productos">Productos</Link> (SPA nav, rewrite handles URL)
 */
export function TenantLink({ to, children, className, onClick }: TenantLinkProps) {
	const currentTenant =
		typeof window !== "undefined" ? getTenantFromHost(window.location.hostname) : "group"

	const targetTenant = getTenantFromPath(to)

	if (!targetTenant) {
		return (
			<Link to={to} className={className} onClick={onClick}>
				{children}
			</Link>
		)
	}

	if (currentTenant === targetTenant) {
		return (
			<Link to={to} className={className} onClick={onClick}>
				{children}
			</Link>
		)
	}

	const domain = getDomainForTenant(targetTenant)
	const pathWithoutPrefix = removePrefix(to, targetTenant)
	const fullUrl = `https://${domain}${pathWithoutPrefix}`

	return (
		<a href={fullUrl} className={className} onClick={onClick}>
			{children}
		</a>
	)
}
