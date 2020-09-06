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
import footerNavList from "./footer-nav-list";
import socialList from "./base-social-list";
import paymentMethods from "./the-payment-methods";
import ourTeam from "./the-our-team";

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
	&__list {
		margin: 0 auto;
		display: flex;
		max-width: 1280px;
		padding: 90px 15px;
		justify-content: space-between;
	}
	&__ {
		&_column {
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