import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.less'
import '@/assets/css/max992screen.less'
import router from './router'
import App from './App.vue'
import '@/assets/icons' // icon

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
