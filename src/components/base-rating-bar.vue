<template>
	<ul class="ratting-bar">
		<li
			v-for="n in 5"
			:key="n"
			class="icon-star-full ratting-bar__stars"
			v-bind:class="{ active: n <= numberOfStars }"
		></li>
	</ul>
</template>

<script>
export default {
	props: {
		numberOfStars: Number,
	},
};
</script>

<style lang="scss">
.ratting-bar {
	display: flex;
	align-items: center;
	&__stars {
		color: rgb(194, 194, 194);
		margin-right: 5px;
		&.active {
			color: rgb(255, 208, 0);
		}
	}
}
</style>