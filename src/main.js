import Vue from 'vue'
import App from './example/App.vue'
import UmtComponents from './../index'

Vue.config.productionTip = false

Vue.use(UmtComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
