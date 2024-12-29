import { useState } from 'react'

const Converter = () => {
	const [value, setValue] = useState({
		afters: '',
		backes: '',
		names: '',
		docum1: '',
		docum2: '',
	})

	const asyncRespApi = async (dos, pislia, counter, name1, name2) => {
		const Api_key = '3740bb4f48610f2db3fbd4b8'
		const URL = `https://v6.exchangerate-api.com/v6/${Api_key}/latest/`
		const respons = await fetch(`${URL}${dos}`)
		const respons2 = await fetch(
			`https://v6.exchangerate-api.com/v6/${Api_key}/codes`
		)
		if (!respons.ok && !respons2.ok) {
			throw new Error('ERROR')
		}
		const data = await respons.json()
		const data2 = await respons2.json()
		const itemName1 = data2.supported_codes.find((item) => item[0] === name1)
		const itemName2 = data2.supported_codes.find((item) => item[0] === name2)
		return {
			afters: (data.conversion_rates[pislia] * counter).toFixed(2),
			backes: data.base_code,
			names: pislia,
			docum1: itemName1[1],
			docum2: itemName2[1],
		}
	}
	function handleSubmit(evt) {
		evt.preventDefault()
		const form = evt.target.elements
		asyncRespApi(
			form.Dog.value,
			form.Pislias.value,
			form.counter.value,
			form.Dog.value,
			form.Pislias.value
		)
			.then((data) => {
				setValue(data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className='convetrer-cart'>
			<div className='name-value'>
				<p>{value.backes}</p>
				<p>{value.names}</p>
			</div>
			<div className='name-value'>
				<p>{value.docum1}</p>
				<p>{value.docum2}</p>
			</div>
			<div className='box-value-inner'>
				<form onSubmit={handleSubmit} className='left-form'>
					<input
						defaultValue='USD'
						name='Dog'
						placeholder='назва валюти до'
						type='text'
					/>
					<input
						defaultValue='AED'
						name='Pislias'
						placeholder='назва валюти після'
						type='text'
					/>
					<input placeholder='Введіть кількість' type='text' name='counter' />
					<button>Конвертувати</button>
				</form>
				<b>{'=>'}</b>
				<div className='right-form'>
					<p>{value.afters}</p>
				</div>
			</div>
		</div>
	)
}

export default Converter
