<template>
	<ul class="product-card__wrapper _conteiner-1200">
		<li
			v-bind:class="classNameClose"
			class="product-card__column product-card__column--desc"
		>
			<ul class="product-card__desc">
				<li class="product-card__sub-title-coteiner">
					<p class="product-card__sub-title">{{ product.style }}</p>
				</li>
				<li class="product-card__title-conteiner">
					<h2 class="product-card__title">
						{{ product.brand }} {{ product.title }}
					</h2>
				</li>
				<li class="product-card__ratting">
					<ratingBar v-bind:numberOfStars="avrRating" />
					<p class="product-card__ratting-reviews">
						{{ quantityReviews }} Reviews
					</p>
				</li>
				<li class="product-card__option">
					<div
						v-if="(Object.keys(product.options.colors).length > 1)"
						class="options colors"
					>
						<p class="options__title">Colors:</p>
						<ul class="options__list">
							<li
								v-for="color in product.options.colors"
								:key="color"
								v-bind:style="`background-color:${color};`"
								v-on:click="changeColors(color)"
								class="options__item colors__item icon-"
								v-bind:class="{ active: color === variant }"
							></li>
						</ul>
					</div>
					<div class="options">
						<p class="options__title">Size:</p>
						<ul class="options__list">
							<li
								v-for="size in product.options.sizes"
								:key="size"
								class="options__item size__item"
								v-bind:class="{ active: size === sizeSelect }"
								v-on:click="selectedSize(size)"
							>
								{{ size }}
							</li>
						</ul>
					</div>
				</li>
				<li class="product-card__order-option">
					<div class="price">${{ product.price }}.00</div>
					<div class="count">
						<input v-model.lazy.number="count" type="number" name="" id="" />
					</div>
					<buttonMain
						v-on:addToCart="onAddToCart"
						v-bind:className="'base'"
						v-bind:value="'Buy'"
						v-bind:icon="{
							state: true,
							className: 'icon-add_shopping_cart',
						}"
					/>
				</li>
				<li class="product-cards likes">
					<p class="add-to-vish">Add to Wish List</p>
				</li>
			</ul>
		</li>
		<li
			v-bind:class="classNameClose"
			class="product-card__column product-card__column--gallery"
		>
			<div class="product-card__imgBx">
				<productSlider
					v-bind:product="product"
					v-bind:photo="product.photo"
					v-bind:variant="variant"
					v-bind:classNameClose="classNameClose"

				/>
			</div>
		</li>
	</ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import productSlider from "./product-slider.vue";
import buttonMain from "./base-button.vue";
import ratingBar from "./base-rating-bar.vue";

export default {
	components: {
		productSlider,
		buttonMain,
		ratingBar,
	},
	props: {
		productP: Object,
	},
	data() {
		return {
			classNameClose: null,
			product: [],
			variantSelect: null,
			imgSelect: 1,
			count: 1,
			sizeSelect: null,
	}},
	methods: {
		...mapMutations(['addToCart']),
		chengeImg(img) {
			this.imgSelect = img;
		},
		selectedSize(size) {
			this.sizeSelect = size;
		},
		changeColors(color) {
			this.variantSelect = color;
		},
		onAddToCart() {
			this.addToCart({
				productId: this.product.id,
				color: this.variant,
				size: this.sizeSelect,
				quantity: this.count,
			})
		},
	},
	computed: {
		...mapGetters(['REVIEWSGETID']),
		variant: function () {
			if (this.variantSelect === null)
				return this.product.options.colors[0];
			return this.variantSelect;
		},
		quantityReviews: function () {
			if (!this.REVIEWSGETID(this.product.id).length) return 0;
			return this.REVIEWSGETID(this.product.id).length;
			return this.product.reviews.length;
			
		},
		avrRating: function () {
			if (!this.REVIEWSGETID(this.product.id)) return 0;
			return (this.REVIEWSGETID(this.product.id).reduce(function (sum, current) {
					return sum + current.star;
				}, 0) / this.REVIEWSGETID(this.product.id).length
			);
		},
	},
	watch: {
		product: function () {
			this.variantSelect = null;
		},
		productP: function () {
			this.classNameClose = "close";
			setTimeout(() => {
				this.product = this.productP;
				this.classNameClose = null;
			}, 1000);
		},
	},
	beforeMount() {
		this.product = this.productP;
	}
};
</script>

<style lang="scss">

.product-card {
	&__wrapper {
		max-width: 1280px;
		max-height: 670px;
		width: 100%;
		padding: 50px 15px;
		display: flex;
		overflow: hidden;
		align-items: center;
		justify-content: center;
	}
	&__column {
		&--desc {
			width: calc(625 / 1190 * 100%);
			min-width: 366px;
			transform: translateX(-100%);
			animation: descTransform 1000ms both ease-in-out;
			animation-delay: 100ms;
			padding-right: 30px;
			&.close {
				animation: closeDesc 750ms both ease-in-out;
				animation-delay: 500ms;
			}
		}
		&--gallery {
			width: calc(625 / 1190 * 100%);
			min-width: 300px;
			transform: translateY(-115%);
			animation: imgTransform 750ms both ease-in-out;
			animation-delay: 600ms;
			&.close {
				animation: closeSlider 750ms both ease-in-out;
				animation-delay: 500ms;
			}
		}
	}
	&__desc {
	}
	&__sub-title-coteiner {
		margin-bottom: 10px;
	}
	&__sub-title {
		color: #3a54d6;
		font-family: $poppinsMedium;
		font-size: 12px;
		font-weight: 500;
		line-height: 30px;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		& span {
			font-family: sans-serif;
		}
	}
	&__title-conteiner {
		margin-bottom: 20px;
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 30px;
	}

	&__ratting {
		display: flex;
		align-items: center;
		color: rgb(194, 194, 194);
		margin-bottom: 25px;
		& .active {
			color: rgb(255, 208, 0);
		}
	}
	&__ratting-reviews {
		color: #bbbbbb;
		font-family: $poppinsRegular;
		font-size: 12px;
		margin-left: 45px;
		border-bottom: 1px dotted #bbbbbb;
	}
	&__stars {
		margin-right: 5px;
	}
	&__option {
		height: 60px;
		display: flex;
	}

	&__order-option {
		display: flex;
		align-items: center;
		margin-top: 40px;
	}

	&__imgBx {
		width: 100%;
	}
}
.options {
	&__title {
		color: #111111;
		font-family: $poppinsSemiBold;
		font-size: 12px;
		line-height: 18px;
		text-transform: uppercase;
		letter-spacing: 1.2px;
	}
	&__list {
		cursor: pointer;
		display: flex;
		width: 200px;
		padding: 15px 0 0 0;
	}
}
.colors {
	&__item {
		position: relative;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		margin-right: 20px;
		&::before {
			content: "\e901";
			position: absolute;
			color: #fff;
			font-size: 14px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: all 350ms ease-in-out;
		}
		&.active::before {
			opacity: unset;
		}
	}
}
.size {
	&__item {
		margin-right: 20px;
		color: rgb(139, 139, 139);
		color: #888888;
		font-family: $poppinsRegular;
		font-size: 14px;
		&.active {
			color: #888888;
			color: #3a54d6;
			font-family: $poppinsSemiBold;
		}
	}
}
.price {
	width: 115px;
	color: #111111;
	font-family: $poppinsSemiBold;
	font-size: 24px;
}
.count {
	margin: 0 38px;
	& input {
		outline: none;
		text-align: center;
		width: 75px;
		padding: 8px 10px;
		font-size: 18px;
		border-radius: 20px;
		border: 1px solid rgb(139, 139, 139);
	}
}
.likes {
	display: flex;
	color: rgb(180, 180, 180);
	font-size: 12px;
	margin-top: 25px;
}
.compare {
	margin-right: 35px;
}
.add-to-vish {
}
@keyframes descTransform {
	0% {
		transform: translateX(-100%);
	}
	60% {
		transform: translateX(20px);
	}
	80% {
		transform: translateX(-10px);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes closeDesc {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}
@keyframes closeSlider {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-115%);
	}
}
@keyframes imgTransform {
	0% {
		transform: translateY(-115%);
	}
	100% {
		transform: translateY(0);
	}
}
</style>