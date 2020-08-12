<template>
  <div id="app">
    <Gallery/>
  </div>
 
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {


  name: 'App',
  components: {
    Gallery,
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