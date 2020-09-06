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
					<humburgerBtn v-bind:menuIsActive="menuIsActive" />
					<p class="main-nav-bar__menu-tittle">
						<span>Select</span><br />Category
					</p>
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
				v-bind:menuIsActive="menuIsActive"
			/>
		</div>
		<template v-if="slider">
			<headerSlider
			/>
		</template>
	</header>
</template>

<script>
import buttonHeader from "@/components/header/header-button";
import menuMain from "@/components/menu-main";
import headerSlider from "@/components/header/header-slider";
import humburgerBtn from "@/components/header/header-humburger";
import { mapGetters } from "vuex";

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
		humburgerBtn,
	},
	computed: {
		...mapGetters(["CART"]),
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
		height: 80%;
		@include mobile {
			max-height: 850px;
			height: 100%;
		}
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
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
		background: $defaultThemeColor1st;
		border-bottom: 1px solid $silverDefault;
	}
	&__item {
		cursor: pointer;
		font-size: 19px;
		flex-shrink: 0;
		height: 75px;
		width: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid $silverDefault;
		@include mobile {
			height: 50px;
			width: 50px;
		}
		@include tablets {
			height: 50px;
			width: 50px;
		}
	}
	&__search {
		@include mobile {
			display: none;
		}
		@include tablets {
			display: none;
		}
	}
	&__menu {
		width: 190px;
		color: $whiteDefault;
		font-size: 14px;
		display: flex;
		padding-left: 15px;
		justify-content: flex-start;
		@include mobile {
			width: auto;
			padding-left: 0;
		}
		@include tablets {
			width: auto;
			padding-left: 0;
		}
		& p {
			@include mobile {
				display: none;
			}
			@include tablets {
				display: none;
			}
		}
		& span {
			font-size: 11px;
			font-family: $poppinsMedium;
			margin-bottom: 4px;
		}
	}
	&__logo {
		cursor: context-menu;
		flex-grow: 1;
		padding-right: (115 / 1500 * 100%);
		@include mobile {
			justify-content: flex-start;
			padding-left: 25px;
		}
		@include tablets {
			justify-content: flex-start;
			padding-left: 25px;
		}
	}
}
</style>
