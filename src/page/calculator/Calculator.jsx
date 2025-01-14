import { useState } from 'react'
import { resultcalculatorFn } from '../../helpers/calculatorFn'
import { elements } from '../../helpers/Constant/ConstantCalculator'

const Calculator = () => {
	const [display, setDisplay] = useState('0')
	const handleBtn = (evt) => {
		if (evt.target.textContent === 'AC') {
			setDisplay('0')
			return
		} else if (display === '0') {
			if (evt.target.textContent === '.') {
				setDisplay(display + `${evt.target.textContent}`)
				return
			}
			setDisplay(`${evt.target.textContent}`)
			return
		}
		if (evt.target.textContent === ' = ') {
			setDisplay(resultcalculatorFn(display))
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
					<li
						onClick={handleBtn}
						key={idx}
						className={`bottom-calculator_item`}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Calculator
