import { animate, useMotionValue, useMotionValueEvent } from "motion/react"
import { useEffect, useState } from "react"

interface UseSimpleCounterProps {
	targetValue: number
	duration?: number
	inView?: boolean
	suffix?: string
}

export function useSimpleCounter({
	targetValue,
	duration = 2000,
	inView = true,
	suffix = "",
}: UseSimpleCounterProps): string {
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

	return `${rounded}${suffix}`
}
