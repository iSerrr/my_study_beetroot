<template>
	<ul class="product-list">
		<router-link
				:to="'/catalog/' + category.name +'/'+ 'all'"
			>
		<h3 
		v-on:click="onMenuToggle()"
		class="product-list__title">{{ category.name }}</h3>
		</router-link>
		<li
			v-on:click="onMenuToggle()"
			v-for="(item, index) in category.styles"
			:key="index"
			class="product-list__item"
		>
			<router-link
				class="product-list__link"
				:to="'/catalog/' + category.name +'/'+ item"
			>
				{{ item }}
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		category: Object,
	},
	methods: {
		onMenuToggle() {
			this.$emit('on-menu');
		}
	}
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
		padding: 5px 0;
		margin-bottom: 10px;
		transition: 150ms ease-in-out;
		transition-delay: 100ms;
		&:hover {
			transform: translateX(-10px);
			transition-delay: 0ms;
			& .product-list__link {
				color: #ffffff;
			}
		}
	}
	&__link {
		color: rgba(255, 255, 255, 0.65);
		font-family: $poppinsLight;
		font-size: 12px;
		text-transform: capitalize;
	}
}
</style>