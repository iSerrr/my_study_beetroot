<template>
	<div class="shipping">
		<div class="shipping__column">
			<h3 class="shipping__title">Sign in</h3>
			<form
				@submit.prevent
				action="#"
				class="shipping__form-sign"
				method="get"
			>
				<input
					autocomplete="off"
					placeholder="E-mail"
					type="text"
					name="login"
					class="shipping__input"
					pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					required
				/>
				<input
					autocomplete="off"
					placeholder="Password"
					type="password"
					class="shipping__input"
					required
					minlength="6"
				/>
				<button class="shipping__sign-in-btn">Sign in</button>
			</form>
			<p class="shipping__forget">Forgot your password</p>
		</div>
		<div class="shipping__column">
			<h3 class="shipping__title">Fill all the fields</h3>
			<form
				@submit.prevent
				action="#"
				method="get"
				class="shipping__form-info"
				ref="formShip"
			>
				<ul class="shipping__form-list">
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.lazy.trim="shippingData.firstName"
							class="shipping__input-address"
							type="text"
							placeholder="Nicole"
							name="first-name"
							pattern="[A-Z][a-z]{3,}"
							required
						/>
						<label
							class="shipping__form-check"
							for="first-name"
						></label>
					</li>
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.lazy.trim="shippingData.lastName"
							class="shipping__input-address"
							type="text"
							placeholder="Kidman"
							name="second-name"
							pattern="[A-Z][a-z]{3,}"
							required
						/>
						<label
							class="shipping__form-check"
							for="second-name"
						></label>
					</li>
					<li class="shipping__form-item">
						<input
							class="shipping__input-address"
							v-model.trim="shippingData.email"
							autocomplete="off"
							placeholder="nicole.k@ukr.net"
							type="text"
							name="email"
							pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
							required
						/>
						<label class="shipping__form-check" for="email"></label>
					</li>
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.trim="shippingData.phone"
							class="shipping__input-address"
							type="text"
							placeholder="+34 915 18 93 62"
							name="phone"
							pattern="\+\d{2}\s\d{3}\s\d{2}\s\d{2}\s\d{2}"
							required
						/>
						<label class="shipping__form-check" for="phone"></label>
					</li>
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.trim="shippingData.city"
							class="shipping__input-address"
							type="text"
							placeholder="Madrid"
							name="city"
							required
						/>
						<label class="shipping__form-check" for="city"></label>
					</li>
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.trim="shippingData.zip"
							class="shipping__input-address"
							type="text"
							placeholder="28054"
							name="zip"
							pattern="[0-9]{4,6}"
							required
						/>
						<label class="shipping__form-check" for="zip"></label>
					</li>
					<li class="shipping__form-item">
						<input
							autocomplete="off"
							v-model.lazy.trim="shippingData.address"
							placeholder="Av de la Aviación, 24"
							class="shipping__input-address"
							type="text"
							name="address"
							required
						/>
						<label
							class="shipping__form-check"
							for="address"
						></label>
					</li>
				</ul>
			</form>
		</div>
		<p class="shipping__badge-or">or</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shippingData: {
				firstName: null,
				lastName: null,
				email: null,
				phone: null,
				city: null,
				zip: null,
				address: null,
			},
		};
	},
	computed: {
		formIsValid: function () {
			//! Validation email
			let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			//! Validation Name
			let namePattern = /^[A-Z][a-zA-Z]+$/;

			//! Validation Phone
			let phonePattern = /^[/+][0-9]{2,2}\s[0-9]{3,3}\s[0-9]{2,2}\s[0-9]{2,2}\s[0-9]{2,2}$/;

			//! Validation Zip
			let zipPattern = /^[0-9]{4,6}$/;

			//! Validation  City
			let cityPattern = /^[A-Z][a-z]{3,15}$/;

			//! Validation Adreass
			let addressPattern = /^[A-Za-z ]{3,30}$/;

			let emailValid = emailPattern.test(this.shippingData.email)
			let firstNameValid = namePattern.test(this.shippingData.firstName)
			let lastNameValid = namePattern.test(this.shippingData.lastName)
			let phoneValid = phonePattern.test(this.shippingData.phone)
			let zipValid = zipPattern.test(this.shippingData.zip)
			let cityValid = cityPattern.test(this.shippingData.city)
			let addressValid = addressPattern.test(this.shippingData.addreas)
			
			return firstNameValid && lastNameValid && phoneValid && zipValid && cityValid && addressValid;
		} 
	},
	watch: {
		formIsValid() {
			if(this.formIsValid) this.$emit('onValided');
		}
	}
};
</script>

<style lang="scss" scoped>
.shipping {
	position: relative;
	width: 100%;
	height: 450px;
	display: flex;
	&__column {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		@include mobile {
			padding: 0 15px;
			width: 100%;
		}
		&:first-child {
			border-right: 2px solid #dddddd;
			@include mobile {
				display: none;
			}
		}
	}
	&__title {
		color: $black-secondary;
		font-family: $oswald-regular;
		font-size: $title-secondary;
		margin-bottom: 40px;
	}
	&__input {
		padding: 0 25px;
		height: 60px;
		border-bottom: 1px solid #dddddd;
		&:invalid:not(:placeholder-shown) {
			border-color: #d80000;
		}
		&:valid:not(:placeholder-shown) {
			border-color: #7cff24;
		}
		&:focus {
			border-color: #3695ff;
		}
		&:placeholder-shown {
			color: $grey-primary;
			font-family: $poppins-light;
			font-size: $text-primary;
		}
	}
	&__form-sign {
		width: 250px;
		max-width: 250px;
		display: flex;
		flex-direction: column;
		border: 1px solid #dddddd;
		border-radius: 15px;
		overflow: hidden;
		margin-bottom: 25px;
		@include tablets {
			width: 90%;
		}
		@include laptops {
			width: 90%;
		}
	}
	&__sign-in-btn {
		height: 60px;
		box-shadow: 0 5px 20px rgba(58, 84, 214, 0.4);
		background-color: $blue-primary;
		color: $white-primary;
		font-family: $poppins-medium;
		font-size: $text-secondary;
	}
	&__forget {
		cursor: pointer;
		color: $blue-primary;
		font-family: $poppins-regular;
		font-size: $text-primary;
	}
	&__form-list {
		display: flex;
		flex-wrap: wrap;
		max-width: 500px;
		height: 240px;
		border: 1px solid #dddddd;
		border-radius: 15px;
		overflow: hidden;
		@include tablets {
			width: 90%;
		}
		@include laptops {
			width: 90%;
		}
	}
	&__form-item {
		position: relative;
		flex-grow: 1;
		width: 50%;
		border-bottom: 1px solid #dddddd;
		&:nth-child(2n) {
			border-left: 1px solid #dddddd;
		}
		&:last-child {
			border: none;
		}
	}
	&__input-address {
		padding: 0 25px;
		height: 100%;
		&:invalid:not(:placeholder-shown) {
			& + label::before {
				opacity: unset;
				content: "\e918";
				color: red;
			}
		}
		&:valid:not(:placeholder-shown) {
			& + label::before {
				opacity: unset;
				content: "\e901";
				color: greenyellow;
			}
		}
		&:placeholder-shown {
			color: $grey-primary;
			font-family: $poppins-light;
			font-size: $text-primary;
		}
	}
	&__form-check {
		&::before {
			font-size: $text-primary;
			font-family: "icomoon" !important;
			opacity: 1;
			width: 10px;
			height: 10px;
			position: absolute;
			@include posY_50;
			right: 10px;
			z-index: 10;
			display: block;
		}
	}
	&__badge-or {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50px;
		height: 50px;
		border: 1px solid #e6e6e6;
		background-color: $white-primary;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $grey-secondary;
		font-family: $poppins-medium;
		font-size: $text-secondary;
		@include mobile {
			display: none;
		}
		@include tablets {
			display: none;
		}
		@include laptops {
			display: none;
		}
	}
}
</style>