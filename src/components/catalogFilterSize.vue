<template>
	<div class="filter">
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
			<template v-if="OPTIONS.size.shoes">
			<ul v-show="categories" :class="title" class="filter__list">
				<li
					v-for="(item, index) of OPTIONS.size.shoes"
					:key="index"
					class="filter__item"
				>
					<input
						v-model="sizesChecked"
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
			</template>
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
			sizesChecked: [],
		};
	},
	computed: {
		...mapGetters(["OPTIONS"]),
	},
	methods: {
		show() {
			this.categories = !this.categories;
		},
		onReset() {
			this.sizesChecked =  [];
			this.sizesChecked();
		}
	},
	watch: {
		sizesChecked() {
			this.$emit("filterSizes", this.sizesChecked);
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
		margin-top: 25px;
		overflow: hidden;
		max-height: 300px;
		display: flex;
		flex-wrap: wrap;
	}
	&__item {
		width: 50px;
		height: 50px;
		border: 0.5px solid #e6e6e6;
	}
	&__checkbox {
		display: none;
		&:checked + label {
			box-shadow: 0 5px 20px rgba(58, 84, 214, 0.55);
			background-color: #3a54d6;
			color: #fff;
		}
	}
	&__label {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 100%;
		height: 100%;
		color: #111111;
		font-family: $poppinsRegular;
		font-size: 12px;
		text-transform: uppercase;
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
