import { useState } from 'react'

function Counter() {
	const [counter, setCounter] = useState(0)
	return (
		<div className='App'>
			<p className='counter'>{counter}</p>
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
