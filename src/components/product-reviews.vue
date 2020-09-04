<template>
	<ul 
	v-if="reviews"
	class="product-reviews__list _conteiner-1200">
		<h2 class="product-reviews__counter">
			All Reviews
			<span class="product-reviews__count">
				{{ reviews.length }}
			</span>
		</h2>
		<li
			v-for="(review, index) in reviews.slice(pagRange, pagRange + 4)"
			:key="index"
			class="product-reviews__item"
		>
			<ul class="post__list">
				<li class="post__collumn post__collumn--user-photo">
					<img
						class="post__avatar"
						v-bind:src="require('../assets/images/users/user1.png')"
						alt="user"
					/>
				</li>
				<li class="post__collumn post__collumn--name-rating">
					<p class="post__full-name">
						{{ USERNAMEFROMID(review.userid).firstName }}
						{{ USERNAMEFROMID(review.userid).lastName }}
					</p>
					<ratingBar v-bind:numberOfStars="review.star" />
				</li>
				<li class="post__collumn post__collumn--text-date">
					<p class="post__text">
						{{ review.text }}
					</p>
					<p class="post__date">{{ review.date }}</p>
				</li>
			</ul>
		</li>
		<ul class="pagination__list">
			<li 
				v-for="button in pagQuantity" 
				:key="button" 
				class="pagination__item">
				<a 
					v-on:click.prevent="pagChangePage(button)"
					href="#" 
					class="pagination__link"
					v-bind:class="{active:(pagPage === button)}"
					>{{ button }}
					
				</a>
			</li>
		</ul>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";
import ratingBar from "./base-rating-bar";

export default {
	components: {
		ratingBar,
		user: "user1",
	},
	data() {
		return {
			pagPage: 1,
			reviews:[],
		}
	},
	props: {
		productId:String,
	},
	methods: {
        pagChangePage(page) {
            this.pagPage = page;
        }
    },
	computed: {
		pagQuantity: function () {
			if (!this.reviews) return 1;
			return Math.ceil(this.reviews.length / 4);
		},
		pagRange: function () {
			return (this.pagPage - 1) * 4;
		},
		...mapGetters(['USERNAMEFROMID','REVIEWSGETID']),
	},
	watch: {
		productId: function() {
			if (!this.REVIEWSGETID(this.productId)) this.reviews = [];
			this.reviews = this.REVIEWSGETID(this.productId);
		}
	},
	mounted() {
			this.reviews = this.REVIEWSGETID(this.productId)
	},
};
</script>

<style lang="scss" scoped>

.product-reviews {
	&__list {
		padding: 84px 15px 0;
		transition: all 1s;
	}
	&__counter {
		width: 100%;
		border-bottom: 1px solid #ebebeb;
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 20px;
		padding-bottom: 33px;
	}
	&__item {
		width: calc(875 / 1250 * 100%);
		padding: 49px 0 18px;
		border-bottom: 1px dotted #ebebeb;
	}
	&__count {
		margin-left: 5px;
		color: #3a54d6;
	}
}

.post {
	&__list {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	&__collumn {
		border: 2px solid #fff;
		&--user-photo {
			width: 50px;
			margin-right: calc(10 / 875 * 100%);
		}
		&--name-rating {
			color: #111111;
			font-family: $poppinsMedium;
			font-size: 14px;
			font-weight: 500;
			margin-right: calc(30 / 875 * 100%);
		}
		&--text-date {
			justify-self: flex-end;
			width: calc(619 / 875 * 100%);
		}
	}
	&__avatar {
		width: 100%;
	}

	&__full-name {
		min-width: 120px;
		margin-bottom: 10px;
	}

	&__text {
		max-width: 625px;
		text-align: justify;
		margin-bottom: 10px;
		color: #888888;
		font-family: $poppinsLight;
		font-size: 14px;
		line-height: 25px;
	}
	&__date {
		// width: 100%;
		// text-align: right;
		color: #bbbbbb;
		font-family: $poppinsRegular;
		font-size: 12px;
	}
}
.pagination {
	&__list {
		display: flex;
		margin: 43px 0 80px;
		justify-content: center;
	}
	&__item {
		margin-right: 20px;
	}
	&__link {
		padding: 5px;
		cursor: pointer;
		color: #111111;
		font-family: $poppinsSemiBold;
		font-size: 14px;
		letter-spacing: 1.4px;
		&.active {
			color: #3a54d6;
		}
	}
}
</style>