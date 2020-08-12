<template>
  <div 
  class="wrapper" 
  v-bind:style="`background-color: ${res};`"
  v-on:click="menuOpen($event)"
  v-on:click.right.prevent.stop="menuClose"
  >
    <div class="form">
      <h2 class="result">{{ res }}</h2>
	  <h2 class="result">{{ resTask2 }}</h2>
      <input 
	  v-model="inputValue" 
	  class="text" 
	  type="text" 
	  name="text" 
	  autocomplete="off"
	  v-on:click.stop/>
      <button class="Btn" v-on:click.stop="inputEdit">Confirm</button>
    </div>
	<ul 
	v-on:click=""
	class="menu"
	v-bind:style="`display:${menu.display};top:${menu.axeY}px;left:${menu.axeX}px;`"
	v-on:click.left.stop="menuClose"
	
	>
		<li 
		v-on:mousedown.stop="howPressTo($event)" 
		class="menu__item"
		>variant #1</li>
		<li 
		v-on:click="showDate" 
		class="menu__item"
		>variant #2</li>
	</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
	  res: "Example text task 1",
	  resTask2: "Example text task 2",
	  inputValue: null,
	  menu: {
		  display: 'none',
		  axeX: null,
		  axeY: null,
	  }
    };
  },
  methods: {
    inputEdit() {
      this.res = this.inputValue;
      this.inputValue = null;
	},
	menuOpen(event) {
		this.menu.display = 'block';
		this.menu.axeX = event.clientX + 5;
		this.menu.axeY = event.clientY + 5;
	},
	menuClose() {
		this.menu.display = 'none';
		this.menu.axeX = null;
		this.menu.axeY = null;
	},
	howPressTo(event) {
	    let button = event.button == 0 ? 'Left': 'Rigth';
		let text = `${button} button pressed.`
		this.resTask2 = text;
	},
	showDate() {
		let date = new Date();
		this.resTask2 = `${date.getHours()}:${date.getMinutes()}`;
	}
  },
};
</script>

<style lang="scss">
.wrapper {
	position: relative;
  width: 100%;
  height: 100%;
}
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
}
.text {
  width: 100%;
  border: 1px solid #000;
  border-radius: 15px 15px 0 0;
  outline: none;
  font-size: 22px;
  padding: 10px 0 10px 15px;
}
.Btn {
  font-size: 18px;
  outline: none;
  background-color: #c883da;
  color: #631c75;
  font-weight: 700;
  padding: 10px 0;
  width: 100%;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 0 0 15px 15px;
  border-top: none;
}
.result {
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 50px;
}
.menu {
	font-family: sans-serif;
	position: absolute;
	display: none;
	top: 50px;
	left: 50px;
	background-color: rgb(241, 241, 241);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	width: 200px;
		&__item {
			cursor: pointer;
			width: 100%;
			padding: 10px 15px;
			list-style-type: none;
			&:hover {
				background-color: #c883da;
			}
		}
}
</style>
