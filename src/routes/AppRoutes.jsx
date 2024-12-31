import { Routes, Route } from 'react-router-dom'
import Counter from '../page/home/Counter.jsx'
import List from '../page/list//List.jsx'
import Timer from '../page/timer/Timer.jsx'
import Converter from '../page/converter/Converter.jsx'
import Calculator from '../page/calculator/Calculator.jsx'
import Weather from '../page/weather/Weather.jsx'
const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Counter />} />
			<Route path='/list' element={<List />} />
			<Route path='/timer' element={<Timer />} />
			<Route path='/converter' element={<Converter />} />
			<Route path='/calculator' element={<Calculator />} />
			<Route path='/weather' element={<Weather />} />
		</Routes>
	)
}

export default AppRoutes
