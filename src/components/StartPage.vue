<template>
	<section class="vue-main">
		<h1 class="vue-main__title">Vue.js</h1>
		<p class="vue-main__desc">this is start page with Vue.js</p>
	</section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.vue-main {
	transition: all 500ms ease;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgb(189, 189, 189);
	font-family: sans-serif;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
	&__title {
		font-size: 75px;
		color: rgb(116, 253, 208);
		
	}
	&__desc {
		font-size: 55px;
		color: rgb(101, 255, 204);
	}
}
</style>
