<template>
	<ul class="contact-list">
		<li class="contact-list__item">
			<h3 class="contact-list__title">address</h3>
			<p class="contact-list__desc">25, Lomonosova St.</p>
			<p class="contact-list__desc">Moscow, Russia, 665087</p>
		</li>
		<li class="contact-list__item">
			<h3 class="contact-list__title">phone</h3>
			<p class="contact-list__desc">+7 234 949-58-83</p>
			<p class="contact-list__desc">+7 239 585-58-61</p>
		</li>
		<li class="contact-list__item">
			<h3 class="contact-list__title">working hours</h3>
			<p class="contact-list__desc">Monday-Friday: 8am-8pm</p>
			<p class="contact-list__desc">Saturday 9am-1pm</p>
		</li>
	</ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-list {
	&__item {
        font-size: 12px;
		position: relative;
		margin-bottom: 45px;
		&::before {
			font-family: "icomoon" !important;
			position: absolute;
			left: 0;
			transform: translateX(calc(-100% - 30px));
			font-size: 35px;
			color: #fff;
			@media (max-width: 950px) {
			  display: none;
		  }
		}
		&:nth-child(1)::before {
			content: "\e90e";
		}
		&:nth-child(2)::before {
			content: "\e90d";
		}
		&:nth-child(3)::before {
			content: "\e90f";
		}
		  
	}
	&__title {
		color: #ffffff;
		font-family: $poppinsSemiBold;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	&__desc {
		color: #bdc7fc;
		font-family: $poppinsLight;
		margin-bottom: 10px;
	}
}
</style>