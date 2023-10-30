import axios from 'axios'
const searchImgs = async () => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID fcHQDdSdunqe69fWZe3b0cGsjOaVy420YOzPHF5Gxrg',
		},
		params: {
			query: 'forests',
		},
	})
	console.log(response)
	return response
}

export default searchImgs
