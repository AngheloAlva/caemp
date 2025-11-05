import { createFileRoute, Outlet } from "@tanstack/react-router"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

export const Route = createFileRoute("/crecimiento")({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
