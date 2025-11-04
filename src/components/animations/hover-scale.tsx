import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface HoverScaleProps extends HTMLMotionProps<"div"> {
	scale?: number
	children: React.ReactNode
}

export function HoverScale({ scale = 1.05, children, ...props }: HoverScaleProps) {
	return (
		<motion.div
			whileHover={{ scale }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.2 }}
			{...props}
		>
			{children}
		</motion.div>
	)
}
