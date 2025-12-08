import { createFileRoute } from "@tanstack/react-router"

import { BusinessLineContact } from "@/components/shared/business-line-contact"

export const Route = createFileRoute("/otec/contacto")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<BusinessLineContact
			title="Contacto OTEC"
			description="¿Necesitas capacitación especializada? Contáctanos para conocer nuestros cursos y certificaciones en seguridad y operaciones industriales."
			variant="default"
		/>
	)
}
