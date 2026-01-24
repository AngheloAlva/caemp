import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Heading,
	Text,
	Section,
	Tailwind,
} from "@react-email/components"
import tailwindConfig from "./tailwind.config"

interface ContactEmailProps {
	fullName: string
	email: string
	phone: string
	message: string
	businessLine: "otec" | "crecimiento" | "plus" | "grupo"
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

export default function ContactEmail({
	fullName,
	email,
	phone,
	message,
	businessLine,
}: ContactEmailProps) {
	const lineName = businessLineNames[businessLine]
	const brandColor = businessLineColors[businessLine]

	return (
		<Html lang="es">
			<Tailwind config={tailwindConfig}>
				<Head />
				<Preview>Nuevo mensaje de contacto - {lineName}</Preview>
				<Body className="bg-gray-50 font-sans">
					<Container className="mx-auto my-10 max-w-xl rounded-lg bg-white px-0 shadow-lg">
						{/* Header */}
						<Section className={`bg-${brandColor} rounded-t-lg px-8 py-10 text-center`}>
							<Heading className="m-0 text-3xl font-bold text-white">
								📧 Nuevo Mensaje de Contacto
							</Heading>
							<Text className="mt-2 text-base text-white/90">{lineName}</Text>
						</Section>

						{/* Content */}
						<Section className="px-8 py-8">
							<Text className="mb-6 text-base leading-relaxed text-gray-600">
								Has recibido un nuevo mensaje de contacto desde el sitio web.
							</Text>

							{/* Contact Info Card */}
							<Section
								className={`mb-6 rounded-lg border border-${brandColor}/20 bg-${brandColor}/5 px-6 py-6`}
							>
								<Heading className="mt-0 mb-5 text-lg font-semibold text-gray-900">
									Información de Contacto
								</Heading>

								<table className="w-full">
									<tbody>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">👤 Nombre:</td>
											<td className="py-2 text-right text-sm font-semibold text-gray-900">
												{fullName}
											</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">✉️ Email:</td>
											<td className="py-2 text-right">
												<a
													href={`mailto:${email}`}
													className={`text-sm font-semibold text-${brandColor} no-underline`}
												>
													{email}
												</a>
											</td>
										</tr>
										<tr>
											<td className="py-2 pr-4 text-sm font-medium text-gray-600">📞 Teléfono:</td>
											<td className="py-2 text-right">
												<a
													href={`tel:${phone}`}
													className={`text-sm font-semibold text-${brandColor} no-underline`}
												>
													{phone}
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</Section>

							{/* Message Card */}
							<Section className="mb-6 rounded-lg border border-solid border-gray-200 px-6 py-6">
								<Heading className="mt-0 mb-4 text-lg font-semibold text-gray-900">Mensaje</Heading>
								<Text className="m-0 text-base leading-relaxed whitespace-pre-wrap text-gray-700">
									{message}
								</Text>
							</Section>
						</Section>

						{/* Footer */}
						<Section className="rounded-b-lg border-t border-solid border-gray-200 bg-gray-50 px-8 py-8 text-center">
							<Text className="mb-2 text-sm text-gray-600">
								Este correo fue enviado automáticamente desde el formulario de contacto
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

ContactEmail.PreviewProps = {
	fullName: "Juan Pérez",
	email: "juan.perez@ejemplo.com",
	phone: "+56 9 1234 5678",
	message:
		"Hola, estoy interesado en conocer más sobre los cursos de capacitación que ofrecen. ¿Podrían enviarme información?",
	businessLine: "otec",
} satisfies ContactEmailProps

export { ContactEmail }
