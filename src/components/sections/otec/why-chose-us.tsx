import { ZapIcon, UsersIcon, AwardIcon, MapPinIcon, ShieldIcon, TrendingUpIcon } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

import { FadeIn } from "@/components/animations/fade-in"

interface BentoGridItemProps {
	title: string
	description: string
	icon: React.ReactNode
	className?: string
	size?: "small" | "medium" | "large"
}

const BentoGridItem = ({ title, description, icon, className }: BentoGridItemProps) => {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring" as const, damping: 25 },
		},
	}

	return (
		<motion.div
			variants={variants}
			className={cn(
				"group border-primary/10 bg-background hover:border-primary/30 relative flex h-full flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500",
				className
			)}
		>
			<div className="absolute -top-1 -right-1/3 z-0 size-full bg-[linear-gradient(to_right,#3d16162e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] bg-size-[28px_28px] group-hover:bg-[linear-gradient(to_right,#0279D97e_1px,transparent_1px),linear-gradient(to_bottom,#0279D97e_1px,transparent_1px)]"></div>

			<div className="text-primary/5 group-hover:text-primary/10 absolute right-2 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2] group-hover:-rotate-10">
				{icon}
			</div>

			<div className="relative z-10 flex h-full flex-col justify-between">
				<div>
					<div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
						{icon}
					</div>
					<h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
					<p className="text-muted-foreground text-sm">{description}</p>
				</div>
			</div>

			<div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-linear-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
		</motion.div>
	)
}

const items = [
	{
		title: "Respuesta Rápida",
		description:
			"Capacitación híbrida de alto nivel con respuesta ágil a las necesidades de tu empresa.",
		icon: <ZapIcon className="size-6" />,
		size: "large" as const,
	},
	{
		title: "Campo Propio",
		description: "Entrenamiento práctico en nuestras instalaciones con equipamiento de vanguardia.",
		icon: <ShieldIcon className="size-6" />,
		size: "small" as const,
	},
	{
		title: "Instructores Certificados",
		description: "Equipo de profesionales actualizados y certificados para una formación efectiva.",
		icon: <UsersIcon className="size-6" />,
		size: "medium" as const,
	},
	{
		title: "Cobertura Nacional",
		description: "Capacitación en todo el territorio nacional, llegamos donde nos necesites.",
		icon: <MapPinIcon className="size-6" />,
		size: "medium" as const,
	},
	{
		title: "Certificación Oficial",
		description: "Certificados reconocidos que cumplen con todas las normativas vigentes.",
		icon: <AwardIcon className="size-6" />,
		size: "small" as const,
	},
	{
		title: "Mejora Continua",
		description:
			"Metodología actualizada constantemente según las últimas normativas y tecnologías.",
		icon: <TrendingUpIcon className="size-6" />,
		size: "large" as const,
	},
]

export default function WhyChoseUs(): React.ReactElement {
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.1,
			},
		},
	}

	return (
		<section className="px-4 py-16 md:py-24">
			<div className="container max-w-6xl">
				<FadeIn>
					<div className="mx-auto mb-12 max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							¿Por qué elegir CAEMP?
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed text-pretty">
							Somos líderes en capacitación con infraestructura de vanguardia y metodología probada.
						</p>
					</div>
				</FadeIn>

				<motion.div
					className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							icon={item.icon}
							size={item.size}
							className={cn(
								item.size === "large"
									? "col-span-4"
									: item.size === "medium"
										? "col-span-3"
										: "col-span-2",
								"h-full"
							)}
						/>
					))}
				</motion.div>
			</div>
		</section>
	)
}
