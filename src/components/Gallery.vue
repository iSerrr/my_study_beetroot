<template>
	<section class="gallery">
		<ul class="gallery__list">
			<li 
      v-for="post in posts"
      v-bind:class="'post ' + post.style"  
      :key="post.id">
				<GalleryItem v-bind:post="post" />
			</li>
		</ul>
	</section>
</template>

<script>
import GalleryItem from './GalleryItem.vue'

export default {
	name: 'Gallery',
	components: {
		GalleryItem,
	},
	data() {
		return {
			posts: [
				{
					id: 1,
					date: 'November 28, 2015',
					title: 'Fantastic Designs Of 2015 Concept Cars',
					authorImg: '1.webp',
          postImg: '4.webp',
          style: 'big',
				},
				{
					id: 2,
					date: 'November 24, 2015',
					title: 'How To Find Design Inspiration In The Simple Things Around You',
					authorImg: '1.webp',
          postImg: '1.webp',
          style: 'basic'
				},
				{
					id: 3,
					date: 'November 18, 2015',
					title: 'The Only Guide To Choosing Website Photos You’ll Ever Need',
					authorImg: '1.webp',
          postImg: '2.webp',
          style: 'basic'
				},
				{
					id: 4,
					date: 'November 31, 2015',
					title: 'Growth Hack Your Way to a Successful Freelance Career',
					authorImg: '1.webp',
          postImg: '3.webp',
          style: 'basic'
				},
				{
					id: 5,
					date: 'November 08, 2015',
					title: 'Get 80% Off DSLR Photography Course Bundle',
					authorImg: '1.webp',
          postImg: '5.webp',
          style: 'basic'
				},
			],
		}
	},
}
</script>

<style lang="scss">
.gallery {
	width: 100%;
	background-color: #e2e7ec;
  padding: 0;
  margin: 0;
	&__list {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
	}
}
.post {
    position: relative;
		list-style-type: none;
    &.big {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      &::after {
			width: 100%;
			height: 100%;
      top: 0;
      left: 0;
			content: '';
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);			
      position: absolute;
		}
  }
}
</style>
