<template>
	<ul class="card">
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
				<li class="card__price">$ {{ product.price }}.00</li>
				<li class="card__quan">
					<button
						v-on:click="quantityInc"
						class="card__count card__count--increment"
					>
						+
					</button>
					<button
						v-on:click="quantityDec"
						class="card__count card__count--decremnet"
					>
						-
					</button>
					<input
						v-model.lazy.number="quantity"
						type="text"
						v-on:change="onChangeQuantity"
					/>
				</li>
				<li class="card__summary-price">$ {{ summ }}.00</li>
				<li class="card__remove">
					<button v-on:click="onRemove" class="card__remove-btn">
						<i class="icon-cross"></i>
					</button>
				</li>
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
		padding: 50px 0 15px;
		height: auto;
		justify-content: flex-start;
		align-items: flex-start;
	}
	&__img-box {
		max-width: 110px;
		margin-right: 50px;
		@include mobile {
			padding: 30px 0;
			max-width: initial;
			width: 40%;
			margin-right: 0;
			margin-right: 20px;
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
	}
	&__desc {
		width: 340px;
		@include mobile {
			width: 100%;
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
	}
	&__price {
		color: $grey-secondary;
		font-family: $poppins-medium;
		font-size: $text-secondary;
		width: 120px;
		@include mobile {
			margin-bottom: 25px;
		}
	}
	&__quan {
		width: 100px;
		height: 50px;
		position: relative;
		margin-right: 30px;
		& input {
			width: 100%;
			height: 100%;
			border: 1px solid #dddddd;
			border-radius: 25px;
			text-align: center;
			color: $black-secondary;
			font-family: $poppins-semi-bold;
			font-size: $text-secondary;
		}
		@include mobile {
			height: 35px;
			margin-bottom: 20px;
		}
	}
	&__count {
		cursor: pointer;
		content: "";
		display: block;
		position: absolute;
		width: 10px;
		height: 10px;
		top: 50%;
		z-index: 10;
		transform: translateY(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		font-family: $poppins-semi-bold;
		font-size: $title-primary;
		color: #b1b1b1;
		&--increment {
			right: 17px;
		}
		&--decremnet {
			left: 17px;
		}
	}
	&__summary-price {
		color: #2344e8;
		font-family: $poppins-medium;
		font-size: $text-secondary;
		width: 150px;
		@include mobile {
			
		}
	}
	&__remove {
		& button {
			cursor: pointer;
			width: 50px;
			height: 50px;
			border: 1px solid #e6e6e6;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $white-primary;
			@include mobile {
				width: 30px;
				height: 30px;
				position: absolute;
				top: 10px;
				right: 10px;
			}
		}
		& i {
			font-size: 10px;
		}
	}
	
}
</style>