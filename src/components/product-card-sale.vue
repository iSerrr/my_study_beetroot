<template>
	<div class="middle-card">
		<span class="middle-card__label">sale</span>
		<p class="middle-card__style">{{ product.style }}</p>
		<p class="middle-card__brend">{{ product.brend }}</p>
		<p class="middle-title">{{ product.title }}</p>
		<baseButtonSecond
		v-on:onClickFromButton="goTo(product.id)"
		/>
		<img
			class="middle-card__img"
			v-bind:src="
				require('../assets/images/products/' +
					product.id +
					'/' +
					product.options.colors[0] +
					'/' +
					'new' +
					'.webp')
			"
		/>
	</div>
</template>

<script>
import baseButtonSecond from './base-button-second'
import router from "../route/index";

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
	padding: 60px;
	height: 100%;
	width: 100%;
    background: linear-gradient(135deg, #7564e2, 60%, #a394ef);
    &:hover {
        & .middle-card__img {
        transform:translateY(-50%) scale(1.2);}
    }
	&__label {
		display: inline-block;
		padding: 3px 6px;
		border-radius: 5px;
		background-color: #111111;
		color: #ffffff;
		font-family: $poppinsRegular;
		font-size: 11px;
		font-weight: 500;
		margin-bottom: 50px;
	}
	&__style {
		color: #ffffff;
		font-family: $poppinsMedium;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		margin-bottom: 20px;
	}
	&__brend {
		color: #ffffff;
		font-family: $oswaldRegular;
		font-size: 25px;
		line-height: 30px;
		margin-bottom: 3px;
	}
	&__img {
		top: 50%;
		right: 0;
		position: absolute;
		height:70%;
        transform:translateY(-50%) scale(1);
        transition: all 250ms ease-in-out;
	}
}
.middle-title {
    width: 150px;
	color: #ffffff;
	font-family: $oswaldRegular;
	font-size: 25px;
	line-height: 30px;
	margin-bottom: 45px;
}
</style>

