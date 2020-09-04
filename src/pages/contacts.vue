<template>
	<div class="contacts">
		<div class="contacts__map-container">
            <GmapMap
  :center="{lat:40.428335, lng:-3.696494}"
  :zoom="16"
  
  style="width: 100%; height: 100%"
>
</GmapMap>
        </div>
		<div class="contacts__column">
			<h2 class="contacts__title">Contact Info</h2>
			<ul class="contacts__list">
				<li class="contacts__item">
					<i class="contacts__icon icon-map-pin"></i>
					<p class="contacts__subtitle">address</p>
					<p class="contacts__desc">
						C. de Manuel González Longoria, 12, 28010 Madrid
					</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-phone-call"></i>
					<p class="contacts__subtitle">phone</p>
					<p class="contacts__desc">
						+7 234 949-58-83<br />+7 239 585-58-61
					</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-envelope"></i>
					<p class="contacts__subtitle">E-mail</p>
					<p class="contacts__desc">support@agorastore.com</p>
				</li>
				<li class="contacts__item">
					<i class="contacts__icon icon-Shape_87"></i>
					<p class="contacts__subtitle">working hours</p>
					<p class="contacts__desc">
						Monday-Friday: 8am-8pm Saturday 9am-1pm
					</p>
				</li>
			</ul>
		</div>
		<div class="contacts__column">
			<h2 class="contacts__title">Write to Us</h2>
			<form action="get" class="contacts__write-to-us">
				<input
					placeholder="First Name"
					class="contacts__input"
					type="text"
					name="firstname"
				/>
				<input
					placeholder="Last Name"
					class="contacts__input"
					type="text"
					name="lasttname"
				/>
				<textarea
					placeholder="Message"
					class="contacts__area"
					name="message"
				></textarea>
				<button class="contacts__btn">Send Message</button>
			</form>
		</div>
	</div>
</template>

<script>
import googleMapLoader from "../components/google-map-loader";

export default {
	components: {
		googleMapLoader,
	},
};
</script>

<style lang='scss' scoped>
.contacts {
	display: flex;
	flex-wrap: wrap;
	&__map-container {
		width: 100%;
		height: 560px;
		background-color: wheat;
	}
	&__column {
		width: 50%;
		height: 560px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		&:last-child {
			border-left: 2px solid #dddddd;
		}
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 20px;
		margin-bottom: 45px;
	}
	&__list {
		width: 500px;
		display: flex;
		flex-wrap: wrap;
	}
	&__item {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 12px;
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
	}
	&__icon {
		color: $blueDefault;
		font-size: 30px;
		margin-bottom: 30px;
	}
	&__subtitle {
		color: #222222;
		font-family: $poppinsSemiBold;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		margin-bottom: 15px;
	}
	&__desc {
		width: 50%;
		text-align: center;
		font-family: $poppinsLight;
		color: #888888;
		line-height: 18px;
	}
	&__write-to-us {
		width: 500px;
		height: 300px;
		border: 1px dotted #dddddd;
		border-radius: 15px;
		overflow: hidden;
		& > *:placeholder-shown {
			color: #888888;
			font-family: $poppinsLight;
			font-size: 12px;
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
		background-color: #3a54d6;
		color: #ffffff;
		font-family: $poppinsMedium;
		font-size: 14px;
	}
}
</style>