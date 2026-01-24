import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Heading,
	Text,
	Section,
	Button,
	Tailwind,
} from "@react-email/components"
import tailwindConfig from "./tailwind.config"

interface QuoteEmailProps {
	fullName: string
	email: string
	phone: string
	role: string
	companyName: string
	participantsNumber: number
	items: string[]
	preferDate?: string
	message?: string
	businessLine: "otec" | "crecimiento" | "plus" | "grupo"
	itemType?: string
}

const businessLineNames = {
	otec: "OTEC",
	crecimiento: "Crecimiento",
	plus: "Plus",
	grupo: "Grupo CAEMP",
}

const businessLineColors = {
	otec: "brand-otec",
	crecimiento: "brand-crecimiento",
	plus: "brand-plus",
	grupo: "brand-grupo",
}

const getItemTypeLabel = (businessLine: string, itemType?: string) => {
	if (businessLine === "otec") return "Cursos"
	if (businessLine === "plus") return "Productos"
	if (businessLine === "crecimiento") {
		switch (itemType) {
			case "cursos":
				return "Cursos"
			case "talleres":
				return "Talleres"
			case "teatro":
				return "Teatro Aplicado"
			case "programas":
				return "Programas de Capacitación"
			default:
				return "Servicios"
		}
	}
	return "Items"
}

export default function QuoteEmail({
	fullName,
	email,
	phone,
	role,
	companyName,
	participantsNumber,
	items,
	preferDate,
	message,
	businessLine,
	itemType,
}: QuoteEmailProps) {
	const lineName = businessLineNames[businessLine]
	const brandColor = businessLineColors[businessLine]
	const itemLabel = getItemTypeLabel(businessLine, itemType)

	return (
		<Html lang="es">
			<Tailwind config={tailwindConfig}>
				<Head />
				<Preview>Nueva solicitud de cotización - {lineName}</Preview>
				<Body className="bg-gray-50 font-sans">
					<Container className="mx-auto my-10 max-w-xl rounded-lg bg-white px-0 shadow-lg">
						{/* Header */}
						<Section className={`bg-${brandColor} rounded-t-lg px-8 py-10 text-center`}>
							<Heading className="m-0 text-3xl font-bold text-white">
								💼 Nueva Solicitud de Cotización
							</Heading>
							<Text className="mt-2 text-base text-white/90">{lineName}</Text>
						</Section>

						{/* Content */}
						<Section className="px-8 py-8">
							<Text className="mb-6 text-base leading-relaxed text-gray-600">
								Se ha recibido una nueva solicitud de cotización. A continuación encontrarás todos
								los detalles.
							</Text>

							{/* Personal Info Card */}
							<Section
								className={`mb-5 rounded-lg border border-${brandColor}/20 bg-${brandColor}/5 px-6 py-6`}
							>
								<Heading className="mt-0 mb-5 text-lg font-semibold text-gray-900">
									📋 Información Personal
								</Heading>

								<table className="w-full">
									<tbody>
										<tr>
											<td className="w-2/5 py-2 pr-4 text-sm font-medium text-gray-600">Nombre:</td>
											<td className="py-2 text-sm font-semibold text-gray-900">{fullName}</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">Email:</td>
											<td className="py-2">
												<a
													href={`mailto:${email}`}
													className={`text-sm font-semibold text-${brandColor} no-underline`}
												>
													{email}
												</a>
											</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">Teléfono:</td>
											<td className="py-2">
												<a
													href={`tel:${phone}`}
													className={`text-sm font-semibold text-${brandColor} no-underline`}
												>
													{phone}
												</a>
											</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">Cargo:</td>
											<td className="py-2 text-sm font-semibold text-gray-900">{role}</td>
										</tr>
									</tbody>
								</table>
							</Section>

							{/* Company Info Card */}
							<Section
								className={`mb-5 rounded-lg border border-${brandColor}/20 bg-${brandColor}/5 px-6 py-6`}
							>
								<Heading className="mt-0 mb-5 text-lg font-semibold text-gray-900">
									🏢 Información de la Empresa
								</Heading>

								<table className="w-full">
									<tbody>
										<tr>
											<td className="w-2/5 py-2 pr-4 text-sm font-medium text-gray-600">
												Empresa:
											</td>
											<td className="py-2 text-sm font-semibold text-gray-900">
												{companyName || "No especificada"}
											</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">
												N° Participantes:
											</td>
											<td className="py-2 text-sm font-semibold text-gray-900">
												{participantsNumber}
											</td>
										</tr>
									</tbody>
								</table>
							</Section>

							{/* Items Card */}
							<Section className="mb-5 rounded-lg border border-solid border-gray-200 px-6 py-6">
								<Heading className="mt-0 mb-4 text-lg font-semibold text-gray-900">
									📚 {itemLabel} Solicitados
								</Heading>
								<ul className="m-0 pl-6 text-base leading-relaxed text-gray-700">
									{items.map((item, index) => (
										<li key={index} className="my-2">
											{item}
										</li>
									))}
								</ul>
							</Section>

							{/* Preferred Date Card (Optional) */}
							{preferDate && (
								<Section
									className={`mb-5 rounded-lg border border-${brandColor}/20 bg-${brandColor}/5 px-6 py-4`}
								>
									<Text className="m-0 mb-1 text-xs font-medium text-gray-600 uppercase">
										📅 FECHA PREFERIDA
									</Text>
									<Text className="m-0 text-base font-semibold text-gray-900">
										{new Date(preferDate).toLocaleDateString("es-CL", {
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</Text>
								</Section>
							)}

							{/* Message Card (Optional) */}
							{message && (
								<Section className="mb-5 rounded-lg border border-solid border-gray-200 px-6 py-6">
									<Heading className="mt-0 mb-4 text-lg font-semibold text-gray-900">
										💬 Mensaje Adicional
									</Heading>
									<Text className="m-0 text-base leading-relaxed whitespace-pre-wrap text-gray-700">
										{message}
									</Text>
								</Section>
							)}

							{/* Action Button */}
							<Section className="mt-8 text-center">
								<Button
									href={`mailto:${email}?subject=Re: Solicitud de Cotización - ${lineName}`}
									className={`bg-${brandColor} inline-block rounded-lg px-8 py-4 text-base font-semibold text-white no-underline`}
								>
									Responder al Cliente
								</Button>
							</Section>
						</Section>

						{/* Footer */}
						<Section className="rounded-b-lg border-t border-solid border-gray-200 bg-gray-50 px-8 py-8 text-center">
							<Text className="mb-2 text-sm text-gray-600">
								Este correo fue enviado automáticamente desde el formulario de cotización
							</Text>
							<Text className="m-0 text-xs text-gray-500">
								CAEMP © {new Date().getFullYear()} - {lineName}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}

QuoteEmail.PreviewProps = {
	fullName: "María González",
	email: "maria.gonzalez@empresa.cl",
	phone: "+56 9 8765 4321",
	role: "Gerente de RRHH",
	companyName: "Empresa Ejemplo SPA",
	participantsNumber: 15,
	items: [
		"Curso de Seguridad en Altura",
		"Curso de Primeros Auxilios",
		"Curso de Prevención de Riesgos",
	],
	preferDate: new Date(2024, 2, 15).toISOString(),
	message: "Necesitamos realizar estos cursos durante el mes de marzo para todo el equipo.",
	businessLine: "otec",
} satisfies QuoteEmailProps

export { QuoteEmail }
