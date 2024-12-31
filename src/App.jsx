import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Link } from 'react-router-dom'

function App() {
	return (
		<div className='container'>
			<header>
				<nav>
					<ul className='header_list'>
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
					</ul>
				</nav>
			</header>
			<AppRoutes />
		</div>
	)
}

export default App
