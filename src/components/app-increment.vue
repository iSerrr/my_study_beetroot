<template>
	<button v-on:click="onIncrement()">Increment</button>
</template>

<script>
export default {
	methods: {
		onIncrement() {
			this.$emit("increment");
		},
	},
};
</script>