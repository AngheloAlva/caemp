import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface FadeInProps extends HTMLMotionProps<"div"> {
	delay?: number
	duration?: number
	children: React.ReactNode
}

export function FadeIn({ delay = 0, duration = 0.5, children, ...props }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration, delay, ease: "easeOut" }}
			{...props}
		>
			{children}
		</motion.div>
	)
}
