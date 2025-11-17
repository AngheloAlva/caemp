import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/crecimiento/galeria")({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/crecimiento/galeria"!</div>
}
