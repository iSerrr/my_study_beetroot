<template>
	<div class="add-reviews">
		<form
			v-on:submit.prevent="startRundReviews()"
			name="add-one-review"
			action="#"
		>
			<select v-model="selectedProductId" name="productid">
				<option
					v-for="(product, index) in PRODUCTS"
					:key="index"
					v-bind:value="product.id"
					>{{ product.id }}</option
				>
			</select>
			<button>Start add</button>
		</form>
		<form action="#">
			<label for="firstName">First Name</label>
			<input required v-model="firstName" name="firstName" type="text" />
			<label for="lastName">Last Name</label>
			<input required v-model="lastName" name="lastName" type="text" />
			<button v-on:click.prevent="AddUsers()">AddUsers</button>
		</form>
	</div>
</template>

<script>
import Axios from "axios";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			lastName: null,
			firstName: null,
			selectedProductId: null,
		};
	},
	methods: {
		test(event) {
			console.log(this.selectedProductId);
		},
		AddUsers() {
			const postData = {
				id: `u${(~~(Math.random() * 1e8)).toString(16)}`,
				firstName: this.firstName,
				lastName: this.lastName,
			};
			console.log(postData);
			Axios.post("http://localhost:3000/users", postData)
				.then(() => {
					console.log("SUCCESS!!");
					this.firstName = null;
					this.lastName = null;
				})
				.catch(() => console.log("FAILURE!!"));
		},
		...mapMutations(["AddRevies"]),
		startRundReviews() {
			const RundomNumberArray = (max, length = 1) => {
				let testarr = [];
				while (testarr.length < length) {
					let num = Math.floor(Math.random() * Math.floor(max));
					if (!testarr.includes(num, 0)) testarr.push(num);
				}

				return testarr;
			};

			let arr = [];
			let arrTi = RundomNumberArray(100, this.USERS.length);

			let maxNum = Math.ceil(Math.random() * this.USERS.length);

			for (let i = 0; i < maxNum; i++) {
				let id = this.USERS[i].id;
				let star = Math.ceil(Math.random() * 5);
				let date =
					Math.ceil(Math.random() * 25) +
					"." +
					Math.ceil(Math.random() * 12) +
					"." +
					"20" +
					(15 + Math.ceil(Math.random() * 5));
				let text = "";

				Axios.get("https://jsonplaceholder.typicode.com/posts").then(
					(res) => {
						text += res.data[arrTi[i]].body;
					}
				);
				setTimeout(() => {
					const postData = {
						id: `pos${(~~(Math.random() * 1e8)).toString(16)}`,
						productid: this.selectedProductId,
						userid: id,
						star: star,
						date: date,
						text: text,
					};
					Axios.post("http://localhost:3000/reviews", postData)
						.then(() => {
							console.log("SUCCESS!!");
						})
						.catch(() => console.log("FAILURE!!"));
				}, 1000);
			}
		},
	},
	computed: {
		...mapGetters(["USERNAMEFROMID", "PRODUCTS", "USERS"]),
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
button {
	width: 200px;
	height: 40px;
	background-color: #979797;
	color: $white-primary;
	font-size: 19px;
	border-radius: 20px;
}

form {
	color: $black-primary;
	font-size: $title-primary;
	margin-left: 15px;
	width: 300px;
	display: flex;
	flex-direction: column;
}
form > input {
	font-size: $title-primary;
	padding: 5px 15px;
	border: 1px solid $black-primary;
}
form > * {
	margin: 5px 0;
}
form > label {
	font-family: $poppins-semi-bold;
}
</style>