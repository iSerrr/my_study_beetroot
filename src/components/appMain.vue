<template>
	<div class="wrapper">
		<div class="task task1">
			<form action="get">
				<h4 class="task__title">Task 1</h4>
				<h2 
					v-bind:style="`color:${colorText};`" 
					class="task1__example-text">{{ task1Text }}</h2>
				<input
					v-model="input"
					class="task1__input"
					type="text"
					autocomplete="no"
					v-on:focus="showTooltip"
					v-on:blur="hideTooltip"
					v-on:mousedown.once="find"
					v-on:change="find"
				/>
				<button 
					class="task1__Btn" 
					v-on:click.prevent="changeColor">Confirm</button>
			</form>
			<ul 
				v-bind:style="`display:${tooltipDisplay};`" 
				class="colors__list"
				>
				<li 
					v-for="(color, index) in outColors" 
					:key="index" class="colors__item" 
					v-on:click="selectColor(color.name)">
					<p class="colors__desc">{{ color.name }}</p>
					<div 
						v-bind:style="`background-color:${color.value};`" 
						class="colors__example"></div>
				</li>
			</ul>
		</div>
		<div class="task task2">
			<h4 class="task__title">Task 2</h4>
			<ul class="task2__list">
				<li class="task2__item" v-for="(link, index) in links" :key="index">
					<a
						v-bind:href="link.link"
						class="task2__link"
						v-bind:data-tooltip="link.tooltip"
						v-on:mouseover.prevent.stop="showLinkTooltip($event)"
						v-on:mouseout.stop="hideLinkTooltip()"
						>{{ index + 1 }}. {{ link.name }}</a
					>
				</li>
			</ul>
			<div
				v-bind:style="`top:${linkTooltipAxeY}px;left:${linkTooltipAxeX}px;`"
				v-show="linkTooltipDisplay"
				class="link__tooltip"
			>
				{{ linkTooltip }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nameColor: null,
			valueColor: null,
			input: null,
			task1Text: 'Example Text',
			colorText: null,
			tooltipDisplay: null,
			linkTooltip: null,
			linkTooltipDisplay: false,
			linkTooltipAxeY: null,
			linkTooltipAxeX: null,
			links: [
				{
					name: 'Google',
					tooltip: 'Search to google',
					link: 'https://www.google.com.ua',
				},
				{
					name: 'YouTube',
					tooltip: 'Most popular video',
					link: 'https://www.youtube.com',
				},
			],
			colors: [
				{
					name: 'aero',
					value: '#7CB9E8',
				},
				{
					name: 'amaranth',
					value: '#E52B50',
				},
				{
					name: 'bitter',
					value: '#CAE00D',
				},
				{
					name: 'bright-green',
					value: '#66FF00',
				},
				{
					name: 'claret',
					value: '#7F1734',
				},
				{
					name: 'blue',
					value: 'blue',
				},
				{
					name: 'red',
					value: 'red',
				},
				{
					name: 'yellow',
					value: 'yellow',
				},
				{
					name: 'silver',
					value: '#c0c0c0',
				},
				{
					name: 'gray',
					value: '#808080',
				},
				{
					name: 'black',
					value: '#000000',
				},
				{
					name: 'olive',
					value: '#808000',
				},
				{
					name: 'lime',
					value: '#00ff00',
				},
				{
					name: 'green',
					value: '#008000',
				},
				{
					name: 'teal',
					value: '#008080',
				},
				{
					name: 'navy',
					value: '#000080',
				},
				{
					name: 'fuchsia',
					value: '#ff00ff',
				},
				{
					name: 'purple',
					value: '#800080',
				},
				{
					name: 'tomato',
					value: '#ff6347',
				},
				{
					name: 'orangered',
					value: '#ff4500',
				},
				{
					name: 'gold',
					value: '#ffd700',
				},
				{
					name: 'springgreen',
					value: '#00ff7f',
				},
				{
					name: 'darkseagreen',
					value: '#8fbc8',
				},
				{
					name: 'turquoise',
					value: '#40e0d0',
				},
				{
					name: 'darkslateblue',
					value: '#483d8b',
				},
				{
					name: 'violet',
					value: '#ee82ee',
				},
				{
					name: 'fuchsia',
					value: '#ff00ff',
				},
				{
					name: 'indigo',
					value: '#4b0082',
				},
				{
					name: 'white',
					value: '#ffffff',
				},
				{
					name: 'snow',
					value: '#fffafa',
				},
				{
					name: 'brown',
					value: '#a52a2a',
				},
			],
			outColors: null,
		}
	},
	methods: {
		selectColor(color) {
			this.input = color
		},
		showTooltip() {
			this.tooltipDisplay = 'block'
		},
		hideTooltip() {
			setTimeout(() => {
				this.tooltipDisplay = 'none'
			}, 100)
		},
		changeColor() {
			let findColor = this.input
			let res = this.colors.find(function(item) {
				return item.name == findColor
			})
			this.colorText = res.value
			this.tooltipDisplay = 'none'
		},
		showLinkTooltip(event) {
			console.log(event)
			this.linkTooltip = event.target.dataset.tooltip
			this.linkTooltipDisplay = true
			this.linkTooltipAxeY = event.clientY + 20
			this.linkTooltipAxeX = event.clientX + 20
		},
		hideLinkTooltip() {
			this.linkTooltipDisplay = false
		},
		find() {
			this.outColors = []
			if (this.input === null) this.outColors = this.colors
			else {
				this.colors.forEach((el) => {
					if (el.name.indexOf(this.input) !== -1) this.outColors.push(el)
				})
			}
		},
	},
	watch: {
		input: 'find',
	},
}
</script>

<style lang="scss">
.addColors {
	display: flex;
	flex-direction: column;
}
.wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.task__title {
	font-family: sans-serif;
	color: rgb(133, 133, 133);
	margin-bottom: 30px;
}
.task {
	width: 400px;
	box-shadow: 0 0 10px rgba(141, 141, 141, 0.5);
	margin: 20px;
	padding: 15px;
}
.task1 {
	&__example-text {
		margin-bottom: 20px;
	}
	&__input {
		height: 40px;
		padding-left: 15px;
		border-radius: 15px 0 0 15px;
		border: 1px solid rgb(14, 117, 117);
		font-size: 18px;
		outline: none;
	}
	&__Btn {
		border: none;
		height: 40px;
		border-radius: 0 15px 15px 0;
		padding: 0 10px;
		background-color: rgb(14, 117, 117);
		color: #fff;
		cursor: pointer;
		font-size: 18px;
		transition: background 100ms ease-in-out;
		outline: none;
		&:hover {
			background-color: rgba(14, 117, 117, 0.85);
		}
	}
}
.colors {
	&__list {
		border: 1px solid rgb(14, 117, 117);
		width: 200px;
		margin-left: 15px;
		margin-top: -1px;
		position: absolute;
		display: none;
		max-height: 250px;
		overflow-y: auto;
		scroll-behavior: smooth;
	}
	&__item {
		cursor: pointer;
		list-style-type: none;
		width: 100%;
		background-color: rgb(247, 247, 247);
		margin: 1px 0;
		padding: 5px 15px;
		transition: all 200ms ease-in-out;
		display: flex;
		justify-content: space-between;
		&:hover {
			background-color: rgb(14, 117, 117);
			color: #fff;
		}
	}
	&__example {
		width: 15px;
		height: 15px;
		border: 1px solid #fff;
	}
}
.task2 {
	&__item {
		list-style-type: none;
		font-size: 18px;
		margin: 2px 0;
	}
	&__link {
		display: inline-block;
		color: #000;
		text-decoration: none;
		padding: 5px 15px;
	}
	.link__tooltip {
		background-color: rgb(240, 240, 240);
		border: 1px solid rgb(14, 117, 117);
		padding: 10px;
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
	}
}
</style>
