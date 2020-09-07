<template>
	<div class="checkout">
		<ul class="checkout__list">
			<li
				v-for="(item, index) in CART"
				:key="index"
			>
				<cartProductCard
					v-bind:productIn="item"
					v-bind:index="index"
					v-on:changeQuantity="onChangeQuantity"
					v-on:productRemove="onProductRemove"
				/>
			</li>
		</ul>
		<div class="summary">
			<i class="summary__icon icon-clock"></i>
			<p class="summary__desc">
				Donec vehicula vulputate vulputate praesent varius nisi
				facilisis.
			</p>
			<p class="summary__summ-title">Total Value:</p>
			<p class="summary__summ">$ {{ summ }}.00</p>
		</div>
		<div 
		v-if=" CART.length < 1"
		class="empty">
			<div class="empty__img-box">
				<img src="@/assets/images/cart/empty-cart.webp" alt="empty" class="empty__img">
			</div>
			<h2 class="empty__title">Your cart is empty</h2>
				<p class="empty__desc">Looks like you haven't made you menu yet.</p>
				<router-link class="empty__link" :to="'/catalog/shoes/all'"
				>Back to menu</router-link
			>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import cartProductCard from "@/components/cart/cart-product-card";
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
			if (this.CART.lenght < 1) return 0;
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
.checkout {
	min-height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&__list {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
}

.summary {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	@include mobile {
		padding: 20px 15px;
		justify-content: space-between;
		align-items: baseline;
		width: 100%;
		
	}
	&__icon {
		color: #feb312;
		font-size: $title-secondary;
		margin-right: 20px;
		margin-left: 140px;
		@include mobile {
			display: none;
		}
	}
	&__desc {
		color: $grey-primary;
		font-family: $poppins-regular;
		font-size: $text-secondary;
		width: 460px;
		@include mobile {
			display: none;
		}
	}
	&__summ-title {
		color: $black-secondary;
		font-family: $poppins-regular;
		font-size: $text-secondary;
		width: 100px;
	}
	&__summ {
		width: 200px;
		color: #2344e8;
		font-family: $poppins-medium;
		font-size: $text-secondary;
	}
}

.empty {
	@include pos_50_50;
	font-family: $poppins-medium;
	display: flex;
	flex-direction: column;
	font-size: $text-primary;
	max-width: 300px;
		&__img-box {
			width: 100%;
		}
		&__img {
			width: 100%;
		}
		&__title {
			font-size: $title-primary;
			text-align: center;
			margin-bottom: 15px;
		}
		&__desc {
			text-align: center;
			margin-bottom: 15px;
			color: $grey-primary;
		}
		&__link {
			border-radius:25px;
			background-color: $blue-primary;
			padding: 15px 30px;
			text-align: center;
			color: $white-primary;
		}
}

</style>