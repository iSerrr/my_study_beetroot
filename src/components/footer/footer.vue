<template>
	<footer class="footer">
		<ul class="footer__list">
			<li class="footer___column">
				<ourTeam />
			</li>
			<li class="footer___column">
				<footerNavList v-bind:content="contentGetHelp" />
			</li>
			<li class="footer___column">
				<footerNavList v-bind:content="contentAboutUs" />
			</li>
			<li class="footer___column">
				<socialList />
				<paymentMethods />
			</li>
		</ul>
	</footer>
</template>

<script>
import footerNavList from "@/components/footer/footer-nav-list";
import socialList from "@/components/base/base-social-list";
import paymentMethods from "@/components/footer/the-payment-methods";
import ourTeam from "@/components/footer/the-our-team";

export default {
	components: {
		footerNavList,
		socialList,
		paymentMethods,
		ourTeam,
	},
	data() {
		return {
			contentGetHelp: {
				title: "Get Help",
				items: [
					"Order Status",
					"Shippi	ng and Delivery",
					"Payment Options",
					"Contact Us",
				],
			},
			contentAboutUs: {
				title: "About Us",
				items: [
					"Careers",
					"Sustainability",
					"Service",
					"CA Supply Chains Act",
				],
			},
		};
	},
	computed: {},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: #222222;
	@include mobile {
		width: 100%;
	}
	@include tablets {
		width: 100%;
	}
	&__list {
		margin: 0 auto;
		display: flex;
		max-width: 1280px;
		padding: 90px 15px;
		justify-content: space-between;
		@include mobile {
			flex-direction: column-reverse;
		}
		@include tablets {
			flex-direction: column-reverse;
		}
	}
	&__ {
		&_column {
			padding: 0 15px;
			@include mobile {
				padding: 0;
				width: 100%;
				&:nth-child(2),
				&:nth-child(3) {
					display: none;
				}
			}
			@include tablets {
				padding: 0;
				width: 100%;
				&:nth-child(2),
				&:nth-child(3) {
					display: none;
				}
			}
		}
	}
}
.our-team {
	&__logo {
	}
	&__desc {
	}
	&__list {
	}
	&__item {
	}
	&__old {
	}
}
.logo-main {
}
</style>