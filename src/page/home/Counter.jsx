import { useState } from 'react'
import { useSelector } from 'react-redux'

function Counter() {
	const [counter, setCounter] = useState(0)
	const theme = useSelector((state) => {
		return state.ThemeBtn.theme
	})
	return (
		<div className='App'>
			<p className={`counter  ${theme === "light" ? "counterLight": "counterDark"}`}>{counter}</p>
			<div className='btn-container'>
				<button
					className='btn'
					onClick={() => {
						setCounter(counter + 1)
					}}
				>
					+
				</button>
				<button
					className='btn'
					onClick={() => {
						setCounter(counter - 1)
					}}
				>
					-
				</button>
				<button
					className='btn'
					onClick={() => {
						setCounter(0)
					}}
				>
					reset
				</button>
			</div>
		</div>
	)
}

export default Counter
