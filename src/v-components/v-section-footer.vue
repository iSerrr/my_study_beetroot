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
import footerNavList from "./v-component-nav-list-footer";
import socialList from "./v-component-social-list";
import paymentMethods from "./v-component-payment-methods";
import ourTeam from "./v-component-our-team";

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

<style lang="scss">
.footer {
	background-color: #222222;

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