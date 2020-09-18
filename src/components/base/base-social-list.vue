<template>
	<ul class="social__list">
		<li v-for="(item, index) in List" :key="index" class="social__item">
			<a v-bind:href="item.url" target="_self" class="social__link">
				<i v-bind:class="'icon-' + item.name.toLowerCase()"></i>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			List: [
				{
					name: "Facebook",
					url: "www.facebook.com",
				},
				{
					name: "Twitter",
					url: "https://twitter.com",
				},
				{
					name: "Behance",
					url: "https://www.behance.net",
				},
				{
					name: "Dribbble",
					url: "https://dribbble.com",
				},
				{
					name: "Instagram",
					url: "https://www.instagram.com",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.social {
	&__list {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 90px;
		@include mobile {
			justify-content: center;
			margin-bottom: 25px;
		}
		@include tablets {
			justify-content: center;
			margin-bottom: 25px;
		}
	}
	&__item {
		position: relative;
		width: 20px;
		height: 20px;
		margin: 0 15px;
		&:last-child {
			margin-right: 0;
		}
	}
	&__link {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1);
		color: $white-primary;
		transition: transform 100ms ease-in-out;
		&:hover {
			transform: translate(-50%, -50%) scale(1.2);
		}
	}
}
</style>