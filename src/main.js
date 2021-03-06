// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import messages from './locales/index'

axios.defaults.baseURL = 'http://localhost:8360';
axios.defaults.transformResponse = [function (data) {
  let d = JSON.parse(data);
  if (d.code != 0) throw d.msg || d.data;
  return d.data;
}]
Vue.prototype.axios = axios;
// install plugin
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh',
  messages
});


new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
