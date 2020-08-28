<template>
	<ul class="footer__nav-list">
		<h3 class="footer__nav-title">{{ content.title }}</h3>
		<li
			v-for="(item, index) in content.items"
			:key="index"
			class="footer__nav-item"
		>
		<a 
			class="footer__nav-link"
			href="#">{{ item }}</a>
			
		</li>
	</ul>
</template>

<script>
export default {
	props: { content: Object },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.footer {
	&__nav-title {
		color: #ffffff;
		font-family: $oswaldRegular;
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 30px;
	}
	&__nav-item {
		margin-bottom: 18px;
	}
	&__nav-link{
		color: #888888;
		font-family: $poppinsLight;
		font-size: 12px;
		transition: color 150ms ease-in-out;
		&:hover {
			color: #ffffff;
		}
	}
}
</style>