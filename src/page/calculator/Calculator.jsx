import { useState } from 'react'

const Calculator = () => {
	const elements = [
		'(',
		')',
		'%',
		'AC',
		'7',
		'8',
		'9',
		'/',
		'4',
		'5',
		'6',
		'*',
		'1',
		'2',
		'3',
		'-',
		'0',
		'.',
		'=',
		'+',
	]
	const [display, setDisplay] = useState(0)
	const handleBtn = (evt) => {
		if (evt.target.textContent === 'AC') {
			setDisplay('0')
			return
		} else if (display === '0') {
			setDisplay(`${evt.target.textContent}`)
			return
		}
		setDisplay(display + `${evt.target.textContent}`)
	}
	return (
		<div className='wrapper_calculator'>
			<div className='top_calculator'>
				<p className='top-calculator-monitor'>{display}</p>
			</div>
			<ul className='bottom-calculator'>
				{elements.map((item, idx) => (
					<li onClick={handleBtn} key={idx} className='bottom-calculator_item'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Calculator
