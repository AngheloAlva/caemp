"use client"

import { motion } from "motion/react"
import { CheckCircle2Icon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SuccessNotificationProps {
	title: string
	description: string
	variant?: "default" | "purple" | "green" | "grupo"
}

export function SuccessNotification({
	title,
	description,
	variant = "default",
}: SuccessNotificationProps) {
	const variants = {
		default: {
			icon: "text-primary",
			bg: "bg-primary/10",
			border: "border-primary/20",
			ring: "shadow-primary/20",
		},
		purple: {
			icon: "text-primary-purple",
			bg: "bg-primary-purple/10",
			border: "border-primary-purple/20",
			ring: "shadow-primary-purple/20",
		},
		green: {
			icon: "text-primary-green",
			bg: "bg-primary-green/10",
			border: "border-primary-green/20",
			ring: "shadow-primary-green/20",
		},
		grupo: {
			icon: "text-[#0279d9]",
			bg: "bg-[#0279d9]/10",
			border: "border-[#0279d9]/20",
			ring: "shadow-[#0279d9]/20",
		},
	}

	const styles = variants[variant]

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="flex min-h-[400px] w-full items-center justify-center p-8"
		>
			<div className="flex flex-col items-center text-center">
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
					className={cn("mb-6 rounded-full p-6 shadow-xl", styles.bg, styles.ring)}
				>
					<motion.div
						initial={{ rotate: -90 }}
						animate={{ rotate: 0 }}
						transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
					>
						<CheckCircle2Icon className={cn("h-20 w-20", styles.icon)} strokeWidth={2.5} />
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.4 }}
				>
					<h3 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">{title}</h3>
					<p className="text-base text-gray-600 md:text-lg">{description}</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.3 }}
					className="mt-8 flex items-center gap-2 text-sm text-gray-500"
				>
					<div className={cn("h-2 w-2 animate-pulse rounded-full", styles.bg)} />
					<span>Volviendo al formulario...</span>
				</motion.div>
			</div>
		</motion.div>
	)
}
