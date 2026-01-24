import { pixelBasedPreset, type TailwindConfig } from "@react-email/components"

export default {
	presets: [pixelBasedPreset],
	theme: {
		extend: {
			colors: {
				brand: {
					otec: "#0279d9",
					crecimiento: "#5a2673",
					plus: "#4eb901",
					grupo: "#0279d9",
				},
			},
		},
	},
} satisfies TailwindConfig

export const brandAssets = {
	logo: {
		src: "https://caemp.cl/logo.png", // Update with actual logo URL
		alt: "CAEMP",
		width: 120,
	},
}
