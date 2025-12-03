import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
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
				title: "Caemp OTEC",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
	notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-family scroll-smooth">
				<Header />
				{children}
				<Footer />

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
