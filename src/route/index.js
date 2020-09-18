import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../pages/home')
const catalog = () => import('../pages/catalog')
const productPage = () => import('../pages/product-main-page')
const cart = () => import('../pages/cart')
const contacts = () => import('../pages/contacts')
const addProduct = () => import('../pages/add-product')

const routes = [
	{ path: '/page/:id', name: 'page', component: productPage },
	{ path: '/', name: 'home', component: home},
	{ path: '/catalog/:category/:id', name: 'catalog', component: catalog },
	{ path: '/cart', name: 'cart', component: cart },
	{ path: '/contacts', name: 'contacts', component: contacts },
	{ path: '/add-product', name: 'addProduct', component:addProduct },
]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
})

export default router