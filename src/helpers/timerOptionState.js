
export const TimerStateResult = (btn1Start, btn2End, evt, setTimer, timer) => {

	const { id } = evt.target
	if (id === 'btn1') {
		setTimer({
			...timer,
			currentTimer: Number(Number(btn1Start.current.value).toFixed(1)),
			time: 0,
			status: 'back',
		})
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
