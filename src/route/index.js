import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../pages/home')
const catalog = () => import('../pages/catalog')
const productPage = () => import('../pages/product-main-page')
const cart = () => import('../pages/cart')
const contacts = () => import('../pages/contacts')

//? Only test mode files
import testUploadPage from '../test-components/v-test-upload-page'
import test from '../test-components/test-grid'
import addReviews from '../test-components/add-reviews'
import testAddProduct from '../test-components/add-new-product'
import testSlider from '../test-components/test-slider'

const routes = [
	{ path: '/page/:id', name: 'page', component: productPage },
	{ path: '/', name: 'home', component: home},
	{ path: '/catalog/:category/:id', name: 'catalog', component: catalog },
	{ path: '/cart', name: 'cart', component: cart },
	{ path: '/contacts', name: 'contacts', component: contacts },
	
	//? Only test mode files
	{ path: '/addreviews', name: 'addReviews', component: addReviews },
	{ path: '/test', name: 'test', component: test },
	{ path: '/test-upload', name: 'upload', component: testUploadPage },
	{ path: '/test-add-product', name: 'testAddProduct', component:testAddProduct },
	{ path: '/test-slider', name: 'testSlider', component:testSlider },
]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
})

export default router