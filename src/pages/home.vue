<template>
	<div class="home__conteiner">
			<tempate v-if="true">
		<ul ref="home" class="home__list">
			<li
				v-bind:style="`height:${gridItemHeight}px;`"
				v-for="(item, index) in ourReferenceContent"
				:key="index"
				class="home__item"
			>
				<ourPreference v-bind:content="item" />
			</li>
			<li
				v-bind:style="`height:${gridItemHeight * 2}px;`"
				class="home__item home__item--full"
			>
				<sales />
			</li>
		</ul>
	</tempate>
			<productPopular />
		<tempate v-if="false">
		<ul
			v-show="windowWitdh < 768"
			ref="home"
			class="home__list home__list--2st"
		>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<social v-bind:content="'facebook'" />
			</li>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<img
					class="home__img-big"
					v-bind:src="require(`@/assets/images/gallery/big/1.webp`)"
				/>
			</li>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<img
					class="home__img-big"
					v-bind:src="require(`@/assets/images/gallery/big/3.webp`)"
				/>
			</li>

			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<social v-bind:content="'twitter'" />
			</li>

			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<social v-bind:content="'instagram'" />
			</li>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<img
					class="home__img-big"
					v-bind:src="require(`@/assets/images/gallery/big/4.webp`)"
				/>
			</li>
		</ul>

		<ul
			v-show="windowWitdh > 768"
			ref="home"
			class="home__list home__list--2st"
		>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<social v-bind:content="'twitter'" />
			</li>
			<li
				v-bind:style="`height:${gridItemHeight}px;`"
				class="home__item home__item--x2"
			></li>
			<li v-bind:style="`height:${gridItemHeight}px;`" class="home__item">
				<social v-bind:content="'facebook'" />
			</li>

			<li
				v-for="n in 4"
				:key="n"
				v-bind:style="`height:${gridItemHeight}px;`"
				class="home__item"
			>
				<template v-if="n === 2">
					<social v-bind:content="'instagram'"
				/></template>
				<img
					v-if="n !== 2"
					class="home__img-big"
					v-bind:src="
						require(`../assets/images/gallery/big/${n}.webp`)
					"
				/>
			</li>
		</ul>
		</tempate>
		<ul v-if="windowWitdh > 768" class="small-img">
			<li v-for="n in 6" :key="n" class="small-img__item">
				<img
					class="small-img__img"
					v-bind:src="
						require('../assets/images/gallery/small/' + n + '.webp')
					"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import ourPreference from "@/components/home/home-preference";
import sales from "@/components/home/home-sales";
import productPopular from "@/components/product-cards/product-popular";
import social from "@/components/home/home-social";

export default {
	components: {
		ourPreference,
		sales,
		productPopular,
		social,
	},
	data() {
		return {
			ourReferenceContent: [
				{
					icon: "Shape_86",
					title: "Free Shipping",
					desc:
						"Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ",
					link: false,
				},
				{
					icon: "Shape_87",
					title: "24/7 Technical Support",
					desc:
						"Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac.",
					link: true,
				},
				{
					icon: "Shape_89",
					title: "return and excanges",
					desc:
						"Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ",
					link: false,
				},
				{
					icon: "Shape_88",
					title: "Customer loyalty programs",
					desc:
						"Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac. ",
					link: false,
				},
			],
			gridItemHeight: null,
			windowWitdh: null,
		};
	},
	computed: {},
	mounted() {
		this.windowWitdh = window.innerWidth;
		if (window.innerWidth < 769) {
			this.gridItemHeight = window.innerWidth;
		} else {
			this.gridItemHeight =
				this.$refs.home.clientWidth /
				(this.$refs.home.clientWidth < 481
					? 1
					: this.$refs.home.clientWidth < 769
					? 2
					: 4);
		}
		window.addEventListener("resize", () => {
			this.windowWitdh = window.innerWidth;
			if (window.innerWidth < 769) {
				this.gridItemHeight =
					window.innerWidth /
					(window.innerWidth < 481
						? 1
						: window.innerWidth < 769
						? 2
						: 4);
			} else {
				this.gridItemHeight =
					this.$refs.home.clientWidth /
					(this.$refs.home.clientWidth < 481
						? 1
						: this.$refs.home.clientWidth < 769
						? 2
						: 4);
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.home {
	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@include mobile {
			grid-template-columns: 1fr;
		}
		@include tablets {
			grid-template-columns: repeat(2, 1fr);
		}
		&--2st {
			& > li {
				border: none;
			}
		}
	}
	&__item {
		border: 1px solid #e6e6e6;

		&--x2 {
			@include mobile {
				display: none;
			}
			grid-column: span 2;
		}
		&--full {
			@include mobile {
				display: none;
			}
			grid-column: 1 / -1;
		}
	}
	&__img-big {
		width: 100%;
	}
}

.small-img {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	&__item {
		width: 100%;
		font-size: 0;
		background-color: $black-primary;
	}
	&__img {
		width: 100%;
		opacity: 0.85;
	}
}
</style>