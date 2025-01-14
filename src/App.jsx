import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Link } from 'react-router-dom'
import { changeTheme } from './redux/Slices/ThemeBtnSlice'

function App() {
	const dispatch = useDispatch()
	const theme = useSelector((state) => {
		return state.ThemeBtn.theme
	})
	return (
		<div className={`container ${theme === 'light' ? 'light' : 'dark'}`}>
			<header>
				<nav>
					<ul
						className={`header_list ${
							theme === 'light' ? 'lightList' : 'darkList'
						}`}
					>
						<li>
							<Link to='/'>Counter</Link>
						</li>
						<li>
							<Link to='/list'>List</Link>
						</li>
						<li>
							<Link to='/timer'>Timer</Link>
						</li>
						<li>
							<Link to='/converter'>Converter</Link>
						</li>
						<li>
							<Link to='/calculator'>Calculator</Link>
						</li>
						<li>
							<Link to='/weather'>Weather</Link>
						</li>
						<li>
							<button
								onClick={() => {
									dispatch(changeTheme())
								}}
								className={`theme-checkbox ${
									theme === 'light' ? 'lightBtn' : 'darkBtn'
								}`}
							></button>
						</li>
					</ul>
				</nav>
			</header>
			<AppRoutes />
		</div>
	)
}

export default App
