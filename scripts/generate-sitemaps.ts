/**
 * Script to generate sitemaps for each tenant domain.
 * Run with: npx tsx scripts/generate-sitemaps.ts
 *
 * This will generate:
 * - public/sitemap-group.xml (for grupocaemp.cl)
 * - public/sitemap-otec.xml (for caemp.cl)
 * - public/sitemap-growth.xml (for crecimiento.cl)
 * - public/sitemap-plus.xml (for caempplus.cl)
 */

import { writeFileSync } from "node:fs"
import { join } from "node:path"

const DOMAINS = {
	growth: "crecimiento.cl",
	plus: "caempplus.cl",
	otec: "caemp.cl",
	group: "grupocaemp.cl",
}

type DomainType = keyof typeof DOMAINS

interface SitemapURL {
	loc: string
	changefreq: string
	priority: number
}

const routesByTenant: Record<DomainType, SitemapURL[]> = {
	group: [{ loc: "/", changefreq: "monthly", priority: 1.0 }],

	otec: [
		{ loc: "/", changefreq: "weekly", priority: 1.0 },
		{ loc: "/cursos", changefreq: "weekly", priority: 0.9 },
		{ loc: "/nosotros", changefreq: "monthly", priority: 0.7 },
		{ loc: "/galeria", changefreq: "monthly", priority: 0.6 },
		{ loc: "/contacto", changefreq: "monthly", priority: 0.8 },
		{ loc: "/cotizacion", changefreq: "monthly", priority: 0.8 },
	],

	growth: [
		{ loc: "/", changefreq: "weekly", priority: 1.0 },
		{ loc: "/cursos", changefreq: "weekly", priority: 0.9 },
		{ loc: "/talleres", changefreq: "weekly", priority: 0.9 },
		{ loc: "/programas", changefreq: "monthly", priority: 0.8 },
		{ loc: "/teatro", changefreq: "monthly", priority: 0.8 },
		{ loc: "/noticias", changefreq: "weekly", priority: 0.7 },
		{ loc: "/nosotros", changefreq: "monthly", priority: 0.7 },
		{ loc: "/galeria", changefreq: "monthly", priority: 0.6 },
		{ loc: "/contacto", changefreq: "monthly", priority: 0.8 },
		{ loc: "/cotizacion", changefreq: "monthly", priority: 0.8 },
	],

	plus: [
		{ loc: "/", changefreq: "weekly", priority: 1.0 },
		{ loc: "/nosotros", changefreq: "monthly", priority: 0.7 },
		{ loc: "/productos", changefreq: "weekly", priority: 0.9 },
		{ loc: "/contacto", changefreq: "monthly", priority: 0.8 },
		{ loc: "/cotizacion", changefreq: "monthly", priority: 0.8 },
	],
}

function generateSitemap(tenant: DomainType): string {
	const lastmod = new Date().toISOString().split("T")[0]
	const baseUrl = `https://${DOMAINS[tenant]}`
	const routes = routesByTenant[tenant]

	const urls = routes
		.map(
			(route) => `
  <url>
    <loc>${baseUrl}${route.loc === "/" ? "" : route.loc}</loc>
    <lastmod>${lastmod}</lastmod>
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

// Generate all sitemaps
const tenants: DomainType[] = ["group", "otec", "growth", "plus"]
const publicDir = join(process.cwd(), "public")

for (const tenant of tenants) {
	const sitemap = generateSitemap(tenant)
	const filename = `sitemap-${tenant}.xml`
	const filepath = join(publicDir, filename)

	writeFileSync(filepath, sitemap)
	console.log(`✅ Generated ${filename} for ${DOMAINS[tenant]}`)
}

console.log("\n📋 Next steps:")
console.log("1. Deploy to Vercel")
console.log("2. In Google Search Console, submit these sitemaps:")
console.log("   - grupocaemp.cl → /sitemap-group.xml")
console.log("   - caemp.cl → /sitemap-otec.xml")
console.log("   - crecimiento.cl → /sitemap-growth.xml")
console.log("   - caempplus.cl → /sitemap-plus.xml")
