import { useEffect, useState } from 'react'
import { timeFn } from '../../helpers/timeFn'
import { useSelector } from 'react-redux'
const CounterTimer = () => {
	const theme = useSelector((state) => {
		return state.ThemeBtn.theme
	})
	const [clock, setClock] = useState('')
	useEffect(() => {
		const interval = setInterval(() => {
			setClock(timeFn())
		}, 1000)
		return () => clearInterval(interval.current)
	}, [])
	return <p className={`counter ${theme === "light" ? "counterLight": "counterDark"}`}>Time: {clock} </p>
}

export default CounterTimer
