import { createFileRoute } from "@tanstack/react-router"

import { BusinessLineContact } from "@/components/shared/business-line-contact"

export const Route = createFileRoute("/crecimiento/contacto")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<BusinessLineContact
			title="Contacto Crecimiento"
			description="Transformamos equipos y personas. Contáctanos para programas de coaching, liderazgo y desarrollo organizacional."
			variant="purple"
		/>
	)
}
