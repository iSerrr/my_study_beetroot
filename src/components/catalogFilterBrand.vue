<template>
	<div class="filter">
		<h2 class="filter__title" @click="show">
			<i
				:class="{ rotate: categories }"
				class="filter__icon icon-keyboard_arrow_right"
			></i>
			{{ title }}
			<i class="icon-reset icon-cross" v-on:click.stop="onReset"></i>
		</h2>
		<transition name="fade">
			<ul v-show="categories" :class="title" class="filter__list">
				<li
					v-for="(item, index) of BRENDS"
					:key="index"
					class="filter__item"
				>
					<input
						v-model="brandChecked"
						class="filter__checkbox"
						type="checkbox"
						:id="item"
						:value="item"
					/>
					<label class="filter__label" :for="item">
						{{ item }}
					</label>
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
	},
	data() {
		return {
			categories: true,
			brandChecked: [],
		};
	},
	computed: {
		...mapGetters(["OPTIONS", "BRENDS"]),
	},
	methods: {
		show() {
			this.categories = !this.categories;
		},
		onReset() {
			this.brandChecked = [];
		},
	},
	watch: {
		brandChecked() {
			this.$emit("filterBrands", this.brandChecked);
		},
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
		cursor: pointer;
		position: relative;
		color: #111111;
		font-family: $poppinsSemiBold;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1.2px;
	}
	&__icon {
		font-size: 18px;
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
		color: #bbbbbb;
	}
	&__list {
		overflow: hidden;
		max-height: 300px;
	}
	&__item {
		cursor: pointer;
		color: #111111;
		font-family: $poppinsRegular;
		font-size: 12px;
		margin-top: 25px;
		&::first-letter {
			text-transform: uppercase;
		}
		& .quan {
		}
	}
	&__checkbox {
		display: none;
		&:checked + label {
			color: #3a54d6;
		}
	}
	&__label {
		cursor: pointer;
		display: inline-block;
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
