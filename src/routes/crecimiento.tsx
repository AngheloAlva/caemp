import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/crecimiento")({
	component: LayoutComponent,
})

function LayoutComponent() {
	return <Outlet />
}
