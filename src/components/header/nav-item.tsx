import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"

interface NavItemProps {
	to: string
	label: string
}

export default function NavItem({ to, label }: NavItemProps): React.ReactElement {
	return (
		<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
			<Link to={to} className="hover:text-primary text-sm font-medium transition-all">
				{label}
			</Link>
		</motion.div>
	)
}
