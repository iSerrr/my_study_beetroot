<template>
	<div class="container">
		<div class="large-12 medium-12 small-12 cell">
			<label
				>File
				<input
					type="file"
					id="file"
					ref="file"
					v-on:change="handleFileUpload()"
				/>
			</label>
			<button v-on:click="submitFile()">Submit</button>
		</div>
		{{ num }}
	</div>
</template>
<script>
import Axios from "axios";

export default {
	data() {
		return {
			file: "",
			num: 0,
		};
	},
	methods: {
		submitFile() {
			let formData = new FormData();
			formData.append("file", this.file);
			Axios.post("http://localhost:3000/testPost", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
				.then(() => {
					console.log("SUCCESS!!");
				})
				.catch(() => {
					console.log("FAILURE!!");
				});
		},
		handleFileUpload() {
			this.file = this.$refs.file.files[0];
		},
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
				return day + ":" + hours + ":" + min + ":" + sec;
    };
    setInterval(()=> {
 this.num = timer(this.date);
    },1000)
   
	},
};
</script>

<style>
</style>