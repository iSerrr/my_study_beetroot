<template>
	<button class="Btn">
		<i v-bind:class="iconClassName"></i>
		<span 
		v-if="!value == 0"
		class="Btn__counter">{{ value }}</span>
	</button>
</template>

<script>
export default {
	data() {
		return {
			value: 0,

		}
	},
    props: {
        iconClassName: String,
    }
};
</script>

<style lang="scss" scoped>


.Btn {
	background-color: transparent;
	color: $whiteDefault;
	font-size: 22px;
	position: relative;
	&__counter {
		padding-top: 2px;
		font-family: $poppinsMedium;
		position: absolute;
		top: -50%;
		left: 90%;
		display: block;
		width: 15px;
		height: 15px;
		background-color: #27a6ff;
		border-radius: 50%;
		font-size: 11px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>