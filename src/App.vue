<template>
  <div id="app">
    <appMain/>
  </div>
 
</template>

<script>
import appMain from './components/app-main.vue'

export default {
  name: 'App',
  components: {
    appMain,
  }
}
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
* {
  margin: 0;
	padding: 0;
  box-sizing: border-box;
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
#app {
  width: 100%;
  height: 100%;
}
</style>