<template>
  <div class="test" v-bind:class="{ active: testMenuActive }">
				<h1 class="test__title" @click.stop="testMenuToggle">
					Test Panel
				</h1>
                <router-link
					@click.stop="testMenuToggle"
					class="test__link"
					to="/"
					>Home</router-link
				>
				<router-link
					@click.stop="testMenuToggle"
					class="test__link"
					to="/test"
					>- Page to fix responsible</router-link
				>
				<router-link
					@click.stop="testMenuToggle"
					class="test__link"
					to="/addreviews"
					>- Add reviews</router-link
				>
				<router-link
					@click.stop="testMenuToggle"
					class="test__link"
					to='/test-add-product'
					>- Add product</router-link
				>
				<router-link
					@click.stop="testMenuToggle"
					class="test__link"
					to="/test-upload"
					>- Upload file</router-link
				>
                <ul class="route__list">
                    <h3>Product pages</h3>
			<li
				v-for="(product, index) in products"
				:key="index"
				class="route__item"
				@click.prevent="jumpTo(product.id)"
			>
				{{ index + 1 }}. {{ product.title }}
			</li>
		</ul>
			</div>
</template>

<script>
export default {
    data() {
        return{
            testMenuActive: false,
        }
    },
    props: {
        products: Array,
    },
    methods: {
        testMenuToggle() {
            this.testMenuActive = !this.testMenuActive;
        },
        jumpTo(path) {
			this.$router.push("/page/" + path);
		}
    }
}
</script>

<style scoped lang="scss">


.test {
    border-radius: 15px;
	position: fixed;
	bottom: 5px;
	right: 5px;
	height: 55px;
	overflow: hidden;
	padding: 13px;
	background-color: rgb(0, 89, 92);
	width: 300px;
	z-index: 5;
	opacity: 0.5;
    transition: all 0.5s;
	&:hover {
		opacity: unset;
	}
	&.active {
		height: auto;
	}
	&__title {
		cursor: pointer;
		font-size: 30px;
		&:hover {
			color: #fff;
		}
	}
	&__link {
		display: block;
		margin: 10px;
		font-size: 18px;
		color: #fff;
		&:hover {
			text-decoration: underline;
		}
	}
}
.route {
	&__list {
		margin-bottom: 40px;
	}

	&__item {
		cursor: pointer;
		margin: 15px 10px;
		&:hover {
			color: #fff;
		}
	}
	&__link {
		color: orange;
	}
}
</style>