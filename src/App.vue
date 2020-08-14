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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
* {
  margin: 0;
	padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>