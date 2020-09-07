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
					placeholder="E-mail"
					type="text"
					name="login"
					class="shipping__input"
				/>
				<input
					placeholder="Password"
					type="password"
					class="shipping__input"
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
			>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="First Name"
					name="first-name"
				/>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="Last Name"
					name="second-name"
				/>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="E-mail"
					name="email"
				/>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="Phone"
					name="phone"
				/>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="City"
					name="city"
				/>
				<input
					class="shipping__input-address"
					type="text"
					placeholder="Zip/Postal Code"
					name="zip"
				/>
				<input
					placeholder="Address"
					class="shipping__input-address"
					type="text"
					name="address"
				/>
			</form>
		</div>
		<p class="shipping__badge-or">or</p>
	</div>
</template>

<script>
export default {};
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
	&__form-info {
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
	&__input-address {
		flex-grow: 1;
		width: 50%;
		border-bottom: 1px solid #dddddd;
		padding: 0 25px;
		&:placeholder-shown {
			color: $grey-primary;
			font-family: $poppins-light;
			font-size: $text-primary;
		}
		&:nth-child(2n) {
			border-left: 1px solid #dddddd;
		}
		&:last-child {
			border: none;
		}
	}
	&__badge-or {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
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