//! import root
import Vue from 'vue'
import Vuex from 'vuex'

//! import Modules
import product from './modules/product'
import user from './modules/user'
import category from './modules/category'
import review from './modules/review'
import cart from './modules/cart'
import options from './modules/options'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		product,
		user,
		category,
		review,
		cart,
		options,
	},
})