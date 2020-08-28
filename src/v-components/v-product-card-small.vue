<template>
	<div class="small-card">
		<div class="small-card__imgBx">
			<img
				v-bind:src="
					require('../assets/images/products/'+product.id + '/' + product.options.colors[0] +'/' + 1 +'.webp')"
				alt="photo"
				class="small-card__img"
			/>
		</div>
		<div class="small-card__style">{{ product.style }}</div>
		<div class="small-card__buy">
			<ButtonMain
				v-bind:className="'reverse'"
				v-bind:value="'Buy'"
				v-bind:icon="{
					state: true,
					className: 'icon-add_shopping_cart',
				}"
			/>
			<div class="small-card__add-to-cart">
				<i class="icon-heart-o"></i>
			</div>
		</div>
		<p class="small-card__title">{{ product.brand }} {{ product.title }}</p>
		<p class="small-card__price">${{ product.price }}.00</p>
	</div>
</template>

<script>
import ButtonMain from "./v-component-button-main.vue";

export default {
	components: {
		ButtonMain,
	},

	props: {
		product: Object,
	},
};
</script>

<style lang="scss">

.small-card {
	width: 100%;
	height: 100%;
	text-decoration: none;
	position: relative;
	cursor: pointer;
	padding: calc(50 / 375 * 100%);
	& p {
		position: relative;
		z-index: 2;
	}
	&,& * {
		transition: all 200ms cubic-bezier(0.25,0.1,0.25,1);
	}
	&::before {
		opacity: 0;
		background-color: #2344e8;
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 200ms cubic-bezier(0.25,0.1,0.25,1);
	}
	&__imgBx {
		width: 100%;
	}
	&__img {
		width: 100%;
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 17px;
		margin-bottom: 10px;
	}
	&__price {
		color: #2344e8;
		font-family: $poppinsMedium;
		font-size: 14px;
	}
	&__style {
		position: absolute;
		top: 50px;
		left: 50px;
		color: #fff;
		font-family: $poppinsMedium;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		opacity: 0;
	}
	&__buy {
		width: 100%;
		padding: 0 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -75%);
		transition: all 350ms ease-in-out;
	}
	&__add-to-cart {
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 18px;
		margin-left: calc(35 / 375 * 100%);
		flex-shrink: 0;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		background-color: #4d68ec;
		transition: all 150ms ease-in-out;
		&:hover {
			border-color: #ffffff;
		}
	}
	&:hover {
		.small-card {
			&__style {
				opacity: unset;
			}
			&__title,
			&__price {
				color: #fff;
			}
			&__buy {
				visibility: visible;
				opacity: unset;
				transform: translate(-50%, -50%);
			}
		}
		&::before {
				opacity: 0.9;
			}
	}
}
</style>