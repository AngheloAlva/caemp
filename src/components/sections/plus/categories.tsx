import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { FadeIn } from "@/components/animations/fade-in"

const categories = [
	{
		name: "Arnés y Accesorios",
		image: "/images/plus/categories/arnes-y-accesorios.png",
	},
	{
		name: "Calzado",
		image: "/images/plus/categories/calzado.png",
	},
	{
		name: "Guantes",
		image: "/images/plus/categories/guantes.png",
	},
	{
		name: "Prevención y Cuidado",
		image: "/images/plus/categories/prevencion-y-cuidado-.png",
	},
	{
		name: "Rescate y Herraje",
		image: "/images/plus/categories/rescate-y-herraje.png",
	},
	{
		name: "SAM Medical",
		image: "/images/plus/categories/sam-medical.png",
	},
]

export default function Categories() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-green mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Nuestras Categorías
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-700">
							Explora nuestra amplia gama de equipos de protección personal
						</p>
					</div>
				</FadeIn>

				<StaggerContainer className="flex flex-wrap items-start justify-center gap-2">
					{categories.map((category, index) => (
						<StaggerItem key={index}>
							<div className="group flex w-40 flex-col items-center transition-transform hover:scale-105">
								<div className="border-primary-green/20 group-hover:border-primary-green mb-3 overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all group-hover:shadow-lg">
									<img
										src={category.image}
										alt={category.name}
										className="h-36 w-36 object-contain"
									/>
								</div>

								<p className="text-center font-semibold text-gray-900">{category.name}</p>
							</div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	)
}
