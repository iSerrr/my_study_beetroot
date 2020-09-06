<template>
	<ul v-if="PRODUCTS[0].id" class="grid__conteiner">
		<li class="grid__item popular-head">
			<i class="popular-head__icon icon-Shape_93"></i>
			<h2 class="popular-head__title">popular products</h2>
			<p class="popular-head__desc">Proin hendrerit suscipit justo</p>
			<router-link class="popular-head__link" to="'/"
				>More Products</router-link
			>
		</li>
		<li
			v-for="(n, index) in rundomPos"
			:key="index"
			class="grid__item"
			v-bind:class="{ 'grid__item--x2': index == 5 }"
		>
			<router-link
				class="route__link"
				v-bind:to="'/page/' + PRODUCTS[n].id"
			>
				<template v-if="index == 5">
					<productCardMiddle
						v-bind:product="PRODUCTGETID('p292b99d')"
					/>
				</template>

				<template v-if="index !== 5">
					<productCardSmall v-bind:product="PRODUCTS[n]" />
				</template>
			</router-link>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";

import productCardMiddle from "@/components/product-cards/product-card-middle";
import productCardSmall from "@/components/product-cards/product-card-small";

export default {
	data() {
		return {
			rundomPos: [],
		};
	},
	components: {
		productCardSmall,
		productCardMiddle,
	},
	computed: {
		...mapGetters(["PRODUCTS", "PRODUCTGETID"]),
	},
	mounted() {
		const RundomNumberArray = (max) => {
			if (max == 0) max = 10;
			let testarr = [];
			while (testarr.length < 10) {
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
		@include mobile {
			grid-template-columns: repeat(2, 1fr);
		}
		@include tablets {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	&__item {
		border: 0.5px solid #e6e6e6;
		transition: transform 150ms ease;
		&:first-child {
			@include mobile {
				border: none;
			}
			@include tablets {
				border: none;
			}
		}
		&:hover {
			box-shadow: 0 5px 10px rgba(29, 52, 166, 0.55);
			border: none;
			z-index: 5;
			transform: scale(1.005);
		}

		&--x2 {
			grid-column: span 2;
			@include mobile {
				display: none;
			}
			@include tablets {
				display: none;
			}
		}
	}
}

.popular-head {
	background-color: #222222;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&__icon {
		font-size: 50px;
		color: $blueDefault;
		margin-bottom: 40px;
		@include mobile {
			font-size: 40px;
		}
	}
	&__title {
		font-family: Oswald;
		font-size: 18px;
		text-transform: uppercase;
		color: #ffffff;
		margin-bottom: 25px;
		@include mobile {
			font-size: 16px;
			margin-bottom: 15px;
		}
	}
	&__desc {
		margin-bottom: 55px;
		font-family: $poppinsRegular;
		font-size: 13px;
		color: #666666;
		@include mobile {
			font-size: 12px;
			text-align: center;
			margin-bottom: 10px;
		}
	}
	&__link {
		color: #ffffff;
		font-family: $poppinsMedium;
		font-size: 13px;
	}
}
</style>