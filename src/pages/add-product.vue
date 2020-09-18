<template>
	<div class="add-product">
		<form
			v-on:submit.prevent="onSubmit($event)"
			class="add-product__form"
			action="#"
			method="post"
		>
			<label class="add-product__label" for="category">Category</label>
			<select
				v-model="selectedCategory"
				class="add-product__item"
				v-on:change="onChangeCategory($event)"
				name="category"
				id="add_category"
			>
				<option
					v-for="(item, index) in CATEGORIES"
					:key="index"
					v-bind:value="index"
					>{{ item.name }}</option
				>
			</select>
			<label class="add-product__label" for="styles">Styles</label>
			<select
				v-model="selectedStyle"
				class="add-product__item"
				name="styles"
				id="add_style"
			>
				<option
					v-for="(item, index) in styles"
					:key="index"
					v-bind:value="item"
					>{{ item }}</option
				>
			</select>
			<label class="add-product__label" for="brand">Brand</label>
			<input
				v-model="selectedBrand"
				class="add-product__item"
				type="text"
				name="brand"
				id="add_brand"
			/>
			<label class="add-product__label" for="title">Name</label>
			<input
				v-model="selectedTitle"
				class="add-product__item"
				type="text"
				name="title"
				id="add_title"
			/>
			<label class="add-product__label" for="colors">Colors</label>

			<ul class="chexBox-color__list">
				<li
					v-for="(color, index) in OPTIONS.color"
					:key="index"
					class="chexBox-color__item"
				>
					<input
						class="chexBox-color__input"
						type="checkbox"
						v-bind:id="`checkBox-color${index}`"
						v-bind:value="color"
						v-model="selectedColors"
					/>
					<label
						v-bind:style="`background-color:${color}`"
						class="chexBox-color__label"
						v-bind:for="`checkBox-color${index}`"
					>
					</label>
				</li>
			</ul>
			<label class="add-product__label" for="size">Size</label>
			<ul class="chexBox-size__list">
				<li
					v-for="(color, index) in sizes"
					:key="index"
					class="chexBox-size__item"
				>
					<input
						class="chexBox-size__input"
						type="checkbox"
						v-bind:id="`checkBox-size${index}`"
						v-bind:value="color"
						v-model="selectedSize"
					/>
					<label
						class="chexBox-size__label"
						v-bind:for="`checkBox-size${index}`"
						>{{ color }}</label
					>
				</li>
			</ul>
			<label class="add-product__label" for="imgQuan">Img Quantity</label>
			<input
				v-model.number="selectedImgQuan"
				class="add-product__item"
				type="number"
				name="imgQuan"
				id="add_img-quan"
			/>
			<label class="add-product__label" for="price">Price</label>
			<input
				v-model="selectedPrice"
				class="add-product__item"
				type="number"
				name="price"
				id="add_price"
			/>
			<button class="add-product__item add-product__button" type="submit">
				Add
			</button>
		</form>
		<div v-if="newProduct !== null" class="new-product__conteiner">
			<div class="new-product">
				<p class="new-product__id">{{ newProduct.id }}</p>
				<h2 class="new-product__title">{{ newProduct.brand }}</h2>
				<h2 class="new-product__title">{{ newProduct.title }}</h2>
				<p class="new-product__category">{{ newProduct.category }}</p>
				<p class="new-product__style">{{ newProduct.style }}</p>

				<div class="options colors">
					<p class="options__title">Colors:</p>
					<ul class="options__list">
						<li
							v-for="color in newProduct.options.colors"
							:key="color"
							v-bind:style="`background-color:${color};`"
							class="options__item colors__item icon-"
						></li>
					</ul>
				</div>
				<div class="options">
					<p class="options__title">Size:</p>
					<ul class="options__list">
						<li
							v-for="size in newProduct.options.sizes"
							:key="size"
							class="options__item size__item"
						>
							{{ size }}
						</li>
					</ul>
				</div>
				<p class="new-product__price">
					{{ newProduct.price }}
				</p>

				<ul class="new-product__create-folder-list">
					<li class="new-product__create-folder-item">
						mkdir ./src/assets/images/products/{{ newProduct.id }}
					</li>
					<li
						v-for="variant in newProduct.options.colors"
						:key="variant"
						class="new-product__create-folder-item"
					>
						mkdir ./src/assets/images/products/{{ newProduct.id }}/{{
							variant
						}}
					</li>
					<li class="new-product__create-folder-item">
						ok
					</li>
				</ul>

				<button
					v-on:click="confirmAddProduct()"
					class="new-product__Btn"
				>
					Confirm
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from 'axios';

export default {
	data() {
		return {
			styles: ["Please entry category"],
			sizes: ["Please entry category"],
			colorsList: ["brown", "black", "red", "silver", "orange", "yellow", "green", "lime", "white", "blue", "purple", "LightPink"],
			checkedColors: [],
			selectedCategory: null,
			selectedStyle: null,
			selectedBrand: null,
			selectedTitle: null,
			selectedColors: [],
			selectedSize: [],
			selectedPrice: null,
			selectedImgQuan:null,
            
            newProduct: null,
		};
	},
	computed: {
		...mapGetters(["CATEGORIES","OPTIONS"]),
	},
	methods: {
		onSubmit() {
			const product = {
				id: `p${(~~(Math.random() * 1e8)).toString(16)}`,
				brand: this.selectedBrand,
				category: this.CATEGORIES[this.selectedCategory].name,
				style: this.selectedStyle,
				title: this.selectedTitle,
				options: {
					colors: this.selectedColors,
					sizes: this.selectedSize,
				},
				price: this.selectedPrice,
				quanImg: this.selectedImgQuan,
			};
            this.newProduct = product;
            console.log(this.newProduct);
		},
		confirmAddProduct() {
			const postData = this.newProduct;
			Axios.post( 'http://localhost:3000/products',
			postData)
			.then(() => console.log('SUCCESS!!'))
			.catch(() => console.log('FAILURE!!'))
			location.reload()
			
        },
		onChangeCategory(event) {
			this.styles = this.CATEGORIES[event.target.value].styles;
			this.sizes = this.CATEGORIES[event.target.value].sizes;
			console.log(this.category);
		},
	},
};
</script>

<style lang="scss" scoped>
.add-product {
	display: flex;
	justify-content: space-between;
	width: 100%;
	&__form {
		padding: 15px;
		width: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	&__label {
		font-family: $poppins-semi-bold;
		width: 100%;
		color: $black-primary;
		margin-bottom: 3px;
		font-size: $title-primary;
		text-align: left;
	}
	&__item {
		font-size: $title-primary;
		width: 100%;
		border: 1px solid rgb(206, 206, 206);
		margin-bottom: 15px;
		height: 35px;
	}
	&__button {
		width: 200px;
		height: 40px;
	}
}
.chexBox-color {
	&__list {
		margin: 20px 0 20px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}
	&__item {
		margin: 0 2px 5px;
		width: 30px;
		height: 30px;
	}
	&__input {
		display: none;
		&:checked + label::before {
			opacity: unset;
		}
	}
	&__label {
		position: relative;
		display: block;
		cursor: pointer;
		width: 100%;
		height: 100%;
		margin: 5px;
		border-radius: 50%;
		border: 1px dotted rgba(0, 0, 0, 0.377);
		&::before {
			font-family: "icomoon" !important;
			content: "\e901";
			position: absolute;
			color: $white-primary;
			font-size: $text-secondary;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: all 100ms ease-in-out;
			text-shadow: 0 0 2px $black-primary;
		}
	}
}
.chexBox-size {
	&__list {
		margin: 20px 0 20px;
		display: flex;
		flex-wrap: wrap;
	}
	&__item {
		margin: 0 5px 5px;
	}
	&__input {
		display: none;
		&:checked + label {
			color: #4f66e9;
		}
	}
	&__label {
		cursor: pointer;
		font-size: $title-secondary;
		font-family: $poppins-medium;
		color: $black-primary;
	}
}
.new-product {
	&__id {
		margin-bottom: 20px;
	}
	&__conteiner {
		position: relative;
		width: 50%;
		padding: 50px 50px;
		color: $black-primary;
		font-family: $poppins-light;
	}
	&__title {
		font-size: 35px;
	}
	&__category {
		font-size: $title-secondary;
		margin: 10px 0;
	}
	&__style {
		margin-bottom: 30px;
	}
	&__Btn {
		width: 250px;
		height: 40px;
		border-radius: 25px;
		color: $white-primary;
		background-color: #0044d8;
		font-size: $title-secondary;
	}
}
.options {
	&__list {
		margin-bottom: 20px;
	}
}

.new-product {
	&__create-folder-list {
		margin: 30px 0;
	}
	&__create-folder-item {
		font-size: 15px;
		margin: 2px 0;
	}
}
</style>