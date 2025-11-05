import { motion } from "motion/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function Stats(): React.ReactElement {
	return (
		<section className="bg-muted/30 w-screen border-b py-12">
			<div className="container mx-auto">
				<StaggerContainer staggerDelay={0.15}>
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.2,
										type: "spring",
										stiffness: 200,
									}}
								>
									+700
								</motion.div>
								<div className="text-muted-foreground text-sm">Empresas Capacitadas</div>
							</motion.div>
						</StaggerItem>
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.3,
										type: "spring",
										stiffness: 200,
									}}
								>
									+15,000
								</motion.div>
								<div className="text-muted-foreground text-sm">Personas Entrenadas</div>
							</motion.div>
						</StaggerItem>
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.4,
										type: "spring",
										stiffness: 200,
									}}
								>
									25+
								</motion.div>
								<div className="text-muted-foreground text-sm">Años de Experiencia</div>
							</motion.div>
						</StaggerItem>
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.5,
										type: "spring",
										stiffness: 200,
									}}
								>
									100%
								</motion.div>
								<div className="text-muted-foreground text-sm">Certificación</div>
							</motion.div>
						</StaggerItem>
					</div>
				</StaggerContainer>
			</div>
		</section>
	)
}
