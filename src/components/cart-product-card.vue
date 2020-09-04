<template>
	<ul class="card__list">
		<li class="card__item card__img-box">
			<img
				v-bind:src="
					require('../assets/images/products/' +
						product.id +
						'/' +
						product.options.colors[0] +
						'/' +
						1 +
						'.webp')
				"
				alt="photo"
				class="card__img"
			/>
		</li>
		<li class="card__item card__desc">
			<p class="card__title">{{ product.title }}</p>
			<p class="card__style">{{ product.style }}</p>
		</li>
		<li class="card__item card__price">$ {{ product.price }}.00</li>
		<li class="card__item card__quan">
			<button v-on:click="quantityInc" class="card__count card__count--increment">+</button>
			<button v-on:click="quantityDec" class="card__count card__count--decremnet">-</button>
			<input
				v-model.lazy.number="quantity"
				type="text"
				v-on:change="onChangeQuantity"
			/>
		</li>
		<li class="card__item card__summary-price">$ {{ summ }}.00</li>
		<li class="card__item card__remove">
			<button v-on:click="onRemove" class="card__remove-btn">
				<i class="icon-cross"></i>
			</button>
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
            return this.productIn.quantity
        }
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
            this.onChangeQuantity()
        },
        quantityDec() {
            this.quantity--;
            this.onChangeQuantity()
        }
	},
	mounted() {
		this.quantity = this.productIn.quantity;
    },
    watch: {
        quantity() {
            if (this.quantity <= 0 ) this.quantity = 1;
        },
        quantityIn() {
            this.quantity = this.productIn.quantity;
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
	width: 100%;
	&__list {
		height: 140px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
	}
	&__item {
	}
	&__img-box {
		max-width: 110px;
		margin-right: 50px;
	}
	&__img {
		width: 100%;
	}
	&__desc {
        width: 340px;
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 17px;
		margin-bottom: 10px;
	}
	&__style {
		color: #bbbbbb;
		font-family: $poppinsMedium;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.8px;
	}
	&__price {
		color: #bbbbbb;
		font-family: $poppinsMedium;
        font-size: 14px;
        width: 120px;
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
			color: #111111;
			font-family: $poppinsSemiBold;
			font-size: 14px;
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
            font-family: $poppinsSemiBold;
            font-size: 18px;
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
		font-family: $poppinsMedium;
        font-size: 14px;
        width: 150px;
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
			background-color: #fff;
		}
		& i {
			font-size: 10px;
		}
	}
}
</style>