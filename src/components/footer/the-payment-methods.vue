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


.payment-methods {
	&__list {
		display: flex;
        flex-wrap: wrap;
		justify-content: flex-end;
		@include mobile {
			justify-content: center;
			margin-bottom: 40px;
		}
		@include tablets {
			justify-content: center;
			margin-bottom: 40px;
		}
	}

	&__title {
        text-align: right;
		flex-basis: 100%;
		color: #555555;
		font-family: $poppins-light;
        font-size: $text-primary;
		margin-bottom: 17px;
		@include mobile {
			text-align: center;
		}
		@include tablets {
			text-align: center;
		}
	}
	&__item {
        color: $white-primary;
		margin-left: 20px;
		@include mobile {
			margin: 0 20px;
		}
		@include tablets {
			margin: 0 20px;
		}
	}
}
</style>