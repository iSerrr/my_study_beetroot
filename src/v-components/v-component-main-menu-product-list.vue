<template>
	<ul class="product-list">
		<h3 class="product-list__title">{{ category.name }}</h3>
		<li
			v-for="(item, index) in category.styles"
			:key="index"
			class="product-list__item"
		>
			<a class="product-list__link" href="#">{{ item }}</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		category: Object,
	},
};
</script>

<style lang='scss' scoped>
.product-list {
	&__title {
		text-transform: uppercase;
		color: #ffffff;
		font-family: $oswaldRegular;
		font-size: 18px;
		letter-spacing: 1.8px;
		margin-bottom: 30px;
	}
	&__item {
		margin-bottom: 20px;
	}
	&__link {
		color: #bdc7fc;
		font-family: $poppinsLight;
		font-size: 12px;
		text-transform: capitalize;
	}
}
</style>