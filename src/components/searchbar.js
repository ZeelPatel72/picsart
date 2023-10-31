import { useState } from 'react'

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
		<div>
			<form onSubmit={handleformSubmit}>
				<input value={term} onChange={handleChange} />
			</form>
		</div>
	)
}

export default SearchBar
