import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/plus")({
	component: LayoutComponent,
})

function LayoutComponent() {
	return <Outlet />
}
