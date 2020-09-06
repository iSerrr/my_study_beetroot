<template>
	<div ref="perent" :style="`font-size:${fontSize}px;`" class="preference">
		<i v-bind:class="'icon-' + content.icon" class="preference__icon"></i>
		<h2 class="preference__title">{{ content.title }}</h2>
		<p class="preference__desc">
			{{ content.desc }}
		</p>	
	</div>
</template>

<script>
export default {
	data() {
		return {
			fontSize: null,
		};
	},
	props: {
		content: Object,
	},
	mounted() {
		this.fontSize = this.$refs.perent.clientWidth / 375 * 17;
		window.addEventListener("resize", () => {
			this.fontSize = this.$refs.perent.clientWidth / 375 * 18;
		});
	},
};
</script>

<style lang="scss" scoped>
.preference {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&__icon {
		color: $blueDefault;
		font-size: 3.5em;
		margin-bottom: 30px;
		@include mobile {
			font-size: 50px;
		}
		@include tablets {
			font-size: 45px;
		}
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 1.285em;
		text-transform: uppercase;
		margin-bottom: 20px;
		@include mobile {
			text-align: center;
			font-size: 25px;
		}
		@include tablets {
			text-align: center;
			font-size: 22px;
		}
	}
	&__desc {
		width: calc(232 / 375 * 100%);
		color: #888888;
		font-family: $poppinsRegular;
		font-size: 0.928em;
		line-height: 25px;
		text-align: center;
		width: 100%;
		padding: 0 15px;
		@include mobile {
			font-size: 18px;
		}
		@include tablets {
			font-size: 18px;
		}
	}
}
</style>