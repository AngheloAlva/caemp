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
					value: "grupocaemp@caemp.cl",
					href: "mailto:grupocaemp@caemp.cl",
				},
				{
					icon: PhoneIcon,
					value: "+56 9 9884 3486",
					href: "tel:+56998843486",
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
