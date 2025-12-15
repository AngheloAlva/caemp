import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin"

const config = defineConfig({
	plugins: [
		// this is the plugin that enables path aliases
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
		nitroV2Plugin({
			vercel: {
				config: {
					images: {
						minimumCacheTTL: 60,
						domains: ["caemp.vercel.app"],
						formats: ["image/webp", "image/avif"],
						sizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					},
				},
			},
		}),
	],
	build: {
		cssMinify: true,
		minify: "esbuild",
	},
})

export default config
