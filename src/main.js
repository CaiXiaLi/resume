// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import GuidePage from './components/guide.vue'
import ClassifyPage from './components/classify.vue'
import MyInformation from './components/myInformation.vue'
import WorkExperience from './components/workExperience.vue'
import Skills from './components/skills.vue'
import Shows from './components/shows.vue'
import Wechat from './components/wechat.vue'
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
},
{
  el: '#myInformation',
  template: '<MyInformation/>',
  components: { MyInformation }
},
{
  el: '#workExperience',
  template: '<WorkExperience/>',
  components: { WorkExperience }
},
{
  el: '#skills',
  template: '<Skills/>',
  components: { Skills }
},
{
  el: '#shows',
  template: '<Shows/>',
  components: { Shows }
},
{
  el: '#wechat',
  template: '<Wechat/>',
  components: { Wechat }
}
)
