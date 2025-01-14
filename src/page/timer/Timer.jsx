import { useState, useRef } from 'react'

import { TimerStateResult } from '../../helpers/timerOptionState'
import CounterTimer from './CounterTimer'
import {TimerStateEffect} from '../../helpers/useEffectTimer.js'
import { useSelector } from 'react-redux'
function Timer() {
	const btn1Start = useRef()
	const btn2End = useRef()
	const theme = useSelector((state) => {
		return state.ThemeBtn.theme
	})
	const [pause, setPause] = useState('')
	const intervalRef = useRef(null)
	const [timer, setTimer] = useState({
		currentTimer: 0,
		time: 0,
	})
	TimerStateEffect(timer, setTimer, intervalRef)
	function handelPause() {
		if (timer.status === 'pause') {
			return setTimer({ ...timer, status: `${pause}` })
		}
		setPause(timer.status)
		setTimer({ ...timer, status: 'pause' })
	}
	return (
		<>
			<div className='App'>
				<CounterTimer />
				<p className={`counter ${theme === "light" ? "counterLight": "counterDark"}`}> {timer.currentTimer} </p>
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
								TimerStateResult(btn1Start, btn2End, evt, setTimer, timer)
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
								TimerStateResult(btn1Start, btn2End, evt, setTimer, timer)
							}}
							className='counterBtn'
						>
							Just Run
						</button>
					</div>
					<div className='flex-next-element'>
						<button
							id='btn2'
							onClick={(evt) => {
								TimerStateResult(btn1Start, btn2End, evt, setTimer, timer)
							}}
							className='counterBtn'
						>
							Next
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
		</>
	)
}
export default Timer
