import { useEffect, useState, useRef } from 'react'

function timer() {
	const [clock, setClock] = useState('')
	const [timer, setTimer] = useState({ currentTimer: 0 })
	const [pause, setPause] = useState('')
	const intervalRef = useRef(null)
	useEffect(() => {
		const interval = setInterval(() => {
			const timeBase = Math.floor(Date.now() / 1000)
			const timeMinute = Math.floor((timeBase % 3600) / 60)
			const timeHours = (Math.floor((timeBase % (3600 * 24)) / 3600) + 2) % 24
			const timeSeconds = Math.floor(timeBase % 60)
			setClock(
				`${String(timeHours).padStart(2, '0')}:${String(timeMinute).padStart(
					2,
					'0'
				)}:${String(timeSeconds).padStart(2, '0')}`
			)
		}, 1000)
		intervalRef.current = interval
		return () => clearInterval(intervalRef.current)
	}, [])
	const btn1Start = useRef()
	const btn2End = useRef()
	function handleBtn(evt) {
		const { id } = evt.target
		if (id === 'btn1') {
			setTimer((prevState) => ({
				...prevState,
				currentTimer: Number(Number(btn1Start.current.value).toFixed(1)),
				time: 0,
				status: 'back',
			}))
			return
		} else if (id === 'btn2') {
			setTimer({
				currentTimer: 0,
				time: Number(Number(btn2End.current.value).toFixed(1)),
				status: 'next',
			})
			return
		}
		setTimer({
			currentTimer: 0,
			time: -1,
			status: 'next',
		})
	}
	useEffect(() => {
		if (timer.time === undefined || timer.currentTimer === undefined) return
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		if (timer.status === 'pause') {
			return
		}
		const namesInterval = setInterval(() => {
			console.log(timer.time, timer.currentTimer)
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
		intervalRef.current = namesInterval
		return () => clearInterval(namesInterval)
	}, [timer])
	function handelPause() {
		if (timer.status === 'pause') {
			return setTimer({ ...timer, status: `${pause}` })
		}
		setPause(timer.status)
		setTimer({ ...timer, status: 'pause' })
	}
	return (
		<div className='App'>
			<p className='counter'>Time: {clock} </p>
			<p className='counter'> {timer.currentTimer} </p>
			<div className='flex-element'>
				<div className='flex-prew-element'>
					<input
						ref={btn1Start}
						className='inputname'
						placeholder='Задайте значення'
					/>
					<button
						id='btn1'
						onClick={(evt) => {
							handleBtn(evt)
						}}
						className='counterBtn'
					>
						Prew
					</button>
				</div>
				<div className='flex-pause-element'>
					<button
						id='justBtn'
						onClick={(evt) => {
							handleBtn(evt)
						}}
						className='counterBtn'
					>
						Run
					</button>
				</div>
				<div className='flex-next-element'>
					<button
						id='btn2'
						onClick={(evt) => {
							handleBtn(evt)
						}}
						className='counterBtn'
					>
						Prew
					</button>
					<input
						ref={btn2End}
						className='inputname'
						placeholder='Задайте значення'
					/>
				</div>
			</div>
			<button
				onClick={() => {
					handelPause()
				}}
				className='counterBtn'
			>
				Pause
			</button>
		</div>
	)
}
export default timer
