import Axios from 'axios'

export default {
	state: () => ({
		products: [],
		brands: [],
	}),
	mutations: {
		fetchToProducts(state, data) {
			state.products = data
		},
		createBrandList(state) {
			state.products.forEach((element) => {
				if (!state.brands.includes(element.brand, 0)) state.brands.push(element.brand)
			})
		},
		createBrandList(state) {
			state.products.forEach((element) => {
				if (!state.brands.includes(element.brand, 0)) state.brands.push(element.brand)
			})
		},
	},
	actions: {
		fetchFromDB({ commit }) {
			Axios.get('http://localhost:3000/products')
				.then((res) => {
					commit('fetchToProducts', res.data)
					commit('createBrandList')
				})
				.catch((error) => console.log(error))
		},
		addProduct() {
			Axios.post('http://localhost:3000/testPost', {
				firstName: 'Fred',
				lastName: 'Flintstone',
			})
				.then(function(response) {
					console.log(response)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
	},
	getters: {
		PRODUCTS: (state) => {
			return state.products
		},
		ONEPRODUCT: (state) => {
			return state.product
		},
		PRODUCTGETID: (state) => (id) => {
			let res = state.products.filter((products) => products.id === id)
			return res[0]
		},
		PRODUCTSGETCATEGORY: (state) => (category) => {
			let res = state.products.filter((products) => products.category === category)
			return res
		},
		BRENDS: (state) => {
			return state.brands
		},
	},
}
