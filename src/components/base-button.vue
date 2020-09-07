<template>
	<button 
	v-bind:class="className" 
	class="mainBtn addToCart"
	v-on:click.stop.prevent="onAddToCart"
	>
		<i v-if="icon.state" v-bind:class="icon.className" class="icon-add"></i>
		{{ value }}
	</button>
</template>

<script>
export default {
	props: {
		className: String,
		value: String,
		icon: Object,
	},
	methods: {
		onAddToCart() {
			this.$emit("addToCart");
		},
	},
	mounted() {
		document.querySelector("button").addEventListener("click", (e) => {
			let riples = document.createElement("span");
			document.querySelector("button").append(riples);
			setTimeout(() => {
				riples.remove();
			}, 375);
		});
	},
};
</script>

<style lang="scss" scoped>


.mainBtn {
	min-width: 120px;
	overflow: hidden;
	position: relative;
	height: 50px;
	border: 1px solid transparent;
	box-shadow: 0 5px 20px rgba(58, 84, 214, 0.4);
	background-color: $blue-primary;
	background-size: 400%;
	color: $white-primary;
	font-family: $poppins-medium;
	font-size: $text-secondary;
	font-weight: 500;
	border-radius: 25px;
	padding: 0 39px;
	transition: all 100ms ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	@include mobile {
		min-width: initial;
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}
	&.reverse {
		background-color: $white-primary;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		color: $black-primary;
		border: 1px solid transparent;
		&:hover {
			border-color: $blue-primary;
			& span {
				background-color: $blue-primary;
			}
		}
	}
	& span {
		opacity: 0.1;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: $white-primary;
		transform: translate(-50%, -50%);
		pointer-events: none;
		border-radius: 50%;
		animation: custopm 375ms ease-in-out infinite;
	}
	&:hover {
		border-color: $white-primary;
	}
	& .icon-add {
		font-size: $title-primary;
		margin-right: 5px;
	}
}
@keyframes custopm {
	0% {
		width: 0;
		height: 0;
	}
	100% {
		width: 100%;
		height: 110px;
	}
}
</style>
