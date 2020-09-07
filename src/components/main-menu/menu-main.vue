<template>
	<nav v-bind:class="{ active: menuIsActive }" class="main-menu">
		<div
			v-for="(category, index) in CATEGORIES"
			:key="index"
			class="main-menu__column"
		>
			<productList v-on:on-menu="onMenu" v-bind:category="category" />
		</div>
		<div class="main-menu__column main-menu__column--static-right">
			<contactList />
		</div>
		<div class="main-menu__column">
			<basicNavigationList v-on:on-menu="onMenu" />
		</div>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";

import productList from "@/components/main-menu/main-menu-product-list";
import basicNavigationList from "@/components/main-menu/main-menu-base-navigation-list";
import contactList from "@/components/main-menu/main-menu-contact-list";

export default {
	props: {
		menuIsActive: Boolean,
	},
	data() {
		return {};
	},
	methods: {
		onMenu() {
			this.$emit("onMenuToogle");
		},
	},
	components: {
		productList,
		basicNavigationList,
		contactList,
	},
	computed: {
		...mapGetters(["CATEGORIES"]),
	},
};
</script>

<style lang="scss" scoped>
.main-menu {
	height: 0px;
	position: fixed;
	z-index: 10;
	top: 75px;
	left: 75px;
	width: calc(1650 / 1800 * 100%);
	max-width: 1500px;
	background: $default-theme-color;
	padding: 0;
	display: flex;
	flex-direction: row;
    transition: height 500ms ease-in-out, padding 500ms ease-in-out, opacity 0ms ease-in-out 500ms;
    opacity: 0;
	overflow: hidden;
	@include mobile {
        transition: transform 500ms ease-in-out, opacity 0ms ease-in-out 500ms;
		transform: translateX(-100%);
		width: 100%;
		top: 50px;
		left: 0;
		display: flex;
		justify-content: center;
		height: calc(100% - 50px);
	}
	@include tablets {
        transition: transform 500ms ease-in-out, opacity 0ms ease-in-out 500ms;
		transform: translateX(-100%);
		width: 100%;
		top: 50px;
		left: 0;
		display: flex;
		justify-content: center;
		height: calc(100% - 50px);
	}
	&.active {
        transition: height 500ms ease-in-out, padding 500ms ease-in-out, opacity 0ms ease-in-out 0ms;
        opacity: unset;
		height: 450px;
		padding: 75px 0 60px;
		@include mobile {
            transition: transform 500ms ease-in-out;
			transform: translateX(0);
			height: calc(100% - 50px);
			padding: 0;
		}
		@include tablets {
            transition: transform 500ms ease-in-out;
			transform: translateX(0);
			height: calc(100% - 50px);
			padding: 0;
		}
		&::before {
			transform: scaleY(0);
		}
	}
	&::before {
		background-color: $default-theme-color;
		content: "";
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scaleY(1);
		transform-origin: bottom;
		transition: all 500ms ease-in-out;
		transition-delay: 250ms;
	}
	&__column {
		height: 100%;
		padding: 0 calc(65 / 1500 * 100%) 0 calc(75 / 1500 * 100%);
        border-right: 1px dotted rgba(255, 255, 255, 0.3);
        @include mobile {
			display: none;
		}
		@include tablets {
			display: none;
		}
		&--static-right {
			margin-left: auto;
		}
		&:last-child {
            border: none;
            @include mobile {
				border: none;
				display: block;
				margin-left: 0;
			}
			@include tablets {
				border: none;
				display: block;
				margin-left: 0;
			}
		}
	}
}
</style>
