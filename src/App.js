import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImgs from './api'

function App() {
	const [images, setimages] = useState([])
	const handleSubmit = async (term) => {
		const result = await searchImgs(term)
		setimages(result)
	}
	return (
		<div>
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
