import { useState } from 'react'

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('forests')
	const handleformSubmit = (event) => {
		event.preventDefault()
		onSubmit('forests')
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
