import { createStart } from "@tanstack/react-start"
import { tenantMiddleware } from "./middleware/tenant"

export const startInstance = createStart(() => ({
	requestMiddleware: [tenantMiddleware],
}))
