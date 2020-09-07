<template>
	<div class="our-team">
		<h2 class="our-team__logo logo">Agora</h2>
		<p class="our-team__desc">
			Aliquam erat volutpat. Maecenas vehicula sapien quis erat interdum
			aliquam non id ante.
		</p>
		<ul class="our-team__list">
			<li class="our-team__item">Guides</li>
			<li class="our-team__item">Terms of Use</li>
			<li class="our-team__item">Privacy Policy</li>
		</ul>
		<p class="our-team__old">2013 - 2016</p>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.our-team {
	font-family: $poppins-light;
	font-size: $text-primary;
	@include mobile {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@include tablets {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&__logo {
		margin-bottom: 30px;
	}
	&__desc {
		max-width: 408px;
		color: #555555;
		line-height: 25px;
		margin-bottom: 30px;
		@include mobile {
			text-align: center;
		}
		@include tablets {
			text-align: center;
		}
	}
	&__list {
		display: flex;

		margin-bottom: 20px;
	}
	&__item {
		color: $grey-primary;
		margin-right: 25px;
	}
	&__old {
		color: #444444;

		font-size: $text-secondary;
	}
}
</style>