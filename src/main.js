import Vue from 'vue'
import App from './App.vue'
import store from './v-store/index.js'
import router from './v-route/index'
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
  store,
  router,
  render: h => h(App)
}).$mount('#app')
