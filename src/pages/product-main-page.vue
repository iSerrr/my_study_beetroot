<template>
	<ul 
	v-if="product"
	class="product-page">
		<li class="product-page__card">
			<productCardFull v-bind:productP="product" />
		</li>
		<li class="product-page__nav-bar">
			<productNavBar />
		</li>
		<li v-if=(product.id) class="product-page__content">
			<productReviews v-bind:productId="product.id" />
			<div></div>
			<div></div>
		</li>
		<li class="product-page__other">
			<productPopular />
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";

import productCardFull from "../components/product-card-full.vue";
import productNavBar from "../components/product-nav-bar.vue";
import productReviews from "../components/product-reviews.vue";
import productPopular from "../components/product-popular.vue";

export default {
	components: {
		productCardFull,
		productNavBar,
		productReviews,
		productPopular,
	},
	props: {
		productT: {
			type: Object, 
			default: () => {}
			},
	},
	data() {
		return {
			avrRating: 0,
			quantityReviews: 0,
			imgSelect: 1,
			count: 1,
			sizeSelect: null,
		};
	},
	computed: {
		product: function () {
			return this.PRODUCTGETID(this.$route.params.id);
		},
		variant: function () {
			return this.PRODUCTGETID(this.$route.params.id);
		},
		...mapGetters(["PRODUCTGETID"]),
	},
};
</script>

<style lang="scss">

.product-page {
	width: 100%;
	&__card {
		width: 100%;
	}
	&__nav-bar {
		width: 100%;
		height: 75px;
		border: 1px solid #ebebeb;
		border-left: none;
		border-right: none;
	}
	&__content {
	}
}
</style>