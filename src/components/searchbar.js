import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('')
	const handleformSubmit = (event) => {
		event.preventDefault()
		onSubmit(term)
	}
	const handleChange = (event) => {
		setTerm(event.target.value)
	}
	return (
		<div className="bar">
			<form onSubmit={handleformSubmit}>
				<label>Search Image:</label>
				<input className="searchitem" value={term} onChange={handleChange} />
			</form>
		</div>
	)
}

export default SearchBar
