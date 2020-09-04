<template>
	<button 
	v-on:click="onClick"
	class="btn-secondary">More info</button>
</template>

<script>
export default {
	methods: {
		onClick() {
			this.$emit('onClickFromButton');
		}
	}
};
</script>

<style lang="scss" scoped>
.btn-secondary {
	width: 160px;
	height: 50px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 30px;
	color: #fff;
	font-family: $poppinsMedium;
    font-size: 14px;
    transition: all 150ms ease-in-out;
    &:hover {
        color: #000;
        background-color: rgba(255, 255, 255, 1);
    }
}
</style>