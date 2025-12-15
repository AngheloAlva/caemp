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
					value: "venta@caemp.cl",
					href: "mailto:venta@caemp.cl",
				},
				{
					icon: PhoneIcon,
					value: "+56 2 2667 6455",
					href: "tel:+56226676455",
				},
				{
					icon: MapPinIcon,
					value: "Blas Vial 8727, La Cisterna, Santiago",
					href: "https://www.google.com/maps/place/Blas+Vial+8727,+7980705+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.537005,-70.655468,15z",
				},
			]}
		/>
	)
}
