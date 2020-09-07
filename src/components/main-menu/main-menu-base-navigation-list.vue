<template>
	<ul class="basic-navigation">
		<li v-on:click="onMenuToggle()" class="basic-navigation__item">
			<router-link class="basic-navigation__link" to="/">
				Home
			</router-link>
		</li>
		<li v-on:click="onMenuToggle()" class="basic-navigation__item">
			<router-link class="basic-navigation__link" :to="'/catalog/clothing/all'"
				>Clothing</router-link
			>
		</li>
		<li v-on:click="onMenuToggle()" class="basic-navigation__item">
			<router-link class="basic-navigation__link" :to="'/catalog/shoes/all'"
				>Shoes</router-link
			>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">Equip</a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link"> Blogs </a>
		</li>
		<li class="basic-navigation__item">
			<a href="#" class="basic-navigation__link">Last news</a>
		</li>
		<li v-on:click="onMenuToggle()" class="basic-navigation__item">
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
			this.$emit("on-menu");
		},
	},
};
</script>

<style lang="scss" scoped>
.basic-navigation {
	@include mobile {
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 50px 0;
		max-height: 600px;
	}
	@include tablets {
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 100px 0;
		max-height: 600px;
	}
	&__item {
		padding: 10px 0;
		margin-bottom: 10px;
		transition: all 150ms ease-in-out;
		@include tablets {
		}
		&:hover {
			@include mobile {
				transform: translateX(0);
			}
			@include tablets {
				transform: translateX(0);
			}
			transform: translateX(-10px);
		}
	}
	&__link {
		color: $white-primary;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
		@include mobile {
			font-size: $title-secondary;
		}
		@include tablets {
			font-size: 30px;
		}
	}
}
</style>