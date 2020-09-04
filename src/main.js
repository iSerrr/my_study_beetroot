import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './route/index'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAFjnW2AOAJMAr7QPmpBIp_r_xP1H4gulg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
}})


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBbcsFvgHLXDG8MOamOQ6uVDzGh9qULeJU",
  authDomain: "agora-testdb.firebaseapp.com",
  databaseURL: "https://agora-testdb.firebaseio.com",
  projectId: "agora-testdb",
  storageBucket: "agora-testdb.appspot.com",
  messagingSenderId: "151410962898",
  appId: "1:151410962898:web:c6891e003489f0c6ddd80b",
  measurementId: "G-JL93G8FKC3"
});

new Vue({
  VueAwesomeSwiper,
  store,
  router,
  render: h => h(App)
}).$mount('#app')


