<template>
  <div id="app">
    <StartPage/>
  </div>
 
</template>

<script>
import StartPage from './components/StartPage.vue'

export default {
  name: 'App',
  components: {
    StartPage,
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
</style>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
