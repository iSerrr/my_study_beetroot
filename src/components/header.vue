<template>
	<header class="header" v-bind:class="{ long: slider }">
		<div class="main-nav-bar">
			<ul class="main-nav-bar__list">
				<li class="main-nav-bar__item main-nav-bar__search">
					<i class="icon-search"></i>
				</li>
				<li
					v-on:click="onMenu()"
					class="main-nav-bar__item main-nav-bar__menu"
				>
					<span>Select</span>
					Category
				</li>
				<li class="main-nav-bar__item main-nav-bar__logo">
					<h2 class="logo">AGORA</h2>
				</li>
				<li class="main-nav-bar__item main-nav-bar__cart-and-wish-list">
					<buttonHeader 
					v-bind:iconClassName="'icon-heart-o'" 
					v-bind:path="'/'"
					v-bind:quantity="0"
					/>
				</li>
				<li class="main-nav-bar__item main-nav-bar__cart-and-wish-list">
					<buttonHeader
						v-bind:iconClassName="'icon-add_shopping_cart'"
						v-bind:path="'/cart'"
						v-bind:quantity="CART.length"
					/>
				</li>
			</ul>
			<menuMain 
			v-on:onMenuToogle="onMenu()"
			v-bind:menuIsActive="menuIsActive" />
		</div>
		<template v-if="slider">
			<headerSlider
			
			/>
		</template>
	</header>
</template>

<script>
import buttonHeader from "./header-button";
import menuMain from "./menu-main";
import headerSlider from "./header-slider";
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			menuIsActive: false,
		};
	},
	props: {
		slider: Boolean,
	},
	components: {
		buttonHeader,
		menuMain,
		headerSlider,
	},
	computed: {
		...mapGetters(['CART']),
	},
	methods: {
		onMenu() {
			this.menuIsActive = !this.menuIsActive;
		},
	},
};
</script>

<style lang="scss" scoped>


.header {
	width: 100%;
	height: 310px;
	background-color: $defaultThemeColor1st;
	background: radial-gradient(
			circle,
			rgba(33, 36, 45, 0.6082808123249299) 0%,
			rgba(33, 36, 45, 1) 100%
		),
		url("~@/assets/images/header/bg.webp") no-repeat 100% / cover;
	transition: all 350ms ease-in-out;
	&.long {
		height: 100%;
	}
}

.main-nav-bar {
	&__list {
		z-index: 10;
		width: 100%;
		position: fixed;
		color: $whiteDefault;
		font-family: $poppinsRegular;
		display: flex;
		height: 75px;
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
		background: $defaultThemeColor1st;
		border-bottom: 1px solid $silverDefault;
	}
	&__item {
		cursor: pointer;
		font-size: 19px;
		flex-shrink: 0;
		height: 100%;
		width: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid $silverDefault;
	}
	&__search {
	}
	&__menu {
		width: 190px;
		color: $whiteDefault;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-left: 28px;
		& span {
			font-size: 11px;
			font-family: $poppinsMedium;
			margin-bottom: 4px;
		}
	}
	&__logo {
		cursor: context-menu;
		flex-grow: 1;
		padding-right: 115px;
		padding-right: (115 / 1500 * 100%);
	}
}
</style>
