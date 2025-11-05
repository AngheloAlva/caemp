import { HardHat, Glasses, Shirt, Footprints, AlertTriangle, Package } from "lucide-react"
import { motion } from "motion/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"

const productCategories = [
	{
		icon: HardHat,
		title: "Protección de Cabeza",
		items: ["Cascos de seguridad", "Gorros y cofias", "Protectores faciales"],
		badge: "Certificado",
	},
	{
		icon: Glasses,
		title: "Protección Visual",
		items: ["Lentes de seguridad", "Gafas antiempañantes", "Pantallas faciales"],
		badge: "Alta calidad",
	},
	{
		icon: Shirt,
		title: "Ropa de Trabajo",
		items: ["Overoles", "Chalecos reflectantes", "Ropa ignífuga"],
		badge: "Resistente",
	},
	{
		icon: Footprints,
		title: "Calzado de Seguridad",
		items: ["Botas con punta de acero", "Zapatos dieléctricos", "Calzado antideslizante"],
		badge: "Ergonómico",
	},
	{
		icon: AlertTriangle,
		title: "Señalética",
		items: ["Señales de advertencia", "Conos y vallas", "Cintas de seguridad"],
		badge: "Normativa",
	},
	{
		icon: Package,
		title: "Equipos Especializados",
		items: ["Arneses", "Líneas de vida", "Detectores de gas"],
		badge: "Profesional",
	},
]

export default function Products() {
	return (
		<section className="w-full bg-gray-50 py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold text-[#22C55E] md:text-4xl lg:text-5xl">
							Nuestros Productos
						</h2>
						<p className="mx-auto max-w-3xl text-lg text-gray-700">
							Equipos de protección personal y colectiva de última generación, certificados y
							adaptados a las necesidades de cada industria.
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{productCategories.map((category) => {
						const Icon = category.icon
						return (
							<StaggerItem key={category.title}>
								<motion.div
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									className="h-full"
								>
									<Card className="h-full border-[#22C55E]/20 transition-all hover:border-[#22C55E] hover:shadow-xl">
										<CardHeader>
											<div className="mb-4 flex items-start justify-between">
												<div className="rounded-full bg-[#22C55E]/10 p-4">
													<Icon className="h-8 w-8 text-[#22C55E]" />
												</div>
												<Badge variant="outline" className="border-[#22C55E] text-[#22C55E]">
													{category.badge}
												</Badge>
											</div>
											<CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2">
												{category.items.map((item) => (
													<li key={item} className="flex items-start gap-2 text-gray-600">
														<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</motion.div>
							</StaggerItem>
						)
					})}
				</StaggerContainer>
			</div>
		</section>
	)
}
