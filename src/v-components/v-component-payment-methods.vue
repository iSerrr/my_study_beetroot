<template>
	<ul class="payment-methods__list">
		<h3 class="payment-methods__title">Payment Methods:</h3>
		<li class="payment-methods__item">
			<i class="icon-paypal"></i>
		</li>
		<li class="payment-methods__item">
			<i class="icon-visa"></i>
		</li>
	</ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.payment-methods {
	&__list {
		display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
	}

	&__title {
        text-align: right;
		flex-basis: 100%;
		color: #555555;
		font-family: $poppinsLight;
        font-size: 12px;
        margin-bottom: 17px;
	}

	&__item {
        color: #fff;
        margin-left: 20px;
	}
}
</style>