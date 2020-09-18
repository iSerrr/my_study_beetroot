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
	color: $white-primary;
	font-family: $poppins-medium;
    font-size: $text-secondary;
	transition: all 150ms ease-in-out;
	@include mobile {
		width: 100%;
	}
    &:hover {
        color: $black-primary;
        background-color: $white-primary;
    }
}
</style>