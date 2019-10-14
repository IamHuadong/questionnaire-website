import Vue from 'vue'
import console from './console.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(console),
}).$mount('#app')
