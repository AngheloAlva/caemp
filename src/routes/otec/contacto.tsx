import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
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
					value: "Irarrazaval 5225, oficina 1",
					href: "https://www.google.com/maps/search/?api=1&query=Irarrazaval+5225",
				},
			]}
		/>
	)
}
