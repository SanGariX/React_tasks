export const timeFn = () => {
	const timeBase = Math.floor(Date.now() / 1000)
	const timeMinute = Math.floor((timeBase % 3600) / 60)
	const timeHours = (Math.floor((timeBase % (3600 * 24)) / 3600) + 2) % 24
	const timeSeconds = Math.floor(timeBase % 60)
	return `${String(timeHours).padStart(2, '0')}:${String(timeMinute).padStart(
		2,
		'0'
	)}:${String(timeSeconds).padStart(2, '0')}`
}
