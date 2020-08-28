<template>
	<button v-bind:class="className" class="mainBtn addToCart">
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

<style lang="scss">
@import "../scss/main.scss";

.mainBtn {
	min-width: 120px;
	overflow: hidden;
	position: relative;
	height: 50px;
	border: 1px solid transparent;
	box-shadow: 0 5px 20px rgba(58, 84, 214, 0.4);
	background-color: rgba(58, 84, 214, 1);
	background-size: 400%;
	color: #ffffff;
	font-family: $poppinsMedium;
	font-size: 14px;
	font-weight: 500;
	border-radius: 25px;
	padding: 0 39px;
	transition: all 100ms ease-in-out;
	display: flex;
		align-items: center;
	&.reverse {
		background-color: rgb(255, 255, 255);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		color: rgb(0, 0, 0);
		border: 1px solid transparent;
		&:hover {
			border-color: rgb(58, 84, 214);
			& span {
				background-color: rgb(58, 84, 214);
			}
		}
	}
	& span {
		opacity: 0.1;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: #fff;
		transform: translate(-50%, -50%);
		pointer-events: none;
		border-radius: 50%;
		animation: custopm 375ms ease-in-out infinite;
	}
	&:hover {
		border-color: #fff;
	}
	&:active {
	}
	& .icon-add {
		font-size: 18px;
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
