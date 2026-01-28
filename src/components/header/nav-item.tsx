import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

interface NavItemProps {
	to: string
	label: string
	lineOfBusiness: "crecimiento" | "otec" | "plus" | "grupo"
	onClick?: () => void
}

export default function NavItem({
	to,
	label,
	lineOfBusiness,
	onClick,
}: NavItemProps): React.ReactElement {
	return (
		<Link
			to={to}
			onClick={onClick}
			className={cn(
				"hover:text-primary rounded-md px-2 py-2 text-sm font-medium transition-all hover:bg-purple-50",
				{
					"hover:text-primary-green": lineOfBusiness === "plus",
					"hover:text-primary-purple": lineOfBusiness === "crecimiento",
				}
			)}
		>
			{label}
		</Link>
	)
}
