<template>
	<section class="main">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</section>
</template>

<script>
import menuMain from './menu-main.vue'

export default {
	components: {
		menuMain,
	}
};
</script>

<style lang="scss" scoped>
.main {
	position: relative;
	z-index: 2;
	max-width: 1500px;
	margin: 0 auto;
	min-height: 500px;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.4);
    margin-top: -75px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
}
</style>