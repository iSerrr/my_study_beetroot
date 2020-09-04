<template>
	<div class="cart__checkout">
		<ul class="cart__product-list">
			<li
				v-for="(item, index) in CART"
				:key="index"
				class="cart__product-item"
			>
				<cartProductCard
					v-bind:productIn="item"
					v-bind:index="index"
					v-on:changeQuantity="onChangeQuantity"
					v-on:productRemove="onProductRemove"
				/>
			</li>
			<li class="cart__product-item checkout">
				<i class="checkout__icon icon-clock"></i>
				<p class="checkout__desc">
					Donec vehicula vulputate vulputate praesent varius nisi
					facilisis.
				</p>
				<p class="checkout__summ-title">Total Value:</p>
				<p class="checkout__summ">$ {{ summ }}.00</p>
				<button class="checkout__reflash">
					<i class="icon-refresh"></i>
				</button>
			</li>
		</ul>
		<div class="cart__summary"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import cartProductCard from "../components/cart-product-card";
export default {
	components: {
		cartProductCard,
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters(["CART"]),
		summ: function () {
			return this.CART.reduce((sum, el) => {
				return (sum += el.price * el.quantity);
			}, 0);
		},
	},
	methods: {
		...mapMutations(["cartChangeQuantity", "cartProductRemove"]),
		onChangeQuantity(val) {
			this.cartChangeQuantity(val);
		},
		onProductRemove(val) {
			this.cartProductRemove(val);
		},
	},
};
</script>


<style lang="scss" scoped>
.cart {
	&__step-btn {
		flex-grow: 1;
		border: 1px solid #e6e6e6;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75px;
		color: #111111;
		font-family: $poppinsSemiBold;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		background-color: transparent;
		& span {
			margin: 0 20px;
			padding-top: 3px;
			color: $blueDefault;
			font-size: 20px;
		}
	}
}

.checkout {
	height: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
	&__icon {
		color: #feb312;
		font-size: 20px;
		margin-right: 20px;
	}
	&__desc {
		color: #888888;
		font-family: $poppinsRegular;
		font-size: 14px;
		margin-right: 180px;
	}
	&__summ-title {
		color: #111111;
		font-family: $poppinsRegular;
		font-size: 14px;
		margin-right: 30px;
	}
	&__summ {
		width: 140px;
		color: #2344e8;
		font-family: $poppinsMedium;
		font-size: 14px;
	}
	&__reflash {
		cursor: pointer;
		width: 50px;
		height: 50px;
		border: 1px solid #e6e6e6;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		margin-right: 70px;
	}
}
</style>