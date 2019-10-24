/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex'
import VueI18n from 'vue-i18n';

import App from './App.vue';
import lang from './locales';
import store from './store'

Vue.use(VueI18n);
Vue.use(Vuex);


Vue.config.productionTip = false;

console.log(lang);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    ...lang
  },
});

new Vue({
  i18n,
  store,
  render: h => h(App),
}).$mount('#app');
