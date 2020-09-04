import Axios from 'axios'

export default {
	state: () => ({
		users: [],
	}),
	mutations: {
		fetchToUsers(state, data) {
			state.users = data
		},
	},
	actions: {
		fetchFromDB({ commit }) {
			Axios.get('http://localhost:3000/users')
				.then((res) => {
					commit('fetchToUsers', res.data)
				})
				.catch((error) => console.log(error))
		},
	},
	getters: {
		USERS: (state) => {
			return state.users
		},
		USERNAMEFROMID: (state) => (id) => {
			let res = state.users.filter((user) => user.id === id)
			return res[0]
		},
	},
}
