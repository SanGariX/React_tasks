import { useEffect } from "react"

export const TimerStateEffect = (timer, setTimer, intervalRef) => {
	useEffect(() => {
		if (!timer.time && !timer.currentTimer) return
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		if (timer.status === 'pause') {
			return
		}
		const namesInterval = setInterval(() => {
			if (timer.time === timer.currentTimer) {
				clearInterval(namesInterval)
				return
			}
			if (timer.status === 'next') {
				const timeState = timer.currentTimer + 0.1
				setTimer({ ...timer, currentTimer: Number(timeState.toFixed(1)) })
			} else if (timer.status === 'back') {
				const timeState = timer.currentTimer - 0.1
				setTimer({ ...timer, currentTimer: Number(timeState.toFixed(1)) })
			}
			return
		}, 100)
		return () => clearInterval(namesInterval)
	}, [timer])
}
