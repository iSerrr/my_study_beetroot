<template>
	<div class="catalog">
		<div class="catalog__head">
			<productCardMiddle v-bind:product="PRODUCTGETID('p292b99d')" />
			<productCardSale v-bind:product="PRODUCTGETID('p2d07368')" />
			<div @click="showsFilter" class="catalog__mobile-filter"><i class="icon-filter"></i></div>
		</div>
		<div 
			:class="{ isActive: showFilter }" 
			class="catalog__side-bar">
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
						class="catalog__item"
					>
						<productCardSmall v-bind:product="product" />
					</li>
				</ul>
			</transition>
			<p v-if="filteredData.length < 1" class="error">
				There are no products matching your selection. Try changing your
				search criteria
			</p>
			<ul v-if="paginationQuan > 1" class="pagination">
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
import productCardMiddle from "@/components/product-cards/product-card-middle";
import productCardSmall from "@/components/product-cards/product-card-small";
import productCardSale from "@/components/product-cards/product-card-sale";
import catalogFilterCategory from "@/components/catalog/catalogFilterCategory";
import catalogFilterBrand from "@/components/catalog/catalogFilterBrand";
import catalogFilterColor from "@/components/catalog/catalogFilterColor";
import catalogFilterSize from "@/components/catalog/catalogFilterSize";
import catalogFilterPrice from "@/components/catalog/catalogFilterPrice";

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
		} else {
			if (el == arg) return (res = true);
		}
	});
	return res;
};

import { mapGetters } from "vuex";
export default {
	data() {
		return {
			showFilter: false,
			catalogItemHeight: null,
			catalogPage: 1,
			listShow: true,
			filterOptions: {
				categories: "",
				brand: [],
				color: [],
				size: [],
				price: {
					minPrice: 0,
					maxPrice: 1500,
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
		catalogFilterPrice,
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
						number.price >= priceMin &&
						number.price <= priceMax
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
		},
		showsFilter() {
			this.showFilter = !this.showFilter;
		},
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
		// this.catalogItemHeight = this.$refs.content.clientWidth / 2;
		// window.addEventListener("resize", () => {
		// 	this.catalogItemHeight = this.$refs.content.clientWidth / 2;
		// });
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
	font-family: $poppins-semi-bold;
	line-height: 55px;
	color: rgb(85, 85, 85);
}
.icon-reset {
	font-size: 10px;
	color: $grey-secondary;
}
.catalog {
	overflow: hidden;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	@include mobile {
		flex-direction: column;
	}
	&__mobile-filter {
		cursor: pointer;
		font-size: 35px;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 75px;
		padding: 0 15px;
	}
	&__head {
		width: 100%;
		overflow: hidden;
		display: flex;
		& > *:nth-child(2) {
			width: 33%;
		}
		& > *:last-child {
			display: none;
		}
		@include mobile {
			& > * {
				display: none;
			}
			& > *:last-child {
				display: flex;
			}
			width: 100%;
		}
		@include tablets {
			& > * {
				display: none;
			}
			& > *:last-child {
				display: flex;
			}
			width: 100%;
		}

		& > *:first-child {
			width: 67%;
			@include mobile {
				width: 100%;
			}
			@include tablets {
				width: 100%;
			}
		}
	}
	&__side-bar {
		width: 25%;
		min-width: 300px;
		height: auto;
		border: 0.5px solid #e6e6e6;
		background-color: $white-primary;
		overflow: hidden;
		@include mobile {
			max-height: 0;
			width: 100%;
			transition: max-height 500ms ease-in-out;
			&.isActive {
			max-height:2000px;
			}
		}
		@include tablets {
			max-height: 0;
			width: 100%;
			transition: max-height 500ms ease-in-out;
			&.isActive {
			max-height:2000px ;
			}
		}
	}
	&__content {
		max-width: calc(100% - 300px);
		width: 75%;
		@include mobile {
			max-width: initial;
			width: 100%;
		}
		@include tablets {
			max-width: initial;
			width: 100%;
		}
	}
	&__content {
		position: relative;
	}
	&__list {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		@include mobile {
			grid-template-columns: repeat(2, 1fr);
		}
		@include tablets {
			grid-template-columns: repeat(2, 1fr);
		}
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
			background-color: $blue-primary;
			color: $white-primary;
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