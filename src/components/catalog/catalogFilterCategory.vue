<template>
	<div
	v-if="seletedCategory"
	 class="filter">
		<h2 class="filter__title" @click="show">
			<i
				:class="{ rotate: categories }"
				class="filter__icon icon-keyboard_arrow_right"
			></i>
			{{ title }}
			<i
				class="icon-reset icon-cross"
				v-on:click.stop="onReset"
			></i>
		</h2>
		<transition name="fade">
			<ul v-show="categories" :class="title" class="filter__list">
				<li
					v-for="(item, index) of (seletedCategory[0].styles)"
					:key="index"
					:class="{ active: item == active }"
					class="filter__item"
					@click="onFilter(item)"
				>
					{{ item }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		title: String,
		category: String,
		active: String,
	},
	data() {
		return {
			categories: true,
		};
	},
	computed: {
		...mapGetters(["OPTIONS", "CATEGORIES"]),
		seletedCategory: function () {
			let name = this.category;
			return this.CATEGORIES.filter(function (el) {
				return el.name == name;
			});
		},
	},
	methods: {
		show() {
			this.categories = !this.categories;
		},
		onFilter(value) {
			this.$emit("filterCategories", value);
		},
		onReset() {
			this.$emit("filterCategories", 'all');
		}
	},
};
</script>

<style lang="scss" scoped>
.filter {
	padding: 30px 60px;
	&__title {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		position: relative;
		color: $black-secondary;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
		text-transform: uppercase;
		letter-spacing: 1.2px;
	}
	&__icon {
		font-size: $title-primary;
		position: absolute;
		top: 50%;
		left: -20px;
		transform: translateY(-50%);
		transition: transform 100ms ease;
		&.rotate {
			transform: translateY(-50%) rotate(90deg);
		}
	}
	.icon-reset {
		font-size: 10px;
		color: $grey-secondary;
	}
	&__list {
		overflow: hidden;
		max-height: 300px;
	}
	&__item {
		cursor: pointer;
		color: $black-secondary;
		font-family: $poppins-regular;
		font-size: $text-primary;
		margin-top: 25px;
		&::first-letter {
			text-transform: uppercase;
		}
		&.active {
			color: $blue-primary;
		}
		& .quan {
		}
	}
}

.fade-leave-active {
	transition: padding 500ms, max-height 500ms ease-in-out, opacity 300ms ease;
}
.fade-enter-active {
	transition: padding 500ms, max-height 500ms ease-in-out,
		opacity 300ms ease-in 150ms;
}
.fade-enter,
.fade-leave-to {
	max-height: 0px;
	opacity: 0;
	padding: 0;
}
</style>
