import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		users: [],
		products: [],
		count: 555,
		categories: [],
		reviews: [],
	},
	mutations: {
		increment(state) {
			state.count++
		},
		fetchToProducts(state, data) {
			state.products = data
		},
		fetchToUsers(state, data) {
			state.users = data
		},
		fetchToCategories(state, data) {
			state.categories = data
		},
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
			Axios.get('http://localhost:3000/products')
				.then((res) => {
					commit('fetchToProducts', res.data)
				})
				.catch((error) => console.log(error))
			Axios.get('http://localhost:3000/users')
				.then((res) => {
					commit('fetchToUsers', res.data)
				})
				.catch((error) => console.log(error))
			Axios.get('http://localhost:3000/categories')
				.then((res) => {
					commit('fetchToCategories', res.data)
				})
				.catch((error) => console.log(error))
			Axios.get('http://localhost:3000/reviews')
			.then((res) => {
				commit('fetchToReviews', res.data)
			})
			.catch((error) => console.log(error))
		},
		addProduct() {
			axios.post('http://localhost:3000/testPost', {
				firstName: 'Fred',
				lastName: 'Flintstone'
			  })
			  .then(function (response) {
				console.log(response);
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
	},
	getters: {
		PRODUCTS: (state) => {
			return state.products
		},
		USERS: (state) => {
			return state.users
		},
		ONEPRODUCT: (state) => {
			return state.product
		},
		PRODUCTGETID: (state) => (id) => {
			let res = state.products.filter((products) => products.id === id)
			return res[0]
		},
		REVIEWSGETID: (state) => (id) => {
			let res = state.reviews.filter((reviews) => reviews.productid === id)
			return res
		},
		CATEGORIES: (state) => {
			return state.categories
		},
		SHOWCOUNT: (state) => {
			return state.count
		},
		USERNAMEFROMID: (state) => (id) => {
			let res = state.users.filter((user) => user.id === id)
			return res[0]
		},
	},
})

export default store
