<template>
	<div class="social" v-bind:class="'social--' + content">
		<i class="social__icon" v-bind:class="'icon-' + content"></i>
		<p class="social__name">{{ content }}</p>
		<p class="social__posts">{{ posts }}</p>
		<p class="social__tag">#AgoraStore</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	props: {
		content: String,
	},
	computed: {
		posts: function () {
			return 7000 + Math.ceil(Math.random() * 3000);
		},
		breakpointsMobile: function () {
			return window.addEventListener("resize", () => {
				return window.innerWidth;
			})
			
		}
	},
};
</script>

<style lang="scss" scoped>
.social {
	cursor: pointer;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-family: $poppinsRegular;
	&--twitter {
		background-color: #49b8f1;
	}
	&--facebook {
		background-color: #2941b9;
	}
	&--instagram {
		background-color: #222222;
		.social__icon {
			color: #3a54d6;
		}
		.name__icon {
			color: #666666;
		}
	}
	&__icon {
		font-size: 18px;
		margin-bottom: 40px;
	}
	&__name {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		margin-bottom: 15px;
	}
	&__posts {
		font-family: $oswaldRegular;
		font-size: 48px;
		text-transform: uppercase;
		margin-bottom: 80px;
	}
	&__tag {
		font-size: 14px;
		font-weight: 500;
		line-height: 30px;
	}
}
</style>