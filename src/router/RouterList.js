import VueRouter from 'vue-router'
import MainPage from '../views/MainPage/MainPage.vue'

export default new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '*', component: MainPage }
  ]
})
