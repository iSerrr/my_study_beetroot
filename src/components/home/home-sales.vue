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
				v-bind:src="require(`../../assets/images/products/p55f91e1/silver/sale.webp`)"
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
			timer: '00000000',
		};
	},
		computed: {
		date: function () {
			return new Date(2020, 8, 10, 15, 59);
		},
	},
	beforeCreate() {
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
	position: relative;
	display: flex;
	@include tablets {
		height: 100%;
	}
	& > div {
		width: 50%;
	}
	&__content {
		padding: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@include tablets {
			height: calc(50vw);
			overflow: hidden;
			margin-top: 25px;
			justify-content: flex-start;
		}
		@include laptops {
			overflow: hidden;
			margin-top: 25px;
			justify-content: flex-start;
		}
	}
	&__notice {
		color: $grey-secondary;
		font-family: $poppins-medium;
		font-size: $text-primary;
		letter-spacing: 1.8px;
		text-transform: uppercase;
		margin-bottom: 25px;
	}
	&__title {
		color: $black-secondary;
		font-family: $oswald-regular;
		font-size: 36px;
		margin-bottom: 25px;
		@include tablets {
			font-size: 25px;
		}
		@include laptops {
			font-size: 30px;
			margin-bottom: 10px;
		}
	}
	&__desc {
		text-align: center;
		width: 493px;
		color: $grey-primary;
		font-family: $poppins-regular;
		font-size: $title-primary;
		line-height: 30px;
		margin-bottom: 50px;
		@include tablets {
			width: 100%;
			font-size: 15px;
			margin-bottom: 20px;
		}
		@include laptops {
			width: 100%;
			overflow: hidden;
			margin-top: 25px;
			justify-content: flex-start;
		}
	}
	&__price {
		color: $blue-primary;
		font-family: $poppins-semi-bold;
		font-size: 48px;
		margin-bottom: 70px;
		@include tablets {
			position: absolute;
			bottom: 30%;
			left: 50%;
			transform: translateX(-50%,);
			font-size: 35px;
			margin-bottom: 20px;
		}
	}
	&__old-price {
		color: $black-secondary;
		font-family: $poppins-medium;
		font-size: 30px;
		text-decoration: line-through;
		margin-left: 45px;
		@include tablets {
			font-size: 25px;
		}
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
	background-color: rgba(255, 255, 255, 0.65);
	@include tablets {
			position: absolute;
			bottom: 15%;
			left: 50%;
			transform: translateX(-50%);
		}
		@include laptops {
				position: absolute;
			top: 50%;
			left: 75%;
			transform: translateX(-50%);
		}
	&__item {
		height: 100%;
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		border-right: 1px solid $black-primary;
		font-family: $poppins-medium;
		&:last-child {
			border: none;
		}
	}
	&__value {
		color: $black-secondary;
		font-size: 25px;
	}
	&__desc {
		color: $blue-primary;
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
}
</style>




