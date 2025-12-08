import { createFileRoute } from "@tanstack/react-router"

import { BusinessLineContact } from "@/components/shared/business-line-contact"

export const Route = createFileRoute("/plus/contacto")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<BusinessLineContact
			title="Contacto Plus"
			description="Tu socio en equipamiento y seguridad industrial. Escríbenos para cotizar equipos de protección personal y asesoría técnica."
			variant="green"
		/>
	)
}
