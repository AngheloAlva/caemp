"use client"

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { WhatsappIcon } from "../icons/whatsapp-icon"

const socialLinks = [
	{
		name: "Instagram",
		icon: InstagramIcon,
		href: "https://www.instagram.com/caemp.cl",
		bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
		hoverColor: "hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
	},
	{
		name: "Facebook",
		icon: FacebookIcon,
		href: "https://www.facebook.com/p/CAEMP-CHILE-100076324844004",
		bgColor: "bg-blue-600",
		hoverColor: "hover:bg-blue-700",
	},
	{
		name: "LinkedIn",
		icon: LinkedinIcon,
		href: "https://www.linkedin.com/company/caempchile",
		bgColor: "bg-blue-700",
		hoverColor: "hover:bg-blue-800",
	},
	{
		name: "WhatsApp",
		icon: WhatsappIcon,
		href: "https://wa.me/56932478827?text=Hola!%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20de%20www.caemp.cl",
		bgColor: "bg-green-600",
		hoverColor: "hover:bg-green-700",
	},
]

export function FloatingSocialMedia() {
	return (
		<div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
			{socialLinks.map((social, index) => {
				const Icon = social.icon
				return (
					<motion.div
						key={social.name}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						className="group relative"
					>
						{/* Tooltip */}
						<div className="pointer-events-none absolute top-1/2 right-14 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
							{social.name}
							<div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
						</div>

						{/* Button */}
						<motion.a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className={cn(
								"flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300",
								social.bgColor,
								social.hoverColor
							)}
							aria-label={social.name}
						>
							<Icon className="h-5 w-5" />
						</motion.a>
					</motion.div>
				)
			})}
		</div>
	)
}
