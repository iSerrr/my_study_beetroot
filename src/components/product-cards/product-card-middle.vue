<template>
	<div v-if="(product.style)" class="middle-card">
		<span class="middle-card__label">new</span>
		<p class="middle-card__style">{{ product.style }}</p>
		<p class="middle-card__brend">{{ product.brend }}</p>
		<p class="middle-title">{{ product.title }}</p>
		<baseButtonSecond
		v-on:onClickFromButton="goTo(product.id)"
		/>
		<img
			class="middle-card__img"
			v-bind:src="require(`@/assets/images/products/${product.id}/${product.options.colors[0]}/new.webp`)"
		/>
	</div>
</template>

<script>
import baseButtonSecond from '@/components/base-button-second'
import router from "@/route/index";

export default {
	components: {
		baseButtonSecond,
	},
	props: {
		product: Object,
	},
	methods: {
		goTo(id) {
			router.push({ path: '/page/' + id})
		}
	},
};
</script>

<style lang="scss" scoped>
.middle-card {
	position: relative;
	padding: calc(60 / 750 * 100%);
	height: 100%;
	width: 100%;
	background: linear-gradient(135deg, #4079e0, 60%, #60afe7);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		.middle-card__img {
			transform: translate(-50px,-50%) scale(1.2);
		}

	}
	&__label {
		text-align: center;
		width: 35px;
		display: inline-block;
		padding: 3px 6px;
		border-radius: 5px;
		background-color: $black-secondary;
		color: $white-primary;
		font-family: $poppins-regular;
		font-size: $text-primary;;
		font-weight: 500;
	}
	&__style {
		color: $white-primary;
		font-family: $poppins-medium;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.8px;
	}
	&__brend {
		color: $white-primary;
		font-family: $oswald-regular;
		font-size: 25px;
		line-height: 30px;
	}
	&__img {
		top: 50%;
		left: 45%;
		position: absolute;
		width:50%;
		transform: translate(0,-50%) scale(1);
		transition: all 250ms ease-in-out;
	}
}
.middle-title {
	color: $white-primary;
	font-family: $oswald-regular;
	font-size: 25px;
	margin-bottom: 20px;
	
}
</style>

