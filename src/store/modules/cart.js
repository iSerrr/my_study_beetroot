export default {
	state: () => ({
		cart: [],
	}),
	mutations: {
		cartChangeQuantity(state, obj) {
			state.cart[obj.index].quantity = obj.value
		},
		cartProductRemove(state, index) {
			state.cart.splice(index, 1)
		},
		addToCart(state, product) {
			console.log(product);
			let res = state.cart.findIndex((el) => el.productId == product.productId)
			if (res !== -1) {
				state.cart[res].quantity += product.quantity
			} else {
				state.cart.push(product)
			}
		},
	},
	getters: {
		CART: (state) => {
			return state.cart
		},
	},
}
