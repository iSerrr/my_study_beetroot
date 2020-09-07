<template>
	<div class="test">
		<ul class="test__list">
			<li
				v-for="(n, index) in arrTest.slice(
					pagRange,
					pagRange + 4
				)"
				:key="index"
				class="test__item"
			>
				{{ n }}
			</li>
            <ul class="button__list">
                <li 
                v-for="b in 4"
                :key="b"
                class="button__item"
                v-on:click="pagChangePage(b)"
                >{{b}}</li>
            </ul>
		</ul>
	</div>
</template>

<script>
import productReviews from "@/components/product-cards/product-reviews.vue";
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			arrTest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
			pagPage: 1,
		};
    },
    methods: {
        pagChangePage(page) {
            this.pagPage = page;
        }
    },
	components: {
		productReviews,
	},
	computed: {
		pagRange: function () {
			return (this.pagPage - 1) * 4;
		},
		...mapGetters(["PRODUCTGETID"]),
	},
};
</script>

<style lang="scss">
.test {
	width: 100%;
	background-color: $white-primary;
}
.test {
	&__list {
	}

	&__item {
		text-align: center;
		width: 50px;
		color: burlywood;
		font-size: $title-secondary;
		padding: 10px;
		background-color: blueviolet;
		margin: 5px;
	}
}
.button {
		&__list {
            display: flex;
		}
		&__item {
            cursor: pointer;
            width: 50px;
            height: 50px;
            padding: 10px;
            margin: 10px;
            background-color: blue;
            border-radius:50% ;
            transition: all 200ms;
            &:hover {
                background-color: cadetblue;
            }
		}
}
</style>