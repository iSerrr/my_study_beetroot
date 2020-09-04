<template>
	<ul class="basic-navigation">
		<li 
		v-on:click="onMenuToggle()"
		class="basic-navigation__item">
			<router-link class="basic-navigation__link" to="/">
				Home
			</router-link>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">
				About Us
			</a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">
				Service
			</a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">
				Order Status
			</a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">
				Shipping and Delivery
			</a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">
				Payment
			</a>
		</li>
		<li 
		v-on:click="onMenuToggle()"
		class="basic-navigation__item">
			<router-link class="basic-navigation__link" to="/contacts">
				Contact Us
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	methods: {
		onMenuToggle() {
			this.$emit('on-menu');
		}
	}
};
</script>

<style lang="scss" scoped>


.basic-navigation {
	&__item {
		padding: 10px 0;
		margin-bottom: 10px;
		transition: all 150ms ease-in-out;
		&:hover {
			transform: translateX(-10px);
		}
	}
	&__link {
		color: #ffffff;
		font-family: $poppinsSemiBold;
		font-size: 12px;
	}
}
</style>