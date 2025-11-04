import { motion } from "motion/react"

import type { HTMLMotionProps } from "motion/react"

interface StaggerItemProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
			}}
			{...props}
		>
			{children}
		</motion.div>
	)
}
