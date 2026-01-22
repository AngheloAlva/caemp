import { createMiddleware } from "@tanstack/react-start"
import { getPathPrefix, getTenantFromHost } from "../lib/domains"

export type Tenant = {
	id: string
	name: string
}

export const tenantMiddleware = createMiddleware().server(async ({ next, request }) => {
	const host = request.headers.get("host") || ""
	const tenantId = getTenantFromHost(host)
	const prefix = getPathPrefix(tenantId)

	// In this simplified version, we map the "tenantId" (growth, plus, etc.) directly to a Tenant object.
	// In a real DB scenario, you'd query the DB here.
	const tenant: Tenant = {
		id: tenantId,
		name:
			tenantId === "group" ? "Grupo CAEMP" : tenantId.charAt(0).toUpperCase() + tenantId.slice(1),
	}

	return next({
		context: {
			tenant,
			prefix,
		},
	})
})
