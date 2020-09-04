<template>
	<nav 
    v-bind:class="{'active': menuIsActive}"
    class="main-menu">
		<div 
        v-for="(category, index) in CATEGORIES"
        :key="index"
        class="main-menu__column">
			<productList
            v-on:on-menu="onMenu"
            v-bind:category="category"
             />
		</div>
        <div class="main-menu__column main-menu__column--static-right">
			<contactList />
		</div>
		<div class="main-menu__column ">
			<basicNavigationList
            v-on:on-menu="onMenu"
             />
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';

import productList from './main-menu-product-list'
import basicNavigationList from "./main-menu-base-navigation-list";
import contactList from "./main-menu-contact-list";

export default {
    props: {
        menuIsActive:Boolean,
    },
    data() {
        return {
        }
    },
    methods: {
        onMenu() {
            this.$emit('onMenuToogle');
        }
    },
	components: {
        productList,
		basicNavigationList,
		contactList,
    },
    computed: {
    ...mapGetters(['CATEGORIES']),
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
	background: $defaultThemeColor1st;
	padding: 0;
    display: flex;
    flex-direction: row;
    transition: all 500ms ease-in-out;
    overflow: hidden;
    &.active {
            height: 450px;
            padding: 75px 0 60px;
            &::before {
            transform: scaleY(0);
            }
    }
    &::before {
        background-color: $defaultThemeColor1st;
        content: '';
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
        padding: 0 65px 0 75px;
        border-right: 1px dotted rgba(255, 255, 255, 0.3);
		&--static-right {
			margin-left: auto;
		}
        &:last-child {
            border: none;
        }
	}
}
</style>
