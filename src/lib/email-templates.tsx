interface ContactEmailProps {
	fullName: string
	email: string
	phone: string
	message: string
	businessLine: "otec" | "crecimiento" | "plus" | "grupo"
}

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
	itemType?: string // For growth: "cursos", "talleres", "teatro", "programas"
}

const businessLineColors = {
	otec: {
		primary: "#5D41D4",
		bg: "#F5F3FF",
		border: "#E9E4FF",
	},
	crecimiento: {
		primary: "#7C3AED",
		bg: "#FAF5FF",
		border: "#F3E8FF",
	},
	plus: {
		primary: "#10B981",
		bg: "#F0FDF4",
		border: "#D1FAE5",
	},
	grupo: {
		primary: "#0279d9",
		bg: "#EFF6FF",
		border: "#DBEAFE",
	},
}

const businessLineNames = {
	otec: "OTEC",
	crecimiento: "Crecimiento",
	plus: "Plus",
	grupo: "Grupo CAEMP",
}

export function ContactEmailTemplate({
	fullName,
	email,
	phone,
	message,
	businessLine,
}: ContactEmailProps) {
	const colors = businessLineColors[businessLine]
	const lineName = businessLineNames[businessLine]

	return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje de Contacto - ${lineName}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}dd 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                📧 Nuevo Mensaje de Contacto
                            </h1>
                            <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                                ${lineName}
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
                                Has recibido un nuevo mensaje de contacto desde el sitio web.
                            </p>

                            <!-- Contact Info Card -->
                            <div style="background-color: ${colors.bg}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    Información de Contacto
                                </h2>

                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            👤 Nombre:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500; text-align: right;">
                                            ${fullName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            ✉️ Email:
                                        </td>
                                        <td style="padding: 8px 0; text-align: right;">
                                            <a href="mailto:${email}" style="color: ${colors.primary}; font-size: 14px; font-weight: 500; text-decoration: none;">
                                                ${email}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            📞 Teléfono:
                                        </td>
                                        <td style="padding: 8px 0; text-align: right;">
                                            <a href="tel:${phone}" style="color: ${colors.primary}; font-size: 14px; font-weight: 500; text-decoration: none;">
                                                ${phone}
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Message Card -->
                            <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                                <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    Mensaje
                                </h2>
                                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                Este correo fue enviado automáticamente desde el formulario de contacto
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                CAEMP © ${new Date().getFullYear()} - ${lineName}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`
}

export function QuoteEmailTemplate({
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
	const colors = businessLineColors[businessLine]
	const lineName = businessLineNames[businessLine]

	// Format item type label for growth
	const getItemTypeLabel = () => {
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

	const itemLabel = getItemTypeLabel()

	return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud de Cotización - ${lineName}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}dd 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                💼 Nueva Solicitud de Cotización
                            </h1>
                            <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                                ${lineName}
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
                                Se ha recibido una nueva solicitud de cotización. A continuación encontrarás todos los detalles.
                            </p>

                            <!-- Personal Info Card -->
                            <div style="background-color: ${colors.bg}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
                                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    📋 Información Personal
                                </h2>

                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500; width: 40%;">
                                            Nombre:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                                            ${fullName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            Email:
                                        </td>
                                        <td style="padding: 8px 0;">
                                            <a href="mailto:${email}" style="color: ${colors.primary}; font-size: 14px; font-weight: 500; text-decoration: none;">
                                                ${email}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            Teléfono:
                                        </td>
                                        <td style="padding: 8px 0;">
                                            <a href="tel:${phone}" style="color: ${colors.primary}; font-size: 14px; font-weight: 500; text-decoration: none;">
                                                ${phone}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            Cargo:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                                            ${role}
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Company Info Card -->
                            <div style="background-color: ${colors.bg}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
                                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    🏢 Información de la Empresa
                                </h2>

                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500; width: 40%;">
                                            Empresa:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                                            ${companyName || "No especificada"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                                            N° Participantes:
                                        </td>
                                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                                            ${participantsNumber}
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Items Card -->
                            <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
                                <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    📚 ${itemLabel} Solicitados
                                </h2>
                                <ul style="margin: 0; padding-left: 24px; color: #374151; font-size: 14px; line-height: 1.8;">
                                    ${items.map((item) => `<li style="margin: 6px 0;">${item}</li>`).join("")}
                                </ul>
                            </div>

                            ${
															preferDate
																? `
                            <!-- Preferred Date Card -->
                            <div style="background-color: ${colors.bg}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 16px 24px; margin-bottom: 20px;">
                                <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">
                                    📅 FECHA PREFERIDA
                                </p>
                                <p style="margin: 4px 0 0 0; color: #111827; font-size: 15px; font-weight: 600;">
                                    ${new Date(preferDate).toLocaleDateString("es-CL", {
																			weekday: "long",
																			year: "numeric",
																			month: "long",
																			day: "numeric",
																		})}
                                </p>
                            </div>
                            `
																: ""
														}

                            ${
															message
																? `
                            <!-- Message Card -->
                            <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                                <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                                    💬 Mensaje Adicional
                                </h2>
                                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                                </p>
                            </div>
                            `
																: ""
														}

                            <!-- Action Button -->
                            <div style="margin-top: 32px; text-align: center;">
                                <a href="mailto:${email}?subject=Re: Solicitud de Cotización - ${lineName}" style="display: inline-block; background-color: ${colors.primary}; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">
                                    Responder al Cliente
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                Este correo fue enviado automáticamente desde el formulario de cotización
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                CAEMP © ${new Date().getFullYear()} - ${lineName}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`
}
