<template>
	<input
		v-model="inputValue"
		type="number"
		name=""
		id=""
		v-on:blur="onInputToParagraph()"
	/>
</template>

<script>
export default {
	data() {
		return {
			inputValue: this.inNumber,
		};
	},
	props: ["inNumber"],
	methods: {
		onInputToParagraph() {
			this.$emit("inputToParagraph", Number(this.inputValue));
		},
	},
};
</script>