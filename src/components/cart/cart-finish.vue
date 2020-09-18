<template>
	<div class="finish">
        <h1 class="finish__title">

your order is accepted</h1>
		<ul 
        v-for="(item,index) in CART"
        :key="index"
        class="product__list">
            <li class="produc__item">
                <cartFinishCard
                v-bind:productIn="item"
					v-bind:index="index"
                />
            </li>
        </ul>
        <div class="finish__summ">Total: <span>$ {{summ}}.00</span></div>    
        <!-- <h3 class="finish__subtitle">Shiping information:</h3>
		<ul class="shipping-info">
			<li class="shiping-info__item">
				<h2 class="shipping-info__title">Full Name</h2>
				<p class="shipping-info__desc">Nikols Keydg</p>
			</li>
            <li class="shiping-info__item">
				<h2 class="shipping-info__title">E-mail</h2>
				<p class="shipping-info__desc">Lubko@ukr.net</p>
			</li>
            <li class="shiping-info__item">
				<h2 class="shipping-info__title">Phone</h2>
				<p class="shipping-info__desc">+ 34 355 32 22 22</p>
			</li>
            <li class="shiping-info__item">
				<h2 class="shipping-info__title">City</h2>
				<p class="shipping-info__desc">Madrid 28054</p>
			</li>
            <li class="shiping-info__item">
				<h2 class="shipping-info__title">Address</h2>
				<p class="shipping-info__desc">Av Viaduc</p>
			</li>
		</ul> -->
       <div class="done">
        <buttonMain
						v-on:addToCart="cartReset"
						v-bind:className="'base'"
						v-bind:value="'Done'"
						v-bind:icon="{
							state: false,
							className: 'icon-add_shopping_cart',
						}"
					/>
                    </div>
	</div>
</template>

<script>

import buttonMain from '@/components/base/base-button'
import cartFinishCard from '@/components/cart/cart-product-card-finish'

import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        cartFinishCard,
        buttonMain
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
        ...mapMutations(['cartResetMut']),
        cartReset() {
            this.cartResetMut();
            this.$emit('resetPage')
        }
    }
};
</script>

<style lang="scss" scoped>
.finish {
		&__title {
            font-family: $oswald-regular;
            font-size: $title-secondary * 2;
            text-transform: uppercase;
            width: 100%;
            text-align: center;
            margin: 50px 0;
            @include mobile {
                margin: 20px 0;
            }
		}
		&__subtitle {
             font-family: $oswald-regular;
            font-size: $title-secondary;
            text-transform: uppercase;
            margin: 15px 0;
            margin-left: 50px;
        }
        &__summ {
            padding: 30px 0;
            width: 100%;
            text-align: center;font-family: $poppins-regular;
            font-size: $title-primary;
            &>span {
                color: #2344e8;
            }
            border-bottom: 1px solid #dddddd;
        }
}
.product {
		&__list {
		}
}
.produc {
		&__item {
		}
}
.shipping-info {
    margin-left: 75px;
		&__title {
            font-family: $poppins-medium;
            margin-bottom: 5px;
		}
		&__desc {
            font-family: $poppins-light;
            color: $grey-primary;
            margin-bottom: 15px;
		}
}
.shiping-info {
		&__item {
		}
}
.done {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
}

</style>