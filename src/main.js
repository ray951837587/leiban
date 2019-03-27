// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import iView from 'iview';
import $ from 'jquery';
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css';
import 'lib-flexible'


Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(ElementUI)
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
