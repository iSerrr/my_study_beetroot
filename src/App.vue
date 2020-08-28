<template>
	<div id="app">
		<testPanel
		v-bind:products="PRODUCTS"
		/>
		<Header />
		<sectionMain/>
		<sectionSubscribe/>
		<sectionFooter/>

	</div>
</template>

<script>
import Header from "./v-components/v-section-header.vue";
import sectionMain from "./v-components/v-section-main"
import sectionSubscribe from "./v-components/v-section-subscribe"
import testPanel from "./test-components/v-test-menu"
import sectionFooter from './v-components/v-section-footer'

import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import router from "./v-route/index";

export default {
	components: {
		testPanel,
		Header,
		sectionMain,
		sectionSubscribe,
		sectionFooter,
	},
	data() {
		return {
			classClose: false,
			prod: null,
			testMenuActive: false,
		};
	},
	methods: {
		...mapActions(["fetchFromDB", "addProduct"]),
		
	},
	computed: {
		...mapGetters(["PRODUCTS", "SHOWCOUNT"]),
	},
	name: "App",
	async mounted() {
		this.fetchFromDB();
	},
};
</script>

<style lang="scss">
@import "scss/main.scss";

body {
	width: 100%;
	height: 100vh;
	color: orange;
}
#app {
	width: 100%;
	height: 100%;
}
.centred {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	& > ul {
		margin-bottom: 30px;
	}
}
</style>