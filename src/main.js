import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios);

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
