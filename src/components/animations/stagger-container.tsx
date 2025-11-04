import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
	staggerDelay?: number
	children: React.ReactNode
}

export function StaggerContainer({
	staggerDelay = 0.1,
	children,
	...props
}: StaggerContainerProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={{
				visible: {
					transition: {
						staggerChildren: staggerDelay,
					},
				},
			}}
			{...props}
		>
			{children}
		</motion.div>
	)
}
