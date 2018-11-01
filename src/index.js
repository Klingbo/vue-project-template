// 项目入口文件
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import axios from 'axios';

Vue.prototype.$axios = axios;

new Vue({
  el:'#app',
  data:{},
  render:(c)=>c(App),
  store,
  router,
})
