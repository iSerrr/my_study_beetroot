<template>
	<div class="sales">
		<div class="sales__content">
			<p class="sales__notice">deal of day</p>
			<h2 class="sales__title">Acronym Jacket: J1A-GT</h2>
			<p class="sales__desc">
				Suspendisse massa leo, vestibulum cursus nulla sit amet,
				fringilla placerat lorem. Cras fermentum, sapien eu accumsan
				ultrices.
			</p>
			<p class="sales__price">
				${{ (price / 100) * (100 - sale) }}
				<span class="sales__old-price">${{ price }}</span>
			</p>
			<ul class="timer">
				<li class="timer__item">
					<p class="timer__value">{{timer.slice(0,2)}}</p>
					<p class="timer__desc">day</p>
				</li>
				<li class="timer__item">
					<p class="timer__value">{{timer.slice(2,4)}}</p>
					<p class="timer__desc">hours</p>
				</li>
				<li class="timer__item">
					<p class="timer__value">{{timer.slice(4,6)}}</p>
					<p class="timer__desc">mins</p>
				</li>
				<li class="timer__item">
					<p class="timer__value">{{timer.slice(6,8)}}</p>
					<p class="timer__desc">sec</p>
				</li>
			</ul>
		</div>
		<div class="sales__img">
			<img
				class="sales__img"
				v-bind:src="
					require('../assets/images/products/p55f91e1/silver/sale.webp')
				"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			price: 1800,
			sale: 25,
			timer: null,
		};
	},
		computed: {
		date: function () {
			return new Date(2020, 8, 10, 15, 59);
		},
	},
	mounted() {
			const timer = (end) => {
				let curent = new Date();
				let diferent = end - curent;
				let day = (diferent - (diferent % 86400000)) / 86400000;
				let hours =
					((diferent % 86400000) -
						((diferent % 86400000) % 3600000)) /
					3600000;
				let min =
					((diferent % 3600000) - ((diferent % 3600000) % 60000)) /
					60000;
				let sec = Math.floor((diferent % 60000) / 1000);
				day = day + "";
				sec = sec + "";
				min = min + "";
				hours = hours + "";
				if (day.length < 2) day = "0" + day;
				if (hours.length < 2) hours = "0" + hours;
				if (min.length < 2) min = "0" + min;
				if (sec.length < 2) sec = "0" + sec;
				return day + hours + min + sec;
    };
    setInterval(()=> {
 this.timer = timer(this.date);
    },1000)
	}
};
</script>

<style lang="scss" scoped>
.sales {
	display: flex;
	& > div {
		width: 50%;
	}
	&__content {
		padding: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	&__notice {
		color: #bbbbbb;
		font-family: $poppinsMedium;
		font-size: 12px;
		letter-spacing: 1.8px;
		text-transform: uppercase;
		margin-bottom: 25px;
	}
	&__title {
		color: #111111;
		font-family: $oswaldRegular;
		font-size: 36px;
		margin-bottom: 25px;
	}
	&__desc {
		text-align: center;
		width: 493px;
		color: #888888;
		font-family: $poppinsRegular;
		font-size: 18px;
		line-height: 30px;
		margin-bottom: 50px;
	}
	&__price {
		color: #3a54d6;
		font-family: $poppinsSemiBold;
		font-size: 48px;
		margin-bottom: 70px;
	}
	&__old-price {
		color: #111111;
		font-family: $poppinsMedium;
		font-size: 30px;
		text-decoration: line-through;
		margin-left: 45px;
	}
	&__img {
		width: 100%;
	}
}
.timer {
	display: flex;
	justify-content: space-between;
	width: 300px;
	height: 75px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	padding: 20px;
	&__item {
		height: 100%;
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		border-right: 1px solid #000;
		font-family: $poppinsMedium;
		&:last-child {
			border: none;
		}
	}
	&__value {
		color: #111111;
		font-size: 25px;
	}
	&__desc {
		color: #3a54d6;
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
}
</style>




