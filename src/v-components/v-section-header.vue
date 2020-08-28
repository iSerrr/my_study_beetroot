<template>
	<header class="header">
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
					<buttonHeader v-bind:iconClassName="'icon-heart-o'" />
				</li>
				<li class="main-nav-bar__item main-nav-bar__cart-and-wish-list">
					<buttonHeader
						v-bind:iconClassName="'icon-add_shopping_cart'"
					/>
				</li>
			</ul>
			<menuMain v-bind:menuIsActive="menuIsActive" />
		</div>
	</header>
</template>

<script>
import buttonHeader from "./v-component-button-header";
import menuMain from "./v-component-menu-main";

export default {
	data() {
		return {
			menuIsActive: false,
		};
	},
	components: {
		buttonHeader,
		menuMain,
	},
	methods: {
		onMenu() {
			this.menuIsActive = !this.menuIsActive;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.header {
	width: 100%;
	height: 310px;
	background-color: $defaultThemeColor1st;
}

.main-nav-bar {
	&__list {
		color: $whiteDefault;
		font-family: $poppinsRegular;
		display: flex;
		height: 75px;
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
		background-color: $defaultThemeColor1st;
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
