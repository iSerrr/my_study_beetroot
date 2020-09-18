<template>
	<ul class="card">
		<li class="card__num">
			<h2 class="card__num-text">	{{ index + 1 }}.</h2>
		</li>
		<li class="card__img-box">
		
			<img
				v-bind:src="
					require(`@/assets/images/products/${product.id}/${product.options.colors[0]}/1.webp`)
				"
				alt="photo"
				class="card__img"
			/>
		</li>
		<li>
			<ul class="card__desc-list">
				<li class="card__desc">
					<p class="card__title">{{ product.title }}</p>
					<p class="card__style">{{ product.style }}</p>
				</li>
				<li class="card__summary-price">$ {{ summ }}.00</li>
				
			</ul>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			quantity: 1,
		};
	},
	props: {
		productIn: Object,
		index: Number,
	},
	computed: {
		...mapGetters(["PRODUCTGETID"]),
		product: function () {
			return this.PRODUCTGETID(this.productIn.productId);
		},
		summ: function () {
			return this.quantity * this.product.price;
		},
		quantityIn: function () {
			return this.productIn.quantity;
		},
	},
	methods: {
		onChangeQuantity() {
			this.$emit("changeQuantity", {
				value: this.quantity,
				index: this.index,
			});
		},
		onRemove() {
			this.$emit("productRemove", this.index);
		},
		quantityInc() {
			this.quantity++;
			this.onChangeQuantity();
		},
		quantityDec() {
			this.quantity--;
			this.onChangeQuantity();
		},
	},
	mounted() {
		this.quantity = this.productIn.quantity;
	},
	watch: {
		quantity() {
			if (this.quantity <= 0) this.quantity = 1;
		},
		quantityIn() {
			this.quantity = this.productIn.quantity;
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	height: 140px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #e6e6e6;
	@include mobile {
		position: relative;
		padding: 0 20px 15px;
		height: auto;
		justify-content: space-between;
		align-items: center;
	}
	@include tablets {
		position: relative;
		padding: 0 20px 15px;
		height: auto;
		justify-content: space-between;
		align-items: center;
	}
	&__num {
		margin-right: 100px;
		@include mobile {
			margin-right: calc(15 / 320 * 100%);
		}
		@include tablets {
			margin-right: calc(15 / 320 * 100%);
		}
	}
	&__num-text {
		font-family: $poppins-semi-bold;
		font-size: $title-secondary;
	}
	&__img-box {
		max-width: 110px;
		margin-right: 50px;
		@include mobile {
			padding: 30px 0;
			max-width: initial;
			width: 40%;
			margin-right: 0;
			margin-right: calc(35 / 320 * 100%);
		}
		@include tablets {
			padding: 30px 0;
			max-width: initial;
			width: 40%;
			margin-right: 0;
			margin-right: calc(35 / 320 * 100%);
		}
	}
	&__img {
		width: 100%;
	}
	&__desc-list {
		display: flex;
		align-items: center;
		height: 100%;
		@include mobile {
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
		}
		@include tablets {
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
		}
	}
	&__desc {
		width: 340px;
		@include mobile {
			width: auto;
		}
		@include tablets {
			width: auto;
		}
	}
	&__title {
		color: $black-secondary;
		font-family: $oswald-regular;
		font-size: $title-primary;
		margin-bottom: 10px;
		@include mobile {
			margin-bottom: 20px;
		}
		@include tablets {
			margin-bottom: 20px;
		}
	}
	&__style {
		color: $grey-secondary;
		font-family: $poppins-medium;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		@include mobile {
			margin-bottom: 10px;
		}
		@include tablets {
			margin-bottom: 10px;
		}
	}
	&__summary-price {
		color: #2344e8;
		font-family: $poppins-medium;
		font-size: $text-secondary;
		width: 150px;
		@include mobile {
			width: auto;
		}
		@include tablets {
			width: auto;
		}
	}
}
</style>