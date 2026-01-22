import { createStart } from "@tanstack/react-start"
import { tenantMiddleware } from "./middleware/tenant"
import { getRouter } from "./router"

export const startInstance = createStart(() => ({
	app: getRouter,
	requestMiddleware: [tenantMiddleware],
}))
