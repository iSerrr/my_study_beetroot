<template>
	<div class="contacts">
		<div class="contacts__map-container">
			<GmapMap
				:center="center"
				:zoom="16"
				style="width: 100%; height: 100%"
				:options="{
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: false,
					disableDefaultUI: true,
					scrollwheel: false,
					styles: gMapStyles,
				}"
			>
				<gmap-custom-marker :marker="center">
					<div class="marker__img">
						<img
							:src="require('@/assets/images/contact/marker.png')"
						/>
						<p class="marker__desc">A</p>
					</div>
				</gmap-custom-marker>
			</GmapMap>
		</div>
		<div class="contacts__column">
			<h2 class="contacts__title">Contact Info</h2>
			<ul class="contacts__list">
				<li class="contacts__item">
					<i class="contacts__icon icon-c-location"></i>
					<p class="contacts__subtitle">address</p>
					<p class="contacts__desc">
						C. de Manuel González Longoria, 12, 28010 Madrid
					</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-c-phone"></i>
					<p class="contacts__subtitle">phone</p>
					<p class="contacts__desc">
						+7 234 949-58-83<br />+7 239 585-58-61
					</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-c-mail"></i>
					<p class="contacts__subtitle">E-mail</p>
					<p class="contacts__desc">support@agora.com</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-c-clock"></i>
					<p class="contacts__subtitle">working hours</p>
					<p class="contacts__desc">
						Monday-Friday: 8am-8pm Saturday 9am-1pm
					</p>
				</li>
			</ul>
		</div>
		<div class="contacts__column">
			<h2 class="contacts__title">Write to Us</h2>
			<p :class="{ active: notValid }" class="contacts__error">
				<span v-if="!statusValid">Your text is not validate!</span>
				 <span class="green" v-if="statusValid">Thank you for your feedback!</span>
			</p>
			<form @submit.prevent action="get" class="contacts__write-to-us">
				<input
					v-model="message.firstName"
					placeholder="First Name"
					class="contacts__input"
					type="text"
					name="firstname"
				/>
				<input
					v-model="message.lastName"
					placeholder="Last Name"
					class="contacts__input"
					type="text"
					name="lasttname"
				/>
				<textarea
					v-model="message.text"
					placeholder="Message"
					class="contacts__area"
					name="message"
				></textarea>
				<button v-on:click="onSend" class="contacts__btn">
					Send Message
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import GmapCustomMarker from "vue2-gmap-custom-marker";

export default {
	components: {
		GmapCustomMarker,
	},
	data() {
		return {
			notValid: false,
			statusValid: false,

			message: {
				firstName: "",
				lastName: "",
				text: "",
			},
			center: { lat: 40.428335, lng: -3.696494 },
			gMapStyles: [
				{
					featureType: "poi",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "labels",
					stylers: [
						{
							visibility: "on",
						},
					],
				},
				{
					featureType: "road.local",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "geometry",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#c8dbfe",
						},
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#d1e1ff",
						},
						{
							visibility: "on",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "labels",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
			],
		};
	},
	computed: {},
	methods: {
		onSend() {
			let namePattern = /^[A-Z][a-z]{3,10}$/;
			let textPattern = /^[A-Za-z ]{3,250}$/;
			let firstValid = namePattern.test(this.message.firstName);
			let lastValid = namePattern.test(this.message.lastName);
			let text = textPattern.test(this.message.text);
			if (firstValid && lastValid && text) {
				this.notValid = true;
				this.statusValid = true;
				setTimeout(() => {
				this.notValid = false;
			}, 5000);
				return;
			}
			this.statusValid = false;
			this.notValid = true;
		},
	},
};
</script>

<style lang='scss' scoped>
.contacts {
	display: flex;
	flex-wrap: wrap;
	background-color: $white-primary;
	@include mobile {
		flex-direction: column;
	}
	@include tablets {
		flex-direction: column;
	}
	&__map-container {
		width: 100%;
		height: 560px;
	}
	&__column {
		position: relative;
		width: 50%;
		height: 560px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 15px;
		@include mobile {
			width: 100%;
			padding-top: 50px;
			height: auto;
		}
		@include tablets {
			width: 100%;
			padding-top: 50px;
			height: auto;
		}
		&:last-child {
			border-left: 2px solid #dddddd;
			@include mobile {
				padding-bottom: 40px;
			}
			@include tablets {
				padding-bottom: 40px;
			}
		}
	}
	&__title {
		color: $black-secondary;
		font-family: $oswald-regular;
		font-size: $title-secondary;
		margin-bottom: 45px;
	}
	&__list {
		width: 500px;
		display: flex;
		flex-wrap: wrap;
		@include mobile {
			width: 100%;
		}
		@include tablets {
			width: 100%;
		}
	}
	&__item {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: $text-primary;
		&:nth-child(2n) {
			border-left: 1px dotted #dddddd;
		}
		&:nth-child(1),
		&:nth-child(2) {
			border-bottom: 1px dotted #dddddd;
			padding-bottom: 25px;
		}
		&:nth-child(3),
		&:nth-child(4) {
			padding-top: 25px;
		}
		@include mobile {
			padding: 0 15px;
		}
		@include tablets {
			padding: 0 15px;
		}
	}
	&__icon {
		color: $blue-primary;
		font-size: 30px;
		margin-bottom: 30px;
	}
	&__subtitle {
		color: #222222;
		font-family: $poppins-semi-bold;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		margin-bottom: 15px;
		@include mobile {
			text-align: center;
		}
		@include tablets {
			text-align: center;
		}
	}
	&__desc {
		width: 50%;
		text-align: center;
		font-family: $poppins-light;
		color: $grey-primary;
		line-height: 18px;
		@include mobile {
			width: 100%;
		}
		@include tablets {
			width: 100%;
		}
	}
	&__error {
		position: relative;
		color: red;
		padding: 10px 0;
		font-family: $poppins-medium;
		font-size: $title-primary;
		z-index: 1;
		transform: translateY(110%);
		transition: transform 250ms ease-in-out;
		&> .green {
			color: rgb(24, 206, 0);
		}
		&.active {
			transform: translateY(0);
		}
	}
	&__write-to-us {
		position: relative;
		z-index: 3;
		background-color: $white-primary;
		max-width: 500px;
		width: 100%;
		height: 300px;
		border: 1px dotted #dddddd;
		border-radius: 15px;
		overflow: hidden;
		& > *:placeholder-shown {
			color: $grey-primary;
			font-family: $poppins-light;
			font-size: $text-primary;
		}
		@include mobile {
			width: 100%;
		}
		@include tablets {
			width: 100%;
		}
	}
	&__input {
		width: 50%;
		height: 75px;
		padding: 25px;
		border-bottom: 1px solid #dddddd;
		&:first-child {
			border-right: 1px solid #dddddd;
		}
	}
	&__area {
		width: 100%;
		height: calc(100% - 150px);
		border: none;
		resize: none;
		padding: 25px;
		outline: none;
	}
	&__btn {
		width: 100%;
		height: 75px;
		box-shadow: 0 5px 20px rgba(58, 84, 214, 0.4);
		background-color: $blue-primary;
		color: $white-primary;
		font-family: $poppins-medium;
		font-size: $text-secondary;
	}
}

.marker {
	&__img {
		width: 50px;
		height: 50px;
		position: relative;
		z-index: 1;
	}

	&__desc {
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $white-primary;
		font-family: $poppins-semi-bold;
		font-size: $title-primary;
		text-transform: uppercase;
	}
}
</style>