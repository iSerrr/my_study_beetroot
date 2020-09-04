<template>
	<div class="catalog">
		<div class="catalog__head">
			<productCardMiddle v-bind:product="PRODUCTGETID('p292b99d')" />
			<productCardSale v-bind:product="PRODUCTGETID('p2d07368')" />
		</div>
		<div class="catalog__side-bar">
			<catalogFilterCategory
				v-on:filterCategories="filter"
				v-bind:title="'categories'"
				v-bind:category="$route.params.category"
				v-bind:active="filterOptions.categories"
			/>
			<catalogFilterPrice
				v-on:filterPrice="filterPrice"
				v-bind:title="'price'"
			/>
			<catalogFilterBrand
				v-on:filterBrands="filterBrand"
				v-bind:title="'brand'"
			/>
			<catalogFilterColor
				v-on:filterColors="filterColor"
				v-bind:title="'color'"
			/>
			<catalogFilterSize
				v-on:filterSizes="filterSize"
				v-bind:title="'size'"
			/>
		</div>
		<div ref="content" class="catalog__content">
			<transition name="smoke">
				<ul v-show="listShow" class="catalog__list">
					<li
						v-for="(product, index) in filteredData.slice(
							range,
							range + 12
						)"
						:key="index"
						v-bind:style="`height:${catalogItemHeight}px;`"
						class="catalog__item"
					>
						<productCardSmall v-bind:product="product" />
					</li>
				</ul>
			</transition>
			<p v-if="filteredData.length < 1" class="error">There are no products matching your selection. Try changing your search criteria</p>
			<ul 
			v-if="paginationQuan > 1"
			class="pagination">
				<li
					v-for="n in paginationQuan"
					:key="n"
					class="pagination__item"
					v-on:click="changePage(n)"
					v-bind:class="{ active: n === catalogPage }"
				>
					{{ n }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import productCardMiddle from "../components/product-card-middle";
import productCardSmall from "../components/product-card-small";
import productCardSale from "../components/product-card-sale";
import catalogFilterCategory from "../components/catalogFilterCategory";
import catalogFilterBrand from "../components/catalogFilterBrand";
import catalogFilterColor from "../components/catalogFilterColor";
import catalogFilterSize from "../components/catalogFilterSize";
import catalogFilterPrice from "../components/catalogFilterPrice"

const conditionPrice = (arg, con) => {
	if (con == "" || con == "all") return true;
	return arg == con;
};

const conditionPriceArr = (arg, con) => {
	let res = false;
	if (con.length == 0 || con == null) return true;
	con.forEach((el) => {
	if (typeof el == String) {
		if (el.toLowerCase() == arg.toLowerCase()) return (res = true);
	} else {if (el == arg) return (res = true);}
	});
	return res;
};

import { mapGetters } from "vuex";
export default {
	data() {
		return {
			catalogItemHeight: null,
			catalogPage: 1,
			listShow: true,
			filterOptions: {
				categories: "",
				brand: [],
				color: [],
				size: [],
				price:{
					minPrice:0,
					maxPrice:1500,
				},
			},
		};
	},
	components: {
		productCardMiddle,
		productCardSmall,
		productCardSale,
		catalogFilterCategory,
		catalogFilterBrand,
		catalogFilterColor,
		catalogFilterSize,
		catalogFilterPrice
	},

	computed: {
		...mapGetters(["PRODUCTSGETCATEGORY", "PRODUCTGETID"]),

		filteredData: function () {
			let options = this.filterOptions.categories;
			let brand = this.filterOptions.brand;
			let color = this.filterOptions.color;
			let size = this.filterOptions.size;
			let priceMin = this.filterOptions.price.minPrice;
			let priceMax = this.filterOptions.price.maxPrice;
			return this.PRODUCTSGETCATEGORY(this.$route.params.category).filter(
				function (number) {
					return (
						conditionPrice(number.style, options) &&
						conditionPriceArr(number.brand, brand) &&
						conditionPriceArr(number.options.colors[0], color) &&
						conditionPriceArr(number.options.sizes[0], size) &&
						(number.price >= priceMin && number.price <= priceMax)
						
					);
				}
			);
		},
		range: function () {
			return (this.catalogPage - 1) * 12;
		},
		paginationQuan: function () {
			return Math.ceil(this.filteredData.length / 12);
		},
	},
	methods: {
		changePage(page) {
			this.listShow = false;

			setTimeout(() => {
				this.catalogPage = page;
				this.listShow = true;
			}, 400);
		},
		filter(arg) {
			this.filterOptions.categories = arg;
			this.catalogPage = 1;
		},
		filterBrand(arg) {
			this.filterOptions.brand = arg;
			this.catalogPage = 1;
		},
		filterColor(arg) {
			this.filterOptions.color = arg;
			this.catalogPage = 1;
		},
		filterSize(arg) {
			this.filterOptions.size = arg;
			this.catalogPage = 1;
		},
		filterPrice(arg) {
			this.filterOptions.price = arg;
			this.catalogPage = 1;
		}
	},
	watch: {
		$route() {
			if (this.$route.params.id == "all") {
				this.filterOptions.categories = "";
				return;
			}
			this.filterOptions.categories = this.$route.params.id;
		},
	},
	mounted() {
		this.catalogItemHeight = this.$refs.content.clientWidth / 3;
		window.addEventListener("resize", () => {
			this.catalogItemHeight = this.$refs.content.clientWidth / 3;
		});
	},
};
</script>

<style lang="scss" scoped>
.error {
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	font-size: 30px;
	font-family: $poppinsSemiBold;
	line-height: 55px;
	color: rgb(85, 85, 85);
}
.icon-reset {
		font-size: 10px;
		color: #bbbbbb;
	}
.catalog {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	&__head {
		width: 100%;
		height: 375px;
		overflow: hidden;
		display: flex;
		& > *:first-child {
			width: 67%;
		}
		& > *:last-child {
			width: 33%;
		}
	}
	&__side-bar {
		width: 25%;
		height: auto;
		border: 0.5px solid #e6e6e6;
	}
	&__content {
		width: 75%;
	}
	&__content {
		position: relative;
	}
	&__list {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	&__item {
		border: 0.5px solid #e6e6e6;
		&:hover {
			box-shadow: 0 5px 10px rgba(29, 52, 166, 0.55);
			border: none;
			z-index: 5;
		}
	}
}
.pagination {
	width: 100%;
	height: 75px;
	display: flex;
	justify-content: center;
	&__item {
		cursor: pointer;
		height: 100%;
		width: 75px;
		@include flex_row_center;
		border: 0.5px solid #e6e6e6;
		&.active {
			box-shadow: 0 5px 20px rgba(58, 84, 214, 0.55);
			background-color: $blueDefault;
			color: #ffffff;
			border-color: transparent;
		}
	}
}
.smoke-enter-active,
.smoke-leave-active {
	transition: opacity 500ms cubic-bezier(0.67, 0.12, 0, 1.1);
}
.smoke-enter,
.smoke-leave-to {
	opacity: 0;
}
</style>