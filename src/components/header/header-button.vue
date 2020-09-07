<template>
	<router-link :to="path">	
	<button class="Btn">
		<i v-bind:class="iconClassName"></i>
		<span 
		v-if="!quantity == 0"
		class="Btn__counter">{{ quantity }}</span>
	</button>
	</router-link>
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
		path: String,
		quantity: Number,
	},
};
</script>

<style lang="scss" scoped>


.Btn {
	background-color: transparent;
	color: $white-primary;
	font-size: 22px;
	&__counter {
		padding-top: 2px;
		font-family: $poppins-medium;
		position: absolute;
		top: 10px;
		right: 10px;
		display: block;
		width: 15px;
		height: 15px;
		background-color: #27a6ff;
		border-radius: 50%;
		font-size: $text-primary;;
		display: flex;
		justify-content: center;
		align-items: center;
		@include mobile {
			top: 0;
			right: 0;
		}
	}
}
</style>