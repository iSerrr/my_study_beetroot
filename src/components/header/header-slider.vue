<template>
	<ul v-if="product" class="slider">
		<li class="slider__item fade-in" :class="{ 'fade-out': hide }">
			<p class="slider__title">
				SNKRS OF<br />
				THE WEEK
			</p>
			<img
				class="slider__img"
				v-bind:src="require(`@/assets/images/products/${product.id}/${product.options.colors[0]}/slide.webp`)"
			/>
			<p class="slider__label">
				<span>New Release</span>{{ product.title }}
			</p>
			<p class="slider__label-new">new</p>
			<div class="slider__btn">
				<router-link
					class="route__link"
					v-bind:to="'/page/' + product.id"
				>
					<baseButtonSecond />
				</router-link>
			</div>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";

import baseButtonSecond from "../base-button-second";
export default {
	components: {
		baseButtonSecond,
	},
	data() {
		return {
			hide: false,
			sliderData: ["p3813c7d", "p94e849", "pbc5060"],
			imgSlider: 1,
		};
	},
	computed: {
		...mapGetters(["PRODUCTGETID"]),
		product: function () {
			return this.PRODUCTGETID(this.sliderData[this.imgSlider - 1]);
		},
	},
	mounted() {
		const changeSlide = (par) => {
			if (par == 1) return 2;
			return 1;
		};
		setInterval(() => {
			this.hide = true;
			setTimeout(() => {
				if (this.imgSlider > this.sliderData.length - 1)
					this.imgSlider = 0;
				this.imgSlider++;
				this.hide = false;
			}, 1000);
		}, 8000);
	},
};
</script>

<style lang="scss" scoped>
.slider {
	width: 100%;
	height: 100%;
	position: relative;
	@include mobile {
		padding: 30px 15px;
	}
	&__item {
	}
	&__title {
		width: 100%;
		text-align: center;
		color: $white-primary;
		font-family: $poppins-semi-bold;
		text-transform: uppercase;
		letter-spacing: -18px;
		@include pos_50_50;
		top: 39%;
		font-size: calc(50px + 1 * 100vw / 20);
		@include mobile {
			top: 43%;
			font-size: 18vw;
			letter-spacing: -10px;
		}
	}
	&__img {
		width: 60%;
		min-width: 650px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 5;
		@include mobile {
			width: 80%;
			min-width: initial;
		}
		@include tablets {
			width: 80%;
			min-width: initial;
		}
	}
	&__label {
		overflow: hidden;
		position: absolute;
		top: 20%;
		left: 15%;
		width: 150px;
		color: $white-primary;
		font-family: $poppins-semi-bold;
		text-transform: uppercase;
		font-size: 24px;
		@include mobile {
			width: 75%;
		}
		& span {
			display: block;
			font-size: $text-primary;
			font-family: $poppins-medium;
			margin-bottom: 10px;
		}
	}
	&__btn {
		position: absolute;
		top: 75%;
		left: 15%;
		transform-origin: left;
		@include mobile {
			left: 50%;
			width: 80%;
		}
		@include tablets {
			left: 50%;
			width: 80%;
		}
	}
	&__label-new {
		position: absolute;
		top: 20%;
		left: 80%;
		display: block;
		background-color: $black-primary;
		border-radius: 5px;
		color: $white-primary;
		padding: 3px 6px;
		font-family: $poppins-regular;
		font-size: $text-primary;;
	}
}
.fade-in.slider__item {
	& .slider {
		&__title {
			animation: titleFadeIn 1000ms both;
		}
		&__img {
			animation: imgFadeIn 1000ms both 500ms;
		}
		&__label {
			animation: labelFadeIn 500ms both 1250ms;
		}
		&__btn {
			animation: btnFadeIn 500ms both 1250ms;
		}
		&__label-new {
		}
	}
}

.fade-out.slider__item {
	& .slider {
		&__title {
			animation: titleFadeOut 500ms both 250ms;
		}
		&__img {
			animation: imgFadeOut 500ms both;
		}
		&__label {
			animation: labelFadeOut 500ms both;
		}
		&__btn {
			animation: btnFadeOut 500ms both;
		}
		&__label-new {
		}
	}
}

@keyframes imgFadeIn {
	0% {
		transform: translate(-50%, -35%);
		opacity: 0;
	}
	50% {
		opacity: unset;
	}
	100% {
		opacity: unset;

		transform: translate(-50%, -50%);
	}
}
@keyframes titleFadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: unset;
	}
}
@keyframes labelFadeIn {
	0% {
		transform: translateY(-40%);
		opacity: 0;
	}
	50% {
		opacity: unset;
	}
	100% {
		opacity: unset;
		transform: translateY(0);
	}
}
@keyframes btnFadeIn {
	0% {
		transform: translate(-50%, 40%);
		opacity: 0;
	}
	50% {
		opacity: unset;
	}
	100% {
		opacity: unset;
		transform: translate(-50%, 0);
	}
}
@keyframes titleFadeOut {
	0% {
		opacity: unset;
	}
	100% {
		opacity: 0;
	}
}
@keyframes imgFadeOut {
	0% {
		transform: translate(-50%, -50%);
		opacity: unset;
	}
	25% {
		opacity: unset;
	}
	100% {
		opacity: 0;
		transform: translate(-50%, -70%);
	}
}
@keyframes btnFadeOut {
	0% {
		transform: rotate(0deg) translate(-50%, 0);
		opacity: unset;
	}
	25% {
		opacity: unset;
	}
	100% {
		opacity: 0;
		transform: rotate(15deg) translate(-100%, 100%);
	}
}
@keyframes labelFadeOut {
	0% {
		transform: rotate(0deg) translate(0);
		opacity: unset;
	}
	25% {
		opacity: unset;
	}
	100% {
		opacity: 0;
		transform: rotate(-15deg) translate(-100%, -100%);
	}
}
</style>