import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant-element/dist/vant-element.css'
import VantElement from 'vant-element'
import router from './router'

Vue.use(Vant)
Vue.use(VantElement)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
