<template>
	<div class="filter">
		<h2 class="filter__title" @click="show">
			<i
				:class="{ rotate: categories }"
				class="filter__icon icon-keyboard_arrow_right"
			></i>
			{{ title }}
			<i
				class="icon-reset icon-cross"
				v-on:click.stop="onReset"
			></i>
		</h2>
		<transition name="fade">
			<div v-show="categories" class="filter__wrapper">
				<input
                v-on:change="onPriceFilter"
					type="text"
					v-model.lazy.number="minPrice"
					min="0"
					max="1500"
					id="input-min"
					class="filter__input-number"
				/>
				<input
                v-on:change="onPriceFilter"
					type="text"
					v-model.lazy.number="maxPrice"
					min="0"
					max="1500"
					id="input-max"
					class="filter__input-number"
				/>
				<input
                v-on:change="onPriceFilter"
					v-model.number="minPrice"
					type="range"
					min="0"
					max="1500"
					id="range-min"
					class="filter__range"
				/>
				<input
                v-on:change="onPriceFilter"
					v-model.number="maxPrice"
					type="range"
					min="0"
					max="1500"
					id="range-max"
					class="filter__range"
				/>
				<div class="slider">
					<div class="slider__track"></div>
					<div
						:style="`left:${(minPrice / 1500) * 100}%;right:${
							100 - (maxPrice / 1500) * 100
						}%;`"
						class="slider__range"
					></div>
					<div
						:style="`left:${(minPrice / 1500) * 100}%;`"
						class="slider__thumb slider__thumb--left"
					></div>
					<div
						:style="`right:${100 - (maxPrice / 1500) * 100}%;`"
						class="slider__thumb slider__thumb--right"
					></div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		title: String,
	},
	data() {
		return {
			categories: true,
			priceFilter: {
                minPrice: null,
                maxPrice: null,
            },
			minPrice: 100,
			maxPrice: 1500,
		};
	},
	computed: {
		...mapGetters(["OPTIONS", "BRENDS"]),
	},
	methods: {
        onPriceFilter() {
            this.priceFilter.minPrice = this.minPrice;
            this.priceFilter.maxPrice = this.maxPrice;
			this.$emit("filterPrice", this.priceFilter);
		},
		show() {
			this.categories = !this.categories;
		},
		onReset() {
			this.minPrice =  100;
			this.maxPrice =  1500;
			this.onPriceFilter();
		}
	},
	watch: {
		minPrice() {
			if (this.minPrice + 10 >= this.maxPrice)
				this.minPrice = this.maxPrice - 10;
		},
		maxPrice() {
			if (this.maxPrice - 10 <= this.minPrice)
				this.maxPrice = this.minPrice + 10;
		},
	},
};
</script>

<style lang="scss" scoped>
.filter {
	padding: 30px 60px;
	&__title {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		position: relative;
		color: $black-secondary;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		margin-bottom: 20px;
	}
	&__icon {
		font-size: $title-primary;
		position: absolute;
		top: 50%;
		left: -20px;
		transform: translateY(-50%);
		transition: transform 100ms ease;
		&.rotate {
			transform: translateY(-50%) rotate(90deg);
		}
	}
	.icon-reset {
		font-size: 10px;
		color: $grey-secondary;
	}
	&__range {
		width: 100%;
	}
}

.filter {
	&__wrapper {
        max-height: 500px;
		width: 100%;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	&__input-number {
		width: 120px;
		height: 40px;
		border: 1px solid #d8d8d8;
		background-color: $white-primary;
		border-radius: 25px;
		padding: 0 15px;
		color: $grey-primary;
		font-family: $poppins-regular;
		font-size: $text-primary;
		margin-bottom: 30px;
	}
}

.slider {
	position: relative;
	height: 5px;
	z-index: 1;
	width: 100%;
	&__track {
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #e6e6e6;
		border-radius: 20px;
	}
	&__range {
		position: absolute;
		z-index: 2;
		top: 0;
		bottom: 0;
		left: 25%;
		right: 25%;
		background-color: $blue-primary;
	}
	&__thumb {
		cursor: pointer;
		width: 20px;
		height: 20px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		background-color: $white-primary;
		position: absolute;
		border-radius: 50%;
		z-index: 3;
		&--left {
			transform: translate(-5px, -10px);
		}
		&--right {
			transform: translate(10px, -10px);
		}
	}
}

input[type="range"] {
	top: 65px;
	cursor: pointer;
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 0;
}
input[type="range"]::-webkit-slider-thumb {
	pointer-events: all;
	width: 30px;
	height: 30px;
	border-radius: 0;
	border: 0 none;
	background-color: red;
	-webkit-appearance: none;
}

.fade-leave-active {
	transition: padding 500ms, max-height 500ms ease-in-out, opacity 300ms ease;
}
.fade-enter-active {
	transition: padding 500ms, max-height 500ms ease-in-out,
		opacity 300ms ease-in 150ms;
}
.fade-enter,
.fade-leave-to {
	max-height: 0px;
	opacity: 0;
	padding: 0;
}
</style>