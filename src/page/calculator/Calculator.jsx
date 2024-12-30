import { useState } from 'react'

const Calculator = () => {
	const elements = [
		' ( ',
		' ) ',
		' % ',
		'AC',
		'7',
		'8',
		'9',
		' / ',
		'4',
		'5',
		'6',
		' * ',
		'1',
		'2',
		'3',
		'-',
		'0',
		'.',
		' = ',
		' + ',
	]
	const [display, setDisplay] = useState('3 * 5 + 9 * 5')
	const sum = (item1, item2) => {
		return item1 + item2
	}
	const vid = (item1, item2) => {
		return item1 - item2
	}
	// const dob = (item1, item2) => {
	// 	return item1 * item2
	// }
	// const ris = (item1, item2) => {
	// 	return item1 / item2
	// }
	const result = (element) => {
		const arr = element.split(' ')
		let results = 0
		const copyArr = [...arr]
		arr.forEach((item, idx, array) => {
			if (item === '*' || item === '/') {
				if (item === '*') {
					arr.splice(
						idx - 1,
						3,
						Number(array[idx - 1]) * Number(array[idx + 1])
					)
					arr.push('#', '#')

					copyArr.splice(
						idx - 1,
						3,
						Number(array[idx - 1]) * Number(array[idx + 1])
					)

					return
				} else if (item === '/') {
					arr.splice(
						idx - 1,
						3,
						Number(array[idx - 1]) / Number(array[idx + 1])
					)
					arr.push('#', '#')

					copyArr.splice(
						idx - 1,
						3,
						Number(array[idx - 1]) / Number(array[idx + 1])
					)
					return
				}
			}
			if (idx === arr.length - 1) {
				arr.forEach((item2, idx2, array2) => {
					if (item2 === '+' || item2 === '-') {
						if (item2 === '+') {
							results += sum(Number(array2[idx2 - 1]), Number(array2[idx2 + 1]))
							arr.splice(
								idx2 - 1,
								3,
								Number(array2[idx2 - 1]) + Number(array2[idx2 + 1])
							)
							arr.push('#', '#')
						} else if (item2 === '-') {
							results += vid(Number(array2[idx2 - 1]), Number(array2[idx2 + 1]))
							copyArr.splice(
								idx2 - 1,
								3,
								Number(array2[idx2 - 1]) - Number(array2[idx2 + 1])
							)
							arr.push('#', '#')
						}
						if (idx === arr.length - 1) {
							return
						}
					}
				})
			}
		})
		return results
	}

	const handleBtn = (evt) => {
		if (evt.target.textContent === 'AC') {
			setDisplay('0')
			return
		} else if (display === '0') {
			setDisplay(`${evt.target.textContent}`)
			return
		}
		if (evt.target.textContent === ' = ') {
			setDisplay(result(display))
			return
		}
		setDisplay(display + `${evt.target.textContent}`)
	}
	const styleClass = (evt) => {
		console.log(evt.target, 'kdngodkgn')
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
