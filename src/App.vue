<template>
	<div id="app">
		<template v-if="PRODUCTS.length > 0">
			<template v-if="true">
				<testPanel v-bind:products="PRODUCTS" />
				<sectionHeader v-bind:slider="isHome" />
			</template>
			<template v-if="true">
				<sectionMain />
			</template>
			<template v-if="true">
			<sectionSubscribe />
			<sectionFooter />
			</template>
		</template>
	</div>
</template>

<script>
import sectionHeader from "@/components/header/header.vue";
import sectionMain from "@/components/main";
import sectionSubscribe from "@/components/subscribe";
import testPanel from "@/test-components/v-test-menu";
import sectionFooter from "@/components/footer/footer";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import router from "./route/index";

export default {
	components: {
		testPanel,
		sectionHeader,
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
		...mapGetters(["PRODUCTS"]),
		isHome: function () {
			if (this.$route.path == "/") return true;
			return false;
		},
	},
	name: "App",
	async mounted() {
		await this.fetchFromDB();
	},
};
</script>

<style lang="scss">
body {
	width: 100%;
	height: 100vh;
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