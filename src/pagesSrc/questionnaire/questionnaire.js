import Vue from 'vue'
import questionnaire from './questionnaire.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(questionnaire),
}).$mount('#questionnaire')
