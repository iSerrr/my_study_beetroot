import Axios from 'axios'

export default {
	state: () => ({ categories: [] }),
	mutations: {
		fetchToCategories(state, data) {
			state.categories = data
		},
	},
	actions: {
		fetchFromDB({ commit }) {
			Axios.get('http://localhost:3000/categories')
				.then((res) => {
					commit('fetchToCategories', res.data)
				})
				.catch((error) => console.log(error))
		},
	},
	getters: {
		CATEGORIES: (state) => {
			return state.categories
		},
	},
}
