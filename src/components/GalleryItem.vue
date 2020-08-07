<template>
	<div v-bind:class="`post__item-wrapper`">
		<div class="post__img-post">
			<img :src="require('./../assets/images/gallery/' + post.postImg)" alt="post-img" class="post__img-post-bx" />
		</div>
		<div class="post__item-content">
			<p class="post__item-date">{{ post.date }}</p>
			<h2 class="post__item-title">{{ post.title }}</h2>
			<img
				:src="require('./../assets/images/gallery/author/' + post.authorImg)"
				alt="post-img"
				class="post__img-auth"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GalleryItem',
	props: {
		post: {
			type: Object,
			default() {
				return {}
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.post {
	&__item-wrapper {
		position: relative;
		height: 100%;
		background-color: #fff;
		font-family: sans-serif;
	}
	&__img-post {
		width: 100%;
	}
	&__item-content {
		padding: 28px;
	}
	&__item-date {
		color: #818181;
		font-size: 16px;
		font-weight: 500;
		line-height: 30px;
		text-transform: uppercase;
		letter-spacing: 0.33px;
		margin: 0 0 15px 0;
	}
	&__item-title {
		color: #1d1d1d;
		font-size: 25px;
		font-weight: 700;
		line-height: 30px;
		text-transform: uppercase;
		letter-spacing: 0.55px;
	}
	&__img-auth {
		position: absolute;
		bottom: 25px;
	}
	&__img-post-bx {
		width: 100%;
	}
	&.big {
		& .post {
			&__item-content {
				background-color: transparent;
				position: absolute;
				z-index: 2;
				bottom: 10px;
			}
			&__item-date {
				opacity: 0.5;
				color: #ffffff;
				font-weight: 500;
				line-height: 30px;
				text-transform: uppercase;
				color: #ffffff;
				letter-spacing: 0.33px;
			}
			&__item-title {
				color: #ffffff;
				font-size: 30px;
				font-weight: 700;
				line-height: 36px;
				text-transform: uppercase;
				color: #ffffff;
				letter-spacing: 0.75px;
				width: 75%;
			}
			&__img-auth {
				display: none;
			}
		}
	}
}
</style>
