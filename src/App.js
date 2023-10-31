import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImgs from './api'
import './App.css'

function App() {
	const [images, setimages] = useState([])
	const handleSubmit = async (term) => {
		const result = await searchImgs(term)
		setimages(result)
	}
	return (
		<div className="app">
			<div>
				<SearchBar onSubmit={handleSubmit} />
			</div>
			<div>
				<ImageList images={images} />
			</div>
		</div>
	)
}

export default App
