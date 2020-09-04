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
			<ul v-show="categories" :class="title" class="filter__list">
				<li
					v-for="(item, index) of OPTIONS.color"
					:key="index"
					class="filter__item"
					@click="onFilter()"
				>
					<input
						v-model="colorsChecked"
						class="filter__checkbox"
						type="checkbox"
						:id="item"
						:value="item"
					/>
					<label 
                    class="filter__label" 
                    :for="item"
                    :style="`background-color:${item};`"
                    >
						
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
			colorsChecked: [],
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
			this.colorsChecked = [];
			this.$emit("filterColors", []);
		}
	},
	watch: {
		colorsChecked() {
			this.$emit("filterColors", this.colorsChecked);
		}
	}
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
        width: 30px;
        height: 30px;
		cursor: pointer;
		margin: 0 10px 10px 0;
	}
	&__checkbox {
		display: none;
		&:checked + label::before{
            opacity: unset;

		}
	}
	&__label {
		position: relative;
		display: block;
		cursor: pointer;
		width: 100%;
		height: 100%;
		margin: 5px;
		border-radius: 50%;
		border: 1px dotted rgba(0, 0, 0, 0.377);
		&::before {
			font-family: "icomoon" !important;
			content: "\e901";
			position: absolute;
			color: #fff;
			font-size: 14px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: all 100ms ease-in-out;
			text-shadow: 0 0 2px #000;
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
