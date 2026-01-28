import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
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
			contactInfo={[
				{
					icon: MailIcon,
					value: "grupo@caemp.cl",
					href: "mailto:grupo@caemp.cl",
				},
				{
					icon: PhoneIcon,
					value: "+56 2 2667 6455",
					href: "tel:+56226676455",
				},
				{
					icon: MapPinIcon,
					value: "Blas Vial 8727, La Cisterna, Santiago",
					href: "https://www.google.com/maps/search/?api=1&query=Blas+Vial+8727,+La+Cisterna,+Santiago",
				},
			]}
		/>
	)
}
