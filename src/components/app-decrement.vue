<template>
	<button v-on:click="onDecrement()">Decrement</button>
</template>

<script>
export default {
	methods: {
		onDecrement() {
			this.$emit("decrement");
		},
	},
};
</script>