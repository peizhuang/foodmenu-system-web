// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'


// install plugin
Vue.use(VueI18n);


const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    ja: {
      hello: 'こんにちは'
    },
    en: {
      hello: 'hello'
    }
  }
})

// set locales
/*
 Object.keys(locales).forEach(function (lang) {
 Vue.locale(lang, locales[lang]);
 });
 */


new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
