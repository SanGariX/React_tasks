import { useState } from 'react'

function List() {
	const [list, setList] = useState([])
	const [filter, setFilter] = useState('all')
	function handlecheckbox(id) {
		const example = list.map((item) =>
			item.id === id ? { ...item, done: !item.done } : item
		)
		setList(example)
	}
	function handleKeyDown(evt) {
		if (evt.code === 'Enter') {
			const input = evt.target.value
			if (input) {
				setList([...list, { id: Date.now(), text: input, done: false }])
				evt.target.value = ''
			}
		}
	}
	function handleFilterChange(evt) {
		setFilter(evt)
	}
	const filterResultMurkup = list.filter(({ done }) => {
		if (filter === 'done') {
			return done
		} else if (filter === 'not-done') {
			return !done
		}
		return true
	})
	return (
		<div className='App'>
			<div className='input-box'>
				<input
					onKeyDown={(evt) => {
						handleKeyDown(evt)
					}}
					placeholder='New task'
					className='input'
				/>
				<button
					className='filter-btn'
					onClick={() => handleFilterChange('done')}
				>
					Done
				</button>
				<button
					className='filter-btn'
					onClick={() => handleFilterChange('not-done')}
				>
					Not Done
				</button>
				<button
					className='filter-btn'
					onClick={() => handleFilterChange('all')}
				>
					All
				</button>
			</div>
			<div className='box-list'>
				<ul className='box_list'>
					{filterResultMurkup.map(({ text, done, id }) => (
						<li key={id} className={`item-list ${done ? 'checked' : ''}`}>
							<p>{text}</p>
							<input
								onChange={() => {
									handlecheckbox(id, done)
								}}
								checked={done}
								type='checkbox'
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default List
