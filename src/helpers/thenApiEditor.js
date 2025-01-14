export const ThenApiEditor = (data, setApi) => {
	const {
		location: { country, name },
	} = data
	const arr = data.forecast.forecastday.map(
		({
			day: {
				mintemp_c,
				maxtemp_c,
				condition: { icon, text },
			},
			date,
		}) => {
			return {
				mintemp_c: mintemp_c,
				maxtemp_c: maxtemp_c,
				icon: icon,
				text: text,
				month: date.split('-')[1],
				day: date.split('-')[2],
			}
		}
	)
	setApi({
		country: country,
		name: name,
		arr: arr,
		status: true,
	})
}
