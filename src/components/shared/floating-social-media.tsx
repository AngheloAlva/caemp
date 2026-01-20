"use client"

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

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
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0, scale: 0, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0, y: 20 }}
						transition={{ duration: 0.2 }}
						className="flex flex-col gap-3"
					>
						{socialLinks.map((social, index) => {
							const Icon = social.icon
							return (
								<motion.div
									key={social.name}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ duration: 0.2, delay: index * 0.05 }}
									className="group relative"
								>
									{/* Tooltip */}
									<div className="absolute top-1/2 right-14 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
										{social.name}
										<div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
									</div>

									{/* Button */}
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											"flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110",
											social.bgColor,
											social.hoverColor
										)}
										aria-label={social.name}
									>
										{social.name === "WhatsApp" ? (
											<Icon className="h-5 w-5" />
										) : (
											<Icon className="h-5 w-5" />
										)}
									</a>
								</motion.div>
							)
						})}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main Toggle Button */}
			<motion.button
				type="button"
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setIsExpanded(!isExpanded)
				}}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="bg-primary group relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all hover:shadow-2xl"
				aria-label={isExpanded ? "Cerrar redes sociales" : "Abrir redes sociales"}
			>
				{/* Pulse animation when closed - smooth and slow */}
				{!isExpanded && (
					<>
						<span className="bg-primary absolute inset-0 -z-10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full opacity-30" />
						<span className="bg-primary absolute inset-0 -z-10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1.5s] rounded-full opacity-20" />
					</>
				)}

				<AnimatePresence mode="wait">
					{isExpanded ? (
						<motion.div
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</motion.div>
					) : (
						<motion.div
							key="menu"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="flex items-center justify-center"
						>
							<svg
								className="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
							</svg>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Tooltip for main button when closed */}
				{!isExpanded && (
					<div className="absolute top-1/2 right-16 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
						Síguenos
						<div className="absolute top-1/2 right-[-4px] h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
					</div>
				)}
			</motion.button>
		</div>
	)
}
