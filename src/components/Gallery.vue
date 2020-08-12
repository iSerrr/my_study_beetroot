<template>
	<ul class="form__conteiner">
		<div class="editBx">
			<input v-model.number="count" class="edit edit-number" type="number" name="count" />
			<input v-model="selected" class="edit edit-text" type="text" name="count" />
			<button v-on:click="editt">Edit</button>
		</div>

		<li
			v-for="(fruit, index) in fruits"
			:key="index"
			v-bind:class="'form__item ' + [count === index + 1 ? 'active' : 'base']"
		>
			<p class="form__count">{{ index + 1 }}</p>
			<p class="form__text">{{ fruit.name }}</p>
		</li>
	</ul>
</template>

<script>
export default {
	data: function() {
		return {
			count: null,
			selected: null,
			fruits: [
				{
					name: 'Apple',
				},
				{
					name: 'Bannana',
				},
				{
					name: 'Orange',
				},
				{
					name: 'Cherry',
				},
			],
		}
	},
	watch: {
		count: function(val) {
			if (!this.fruits[val - 1].name) return (this.selected = null)
			this.selected = this.fruits[val - 1].name
		},
	},
	methods: {
		editt() {
			this.fruits[this.count - 1].name = this.selected
		},
	},
}
</script>

<style lang="scss">
.form {
	&__conteiner {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&__item {
		font-family: sans-serif;
		display: flex;
		font-size: 22px;
		border: 1px solid transparent;
		list-style-type: none;
		width: 150px;
		transform: translateX(0);
		transition: transform 200ms ease-in-out;
		margin: 2px 0;
	}
	&__count {
		position: relative;
		z-index: 2;
		width: 30px;
		height: 30px;
		background-color: rgb(160, 160, 160);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 2px solid #fff;
	}
	&__text {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		width: 150px;
		height: 34px;
		background-color: rgb(18, 165, 175);
		padding-left: 20px;
		margin-left: -12px;
		border-radius: 0 20px 20px 0;
	}
}
.editBx {
	margin-bottom: 20px;
}
.edit-text {
}
.edit-number {
	width: 50px;
}
.active {
	transform: translateX(10px);
}
</style>
