<template>
	<div class="slider__wrapper">
		<div ref="slider" class="slider__conteiner">
			<div
				v-bind:style="`transform: translateX(${slideTransform}px);`"
				class="slider__slide"
			>
				<img
					v-for="i in product.quanImg"
					:key="i"
					v-bind:src="require('../assets/images/products/'+ product.id + '/' + variant + '/' + i +'.webp')"
					alt="photo"
					class="slider__img"
				/>
			</div>
		</div>
		<ul class="slider__gallery-list">
			<li
				v-for="i in product.quanImg"
				:key="i"
				v-bind:class="{
					active: i == itemSelect,
					close: classNameClose,
				}"
				class="slider__gallery-item"
			>
				<img
					class="slider__gallery-img"
					v-bind:src="require('../assets/images/products/'+ product.id + '/' + variant + '/' + i +'.webp')"
					alt="other"
					v-on:click="currentSlide(i)"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
		photo: Object,
		variant: String,
		classNameClose: String,
	},
	data() {
		return {
			itemSelect: 1,
			slideWidth: null,
			slideTransform: null,
			count: 0,
		};
	},
	methods: {
		currentSlide(slide) {
			this.count = slide - 1;
			this.slideTransform = -this.slideWidth * this.count;
			this.itemSelect = slide;
		},
	},
	mounted() {
		setTimeout(() => {
			this.slideWidth = this.$refs.slider.clientWidth;
		}, 10);
		window.addEventListener("resize", () => {
			this.slideWidth = this.$refs.slider.clientWidth;
			this.slideTransform = -this.slideWidth * this.count;
		});
	},
	watch: {
		variant() {
			this.currentSlide(1);
		},
	},
};
</script>

<style lang='scss'>
.slider {
	&__wrapper {
		position: relative;
		min-width: 370px;
		max-height: 500px;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__conteiner {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	&__slide {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
		transition: 350ms ease-in-out;
		transition-duration: 800ms;
	}
	&__img {
		width: 100%;
	}
	&__gallery-list {
		width: calc(60 / 625 * 100%);
		min-width: 40px;
		flex-shrink: 0;
		margin-left: (65 / 625 * 100%);
		overflow: hidden;
	}
	&__gallery-item {
		transform: translateX();
		cursor: pointer;
		border: 1px solid rgb(201, 201, 201);
		border-bottom: 2px solid rgb(201, 201, 201);
		width: 100%;
		transition: all 200ms;
		background-color: #fff;
		animation: galleryList 500ms both;
		animation-delay: 1500ms;
		position: relative;
		opacity: 0.85;
		&:nth-child(2) {
			animation-delay: 1700ms;
		}
		&:nth-child(3) {
			animation-delay: 1900ms;
		}
		&:nth-child(4) {
			animation-delay: 2100ms;
		}
		&:nth-child(5) {
			animation-delay: 2300ms;
		}
		&.close {
			animation: galleryListClose 500ms both;
			animation-delay: 0;
		}
		&.active {
			z-index: 2;
			border-bottom: 2px solid rgb(255, 153, 0);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
			opacity: unset;
		}
	}
	&__gallery-img {
		width: 100%;
	}
}
@keyframes galleryList {
	0% {
		transform: translateX(-117%);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes galleryListClose {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-117%);
	}
}
</style>