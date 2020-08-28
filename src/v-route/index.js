import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import page from '../v-pages/v-product-main-page.vue'
import test from '../test-components/test-grid.vue'
import addReviews from '../test-components/add-reviews.vue'
import testAddProduct from '../test-components/add-new-product'

//? Only test mode files
import testUploadPage from '../test-components/v-test-upload-page.vue'

const routes = [
	{ path: '/page/:id', name: 'page', component: page },
	{ path: '/addreviews', name: 'addReviews', component: addReviews },

	//? Only test mode files
	{ path: '/test', name: 'test', component: test },
	{ path: '/test-upload', name: 'upload', component: testUploadPage },
	{ path: '/test-add-product', name: 'testAddProduct', component:testAddProduct },
]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
})

export default router
