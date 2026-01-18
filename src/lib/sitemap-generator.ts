import { SITE_URL } from "./seo"

interface SitemapURL {
	loc: string
	lastmod?: string
	changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
	priority?: number
}

const routes: SitemapURL[] = [
	// Grupo CAEMP
	{
		loc: "/",
		changefreq: "monthly",
		priority: 1.0,
	},

	// OTEC Routes
	{
		loc: "/otec",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/otec/cursos",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/otec/nosotros",
		changefreq: "monthly",
		priority: 0.7,
	},
	{
		loc: "/otec/galeria",
		changefreq: "monthly",
		priority: 0.6,
	},
	{
		loc: "/otec/contacto",
		changefreq: "monthly",
		priority: 0.8,
	},
	{
		loc: "/otec/cotizacion",
		changefreq: "monthly",
		priority: 0.8,
	},

	// Crecimiento Routes
	{
		loc: "/crecimiento",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/crecimiento/cursos",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/crecimiento/talleres",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/crecimiento/programas",
		changefreq: "monthly",
		priority: 0.8,
	},
	{
		loc: "/crecimiento/teatro",
		changefreq: "monthly",
		priority: 0.8,
	},
	{
		loc: "/crecimiento/noticias",
		changefreq: "weekly",
		priority: 0.7,
	},
	{
		loc: "/crecimiento/nosotros",
		changefreq: "monthly",
		priority: 0.7,
	},
	{
		loc: "/crecimiento/galeria",
		changefreq: "monthly",
		priority: 0.6,
	},
	{
		loc: "/crecimiento/contacto",
		changefreq: "monthly",
		priority: 0.8,
	},
	{
		loc: "/crecimiento/cotizacion",
		changefreq: "monthly",
		priority: 0.8,
	},

	// Plus Routes
	{
		loc: "/plus",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/plus/nosotros",
		changefreq: "monthly",
		priority: 0.7,
	},
	{
		loc: "/plus/productos",
		changefreq: "weekly",
		priority: 0.9,
	},
	{
		loc: "/plus/contacto",
		changefreq: "monthly",
		priority: 0.8,
	},
	{
		loc: "/plus/cotizacion",
		changefreq: "monthly",
		priority: 0.8,
	},
]

export function generateSitemap(): string {
	const lastmod = new Date().toISOString().split("T")[0]

	const urls = routes
		.map(
			(route) => `
  <url>
    <loc>${SITE_URL}${route.loc}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
		)
		.join("")

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urls}
</urlset>`
}

// Run this script to generate sitemap.xml
if (typeof window === "undefined") {
	// Server-side only
	console.log(generateSitemap())
}
