<template>
	<div class="cart">
		<ul class="cart__header">
			<li
				v-for="(link, index) in tabsLink"
				:key="index"
				:class="{ active: index === page }"
				class="cart__step"
			>
				{{ link }}
			</li>
		</ul>
		<div class="cart__content">
			<component v-bind:is="currentTabComponent"></component>
			<div v-show="false" class="cart__payment"></div>
		</div>
		<div class="cart__nav-btn">
			<button
				v-on:click="onPrevTabs"
				v-show="page > 0"
				class="cart__step-btn"
			>
				<span> < </span>Prev step
			</button>
			<button
				v-show="page < 2"
				v-on:click="onNextTabs"
				class="cart__step-btn"
			>
				Next step <span> > </span>
			</button>
		</div>
	</div>
</template>

<script>
import cartCheckout from "@/components/cart/cart-checkout";
import cartProductCard from "@/components/cart/cart-product-card";
import cartShiping from "@/components/cart/cart-shipping";

export default {
	components: {
		cartCheckout,
		cartProductCard,
		cartShiping,
	},
	data() {
		return {
			tabsLink: ["Checkout", "Shipping information", "Payment"],
			tabs: [cartCheckout, cartShiping],
			page: 0,
		};
	},
	computed: {
		currentTabComponent: function () {
			return this.tabs[this.page];
		},
	},
	methods: {
		onNextTabs() {
			if (this.page > 1) return;
			this.page++;
		},
		onPrevTabs() {
			if (this.page < 1) return;
			this.page--;
		},
	},
};
</script>

<style lang="scss" scoped>
.cart {
	&__header {
		height: 75px;
		width: 100%;
		display: flex;
	}
	&__step {
		border: 1px solid #e6e6e6;
		border-right: none;
		cursor: pointer;
		width: 33.33333%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $grey-primary;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		@include mobile {
			font-size: 10px;
			text-align: center;
		}
		@include tablets {
			text-align: center;
		}
		&.active {
			border: none;
			color: $white-primary;
			background-color: $blue-primary;
		}
	}
	&__content {
		transition: all 200ms linear;
		min-height: 450px;
		width: 100%;
	}
	&__nav-btn {
		display: flex;
	}
	&__step-btn {
		flex-grow: 1;
		border: 1px solid #e6e6e6;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75px;
		color: $black-secondary;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		background-color: transparent;
		& span {
			margin: 0 20px;
			padding-top: 3px;
			color: $blue-primary;
			font-size: $title-secondary;
		}
	}
}
</style>