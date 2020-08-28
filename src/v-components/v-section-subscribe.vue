<template>
	<section class="subscribe-to-our">
		<h2 class="subscribe-to-our__title">subscribe to our newsletter</h2>
		<p class="subscribe-to-our__desc">
			Aliquam erat volutpat. Maecenas vehicula sapien quis erat interdum
			aliquam non id ante. Nullam tempus sollicitudin elit, at consectetur
			arcu lobortis ac. Duis at mattis ex.
		</p>
		<form class="subscribe-to-our__form" method="post">
			<input 
            class="subscribe-to-our__input"
            type="email"
            placeholder="Enter your email"
            />
			<button v-on:click.prevent class="subscribe-to-our__button">
				<i class="icon-envelope"></i>
			</button>
		</form>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.subscribe-to-our {
	z-index: 1;
	position: relative;
	margin-top: -75px;
	padding: calc(90px + 75px) 0 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-image: url("~@/assets/images/section-subscribe/bg.jpg");
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		margin-bottom: 25px;
	}
	&__desc {
		color: #888888;
		font-family: $poppinsLight;
		font-size: 12px;
		font-weight: 300;
		max-width: 700px;
        text-align: center;
        margin-bottom: 55px;
	}
	&__form {
        position: relative;
        width: calc(500 / 1800 * 100%);
	}
	&__input {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 60px;
        border-radius: 35px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        padding-left: 32px;
	}
	&__button {
        background-color: red;
        font-size: 25px;
        padding: 10px;
        padding-top: 15px;
        color: #3a54d6;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        position: absolute;
        z-index: 2;
        background-color: transparent;
	}
}
</style>