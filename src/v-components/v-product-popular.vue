<template>
	<ul class="grid__conteiner">
		<li v-for="n in rundomPos" :key="n" class="grid__item">
			<router-link
					class="route__link"
					v-bind:to="'/page/' + PRODUCTS[n].id"
					>
					<productCardSmall v-bind:product="PRODUCTS[n]" />
					</router-link
				>
			
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

import productCardSmall from "./v-product-card-small.vue";
export default {
    data() {
return {
    rundomPos: [],
}
    },
	components: {
		productCardSmall,
    },
    computed: {
...mapGetters(['PRODUCTS']),
    },
	mounted() {
		const RundomNumberArray = (max) => {
			let testarr = [];
			while (testarr.length < 8) {
				let num = Math.floor(Math.random() * Math.floor(max));
				if (!testarr.includes(num, 0)) testarr.push(num);
			}
			return testarr;
		};
		this.rundomPos = RundomNumberArray(this.PRODUCTS.length);
	},
};
</script>

<style lang="scss">
.grid {
	&__conteiner {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	&__item {
		border: 1px solid rgb(236, 236, 236);
	}
}
</style>