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


.footer {
	&__nav-title {
		color: $white-primary;
		font-family: $oswald-regular;
		font-size: $title-primary;
		font-weight: 400;
		margin-bottom: 30px;
	}
	&__nav-item {
		margin-bottom: 18px;
	}
	&__nav-link{
		color: $grey-primary;
		font-family: $poppins-light;
		font-size: $text-primary;
		transition: color 150ms ease-in-out;
		&:hover {
			color: $white-primary;
		}
	}
}
</style>