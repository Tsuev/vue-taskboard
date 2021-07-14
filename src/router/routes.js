import VueRouter from "vue-router";
import MainPage from '@/view/MainPage.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
      {
        name: 'home',
        path: '/',
        component: MainPage
      }
  ]
})