import Vue from 'vue'
import Router from 'vue-router'
import Hom from '@/pages/home/Hom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hom',
      component: Hom
    }
  ]
})
