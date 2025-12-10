import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

interface NavItemProps {
	to: string
	label: string
	lineOfBusiness: "crecimiento" | "otec" | "plus" | "grupo"
}

export default function NavItem({ to, label, lineOfBusiness }: NavItemProps): React.ReactElement {
	return (
		<Link
			to={to}
			className={cn("hover:text-primary text-sm font-medium transition-all", {
				"hover:text-primary-green": lineOfBusiness === "plus",
				"hover:text-primary-purple": lineOfBusiness === "crecimiento",
			})}
		>
			{label}
		</Link>
	)
}
