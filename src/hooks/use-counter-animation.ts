import { animate, useMotionValue, useMotionValueEvent } from "motion/react"
import { useEffect, useState } from "react"

interface UseCounterAnimationProps {
	baseValue: number
	monthlyIncrement: number
	startDate: Date
	duration?: number
	inView?: boolean
}

export function useCounterAnimation({
	baseValue,
	monthlyIncrement,
	startDate,
	duration = 2000,
	inView = true,
}: UseCounterAnimationProps): number {
	const now = new Date()
	const monthsPassed = Math.max(
		0,
		(now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth())
	)
	const targetValue = baseValue + monthsPassed * monthlyIncrement

	const count = useMotionValue(0)
	const [rounded, setRounded] = useState(0)

	useMotionValueEvent(count, "change", (latest) => {
		setRounded(Math.round(latest))
	})

	useEffect(() => {
		if (!inView) return

		const controls = animate(count, targetValue, {
			duration: duration / 1000,
			ease: [0.16, 1, 0.3, 1],
		})

		return () => controls.stop()
	}, [count, targetValue, duration, inView])

	return rounded
}
