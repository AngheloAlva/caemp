import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface SlideInProps extends HTMLMotionProps<"div"> {
	delay?: number
	duration?: number
	direction?: "left" | "right" | "up" | "down"
	children: React.ReactNode
}

export function SlideIn({
	delay = 0,
	duration = 0.6,
	direction = "up",
	children,
	...props
}: SlideInProps) {
	const directionOffset = {
		left: { x: -50, y: 0 },
		right: { x: 50, y: 0 },
		up: { x: 0, y: 50 },
		down: { x: 0, y: -50 },
	}

	return (
		<motion.div
			initial={{ opacity: 0, ...directionOffset[direction] }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration, delay, ease: "easeOut" }}
			{...props}
		>
			{children}
		</motion.div>
	)
}
