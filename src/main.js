import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'
import './assets/css/basic.css'
import VueSticky from 'vue-sticky'
import RGBaster from './util/rgbaster.js';
Vue.use(VueSticky)
Vue.use(ElementUI)
import  infiniteScroll from 'vue-infinite-scroll'
Vue.use( infiniteScroll);
Vue.use(VueAxios,axios,RGBaster)
Vue.config.productionTip = false
import { Sticky } from 'vant';
Vue.use(Sticky);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
