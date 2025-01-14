export const resultcalculatorFn = (element) => {
	const arr = element.split(' ')
	arr.forEach((item, idx, array) => {
		if (item === '*' || item === '/') {
			if (item === '*') {
				operationsArray(array, idx, '*')
				return
			} else if (item === '/') {
				operationsArray(array, idx, '/')
				return
			}
		}
		if (idx === arr.length - 1) {
			arr.forEach((item2, idx2, array2) => {
				if (item2 === '+' || item2 === '-') {
					if (item2 === '+') {
						operationsArray(array2, idx2, '+')
					} else if (item2 === '-') {
						operationsArray(array2, idx2, '-')
					}
				}
			})
		}
	})
	return arr[0].toFixed(4)
}

const operationsArray = (array, idx, operation) => {
	array.splice(
		idx - 1,
		3,
		operationsElements(array[idx - 1], array[idx + 1], operation)
	)
	array.push('#', '#')
}
const operationsElements = (a, b, operation) => {
	if (operation === '*') {
		return Number(a) * Number(b)
	} else if (operation === '/') {
		return Number(a) / Number(b)
	} else if (operation === '+') {
		return Number(a) + Number(b)
	} else {
		return Number(a) - Number(b)
	}
}
