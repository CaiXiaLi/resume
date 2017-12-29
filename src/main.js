// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import GuidePage from './components/guide.vue'
import ClassifyPage from './components/classify.vue'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(
{
  el: '#app',
  template: '<App/>',
  components: { App }
},
{
  el: '#guidePage',
  template: '<GuidePage/>',
  components: { GuidePage }
},
{
  el: '#classifyPage',
  template: '<ClassifyPage/>',
  components: { ClassifyPage }
}

)
