import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import type { Tenant } from "../middleware/tenant"

import { FloatingSocialMedia } from "@/components/shared/floating-social-media"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { SEOHead } from "@/components/seo/seo-head"

import appCss from "../styles.css?url"

interface RouterContext {
	tenant: Tenant
	prefix: string
}

export const Route = createRootRouteWithContext<RouterContext>()({
	// NOTE: Canonical redirects are no longer needed here.
	// The router's `rewrite` handles domain-based routing automatically:
	// - crecimiento.cl/ → internally routes to /crecimiento
	// - caempplus.cl/ → internally routes to /plus
	// - caemp.cl/ → internally routes to /otec
	// - grupocaemp.cl/ → routes to / (home)
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Grupo CAEMP",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
				fetchPriority: "high",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),

	shellComponent: RootDocument,
	notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<HeadContent />
			</head>
			<body className="font-family scroll-smooth">
				<SEOHead />
				<Header />
				{children}
				<Footer />
				<FloatingSocialMedia />

				{/* <TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/> */}
				<Scripts />
			</body>
		</html>
	)
}

function NotFound() {
	return (
		<div className="flex h-[50vh] flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-bold">Página no encontrada</h1>
			<p className="text-gray-600">La página que buscas no existe.</p>
			<a href="/" className="text-primary font-medium hover:underline">
				Volver al inicio
			</a>
		</div>
	)
}
