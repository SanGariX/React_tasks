import { useState } from 'react'
import './Weather.css'
import { weatherApi } from '../../helpers/WeatherApi'
import { ThenApiEditor } from '../../helpers/thenApiEditor'
const Weather = () => {
	const [Api, setApi] = useState({
		country: '',
		name: '',
		arr: '',
		status: false,
		statusText: 0,
	})

	const handelForm = (evt) => {
		evt.preventDefault()
		const city = evt.target.elements.city.value
		const day = evt.target.elements.day.value
		weatherApi(city, day)
			.then((data)=>{ThenApiEditor(data, setApi)})
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
