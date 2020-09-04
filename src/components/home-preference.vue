<template>
	<div class="preference">
		<i 
        v-bind:class="'icon-'+ content.icon"
        class="preference__icon"></i>
		<h2 class="preference__title">{{content.title}}</h2>
		<p class="preference__desc">
			{{content.desc}}
		</p>
		<a 
        v-if="content.link"
        href="#" class="preference__link">More info</a>
	</div>
</template>

<script>
export default {
    props: {
        content: Object
    }
};
</script>

<style lang="scss" scoped>
.preference {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&__icon {
		color: $blueDefault;
		font-size: 50px;
		margin-bottom: 30px;
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 18px;
        text-transform: uppercase;
        margin-bottom: 20px;
	}
	&__desc {
        width: calc(232 / 375 * 100%);
        color: #888888;
		font-family: $poppinsRegular;
        font-size: 13px;
        line-height: 25px;
        text-align: center;
        margin-bottom: 35px;
	}
	&__link {
        color: $blueDefault;
        font-family: $poppinsMedium;
        font-size: 13px;
	}
}
</style>