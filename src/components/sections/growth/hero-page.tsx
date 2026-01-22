import { FadeIn } from "@/components/animations/fade-in"
import { Image } from "@/components/shared/image"

import type { LucideIcon } from "lucide-react"

interface HeroPageProps {
	title: string
	description: string
	icon?: LucideIcon
	image?: string
}

export default function HeroPage({ title, description, icon: Icon, image }: HeroPageProps) {
	return (
		<section className="bg-primary-purple relative w-screen py-20 text-white md:py-32">
			<div className="absolute inset-0 overflow-hidden opacity-20">
				<Image
					alt=""
					width={1920}
					height={1080}
					loading="eager"
					decoding="async"
					fetchPriority="high"
					src={image || "/images/crecimiento/hero.png"}
					className="h-full w-full object-cover"
				/>
			</div>

			<div className="relative container mx-auto px-4 text-center">
				<FadeIn>
					{Icon && (
						<div className="mx-auto mb-6 inline-flex rounded-full bg-white/10 p-4 backdrop-blur-sm">
							<Icon className="h-10 w-10 text-white" />
						</div>
					)}
					<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
					<p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">{description}</p>
				</FadeIn>
			</div>
		</section>
	)
}
