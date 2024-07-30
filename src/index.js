import 'tailwindcss/tailwind.css'
import 'material-design-icons/iconfont/material-icons.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router/Router.vue'
import axios from '../axios.config.js'
import Mock from 'mockjs'
var store = require('store')

Vue.prototype.$axios = axios
Vue.prototype.$mock = Mock
Vue.prototype.$store = store
Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#content',
  render (h) {
    return h(Router)
  }
})
