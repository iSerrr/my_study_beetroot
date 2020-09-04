import Axios from 'axios'

export default {
	state: () => ({ options: {} }),
	mutations: {
		fetchToOptions(state, data) {
			state.options = data
		},
	},
	actions: {fetchFromDB({ commit }) {
       
        Axios.get('http://localhost:3000/options')
            .then((res) => {
                commit('fetchToOptions', res.data)
            })
            .catch((error) => console.log(error))
    },
    },
	getters: {
		OPTIONS: (state) => {
			return state.options
		},
	},
}