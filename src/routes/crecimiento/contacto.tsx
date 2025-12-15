import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
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
			contactInfo={[
				{
					icon: MailIcon,
					value: "contacto@crecimiento.cl",
					href: "mailto:contacto@crecimiento.cl",
				},
				{
					icon: PhoneIcon,
					value: "+56 9 9884 3486",
					href: "tel:+56998843486",
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
