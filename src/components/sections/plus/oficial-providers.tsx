import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OfficialProviders(): React.ReactElement {
	const distributors = [
		{
			image: "/images/plus/distributors/libus.png",
			title: "Libus",
		},
		{
			image: "/images/plus/distributors/quebec.png",
			title: "Quebec",
		},
		{
			image: "/images/plus/distributors/sam.png",
			title: "SAM",
		},
		{
			image: "/images/plus/distributors/singing.png",
			title: "Singing",
		},
		{
			image: "/images/plus/distributors/vicsa.png",
			title: "Vicsa",
		},
	]

	return (
		<section className="w-full bg-white py-12">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
					{/* Left Column: Image */}
					<div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-100">
						<img
							src="/images/placeholder.jpg"
							alt="Distribuidores Oficiales"
							className="h-full w-full object-cover"
						/>
					</div>

					{/* Right Column: Card with Brands */}
					<Card className="h-full border-none shadow-none">
						<CardHeader className="px-0 pt-0">
							<CardTitle className="text-primary-green mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
								Somos Distribuidores Oficiales
							</CardTitle>
							<p className="text-lg text-gray-700">
								Nuestros productos cumplen con los más altos estándares de seguridad y calidad.
							</p>
						</CardHeader>
						<CardContent className="px-0">
							<div className="grid grid-cols-2 sm:grid-cols-3">
								{distributors.map((distributor) => (
									<div
										key={distributor.title}
										className="flex items-center justify-center grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
									>
										<div className="relative h-24 w-full lg:h-32">
											<img
												src={distributor.image}
												alt={distributor.title}
												className="h-full w-full object-contain"
											/>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
