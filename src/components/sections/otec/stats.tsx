"use client"

import { motion } from "motion/react"
import { useState } from "react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useSimpleCounter } from "@/hooks/use-simple-counter"
import { StaggerItem } from "@/components/animations/stagger-item"

const START_DATE = new Date(2025, 11, 1)

export default function Stats(): React.ReactElement {
	const [clientesInView, setClientesInView] = useState(false)
	const [alumnosInView, setAlumnosInView] = useState(false)
	const [experienciaInView, setExperienciaInView] = useState(false)
	const [certificacionInView, setCertificacionInView] = useState(false)

	const clientesCount = useCounterAnimation({
		baseValue: 700,
		monthlyIncrement: 4,
		startDate: START_DATE,
		duration: 2000,
		inView: clientesInView,
	})

	const alumnosCount = useCounterAnimation({
		baseValue: 30000,
		monthlyIncrement: 250,
		startDate: START_DATE,
		duration: 2000,
		inView: alumnosInView,
	})

	const experienciaYears = useSimpleCounter({
		targetValue: new Date().getFullYear() - 2010,
		duration: 2000,
		inView: experienciaInView,
	})

	const certificacionPercent = useSimpleCounter({
		targetValue: 100,
		duration: 2000,
		inView: certificacionInView,
		suffix: "%",
	})

	return (
		<section className="bg-muted/30 w-screen border-b py-12">
			<div className="container mx-auto space-y-8">
				<StaggerContainer staggerDelay={0.15}>
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0.5 }}
									whileInView={{
										scale: 1,
									}}
									onViewportEnter={() => setClientesInView(true)}
									viewport={{ once: true }}
									transition={{
										delay: 0.2,
										type: "spring",
										stiffness: 200,
									}}
								>
									+{clientesCount.toLocaleString()}
								</motion.div>
								<div className="text-muted-foreground text-sm">Clientes</div>
							</motion.div>
						</StaggerItem>
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0.5 }}
									whileInView={{
										scale: 1,
									}}
									onViewportEnter={() => setAlumnosInView(true)}
									viewport={{ once: true }}
									transition={{
										delay: 0.3,
										type: "spring",
										stiffness: 200,
									}}
								>
									+{alumnosCount.toLocaleString()}
								</motion.div>
								<div className="text-muted-foreground text-sm">Alumnos</div>
							</motion.div>
						</StaggerItem>
						<StaggerItem>
							<motion.div
								className="cursor-default space-y-2 text-center"
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="text-primary text-4xl font-bold md:text-5xl"
									initial={{ scale: 0.5 }}
									whileInView={{
										scale: 1,
									}}
									onViewportEnter={() => setExperienciaInView(true)}
									viewport={{ once: true }}
									transition={{
										delay: 0.4,
										type: "spring",
										stiffness: 200,
									}}
								>
									+{experienciaYears}
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
									initial={{ scale: 0.5 }}
									whileInView={{
										scale: 1,
									}}
									onViewportEnter={() => setCertificacionInView(true)}
									viewport={{ once: true }}
									transition={{
										delay: 0.5,
										type: "spring",
										stiffness: 200,
									}}
								>
									{certificacionPercent}
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
