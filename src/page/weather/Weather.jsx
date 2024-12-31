import { useState } from 'react'
import './Weather.css'
const Weather = () => {
	const [Api, setApi] = useState({
		country: '',
		name: '',
		arr: '',
		status: false,
		statusText: 0,
	})
	const weatherApi = async (value, day) => {
		const URL = 'http://api.weatherapi.com/v1'
		const Api_key = 'ce2cb9b2a3da414bb5b172546231704'
		const params = new URLSearchParams({
			key: Api_key,
			q: value,
			lang: 'uk',
			days: day,
		})
		const respons = await fetch(`${URL}/forecast.json?${params}`)
		if (!respons.ok) {
			throw new Error(respons.statusText)
		}
		const data = await respons.json()
		return data
	}
	const handelForm = (evt) => {
		evt.preventDefault()
		const city = evt.target.elements.city.value
		const day = evt.target.elements.day.value
		weatherApi(city, day)
			.then((data) => {
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
			})
			.catch((err) => {
				setApi({
					...Api,
					statusText: err,
				})
			})
	}
	return (
		<div className='weather_container'>
			<header className='header'>
				<h1 className='Weather'>Weather</h1>
				<form onSubmit={handelForm} className='input__form'>
					<input
						className='input__form-city'
						type='text'
						name='city'
						placeholder='Ввeдіть назву міста'
					/>
					<input
						className='input__form-day'
						type='text'
						name='day'
						placeholder='Кількість днів - макс. 3'
					/>
					<button className='form_btn'>Відправити</button>
				</form>
			</header>
			<main className='main'>
				<div className='top_main'>
					<h2 className='top_main_name'>Назва міста: {Api.name}</h2>
					<h2 className='top_main_name'>Назва Країни: {Api.country}</h2>
				</div>
				<p className={`main-warning-words ${Api.status ? 'dsnon' : ''}`}>
					{!Api.statusText && 'Введіть назву міста!'}
				</p>
				<ul className='bottom-main-list'>
					{!!Api.status &&
						Api.arr.map(
							({ day, month, icon, text, mintemp_c, maxtemp_c }, idx) => (
								<li key={idx} className='bottom-main-list-item'>
									<p className='bottom-main_item-number-day'>
										День: <span>{day}</span>
									</p>
									<p className='bottom-main_item-month'>
										Місяць: <span>{month}</span>
									</p>
									<img className='img-card' src={icon} alt={text} />
									<div className='bottom-main_item-flex'>
										<p className='item-flexitem-minmax-number'>
											Min {mintemp_c}°
										</p>
										<p className='item-flexitem-minmax-number'>
											Max {maxtemp_c}°
										</p>
									</div>
								</li>
							)
						)}
				</ul>
			</main>
		</div>
	)
}

export default Weather
