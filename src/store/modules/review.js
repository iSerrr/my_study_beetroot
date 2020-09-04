import Axios from 'axios'

export default {
	state: () => ({ reviews: [] }),
	mutations: {
		fetchToReviews(state, data) {
			state.reviews = data
		},
		AddRevies(state, arr) {
			console.log(`arr - ${arr}`)
			console.log(`вставити у`)
			state.products[0].reviews = []
			state.products[0].reviews = arr
			console.log(state.products[0].reviews)
		},
	},
	actions: {
		fetchFromDB({ commit }) {
			Axios.get('http://localhost:3000/reviews')
				.then((res) => {
					commit('fetchToReviews', res.data)
				})
				.catch((error) => console.log(error))
		},
	},
	getters: {
		REVIEWSGETID: (state) => (id) => {
			let res = state.reviews.filter((reviews) => reviews.productid === id)
			return res
		},
	},
}
