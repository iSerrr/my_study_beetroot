<template>
	<div class="main-warapper">
		<appIncrement v-on:increment="increment()" />
		<appDecrement v-on:decrement="decrement()" />
		<appInput
			v-bind:inNumber="inputNum"
			v-on:inputToParagraph="inputToParagraph"
		/>
		<appParagraph v-bind:Num="Num" />
	</div>
</template>

<script>
import appIncrement from "./app-increment.vue";
import appDecrement from "./app-decrement.vue";
import appInput from "./app-input-num.vue";
import appParagraph from "./app-paragraph.vue";

export default {
	components: {
		appIncrement,
		appDecrement,
		appInput,
		appParagraph,
	},
	data() {
		return {
			Num: null,
			inputNum: null,
		};
	},
	methods: {
		inputToParagraph(val) {
			this.Num = val;
			this.inputNum = null;
		},
		increment() {
			this.Num++;
		},
		decrement() {
			this.Num--;
		},
	},
};
</script>

<style lang="scss">
.main-warapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
}
.main-warapper > * {
	width: 100%;
	margin: 10px;
	box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.2);
	text-align: center;
	font-size: 20px;
	padding: 10px 0;
	transform: scale(1);
	transition: transform 250ms cubic-bezier(0.95, 0.35, 0.38, 0.98);
}
.main-warapper > *:hover {
	transform: scale(1.02);
}
.main-warapper > button {
	cursor: pointer;
	background-color: rgba(250, 0, 0, 0.15);
}
.main-warapper > button:first-child {
	background-color: rgba(0, 200, 250, 0.15);
}
.main-warapper > *:first-child {
	border-radius: 15px 15px 0 0;
}
.main-warapper > *:last-child {
	border-radius: 0 0 15px 15px;
}
.main-warapper > input[type="number"] {
	border: 2px solid cadetblue;
	outline: none;
}
.main-warapper > input[type="number"]:focus {
	border-color: rgb(0, 167, 36);
}
.main-warapper > p {
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>