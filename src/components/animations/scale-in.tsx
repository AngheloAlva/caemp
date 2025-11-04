import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface ScaleInProps extends HTMLMotionProps<"div"> {
	delay?: number
	duration?: number
	children: React.ReactNode
}

export function ScaleIn({ delay = 0, duration = 0.5, children, ...props }: ScaleInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration, delay, ease: "easeOut" }}
			{...props}
		>
			{children}
		</motion.div>
	)
}
