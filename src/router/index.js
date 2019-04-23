import Vue from 'vue'
import Router from 'vue-router'
import Hom from '@/pages/Hom'
import City from '@/pages/city/City'
import Cities from '@/pages/cities/Cities'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hom',
      component: Hom
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/cities',
      name: 'Cities',
      component: Cities
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 页面切换的时候回到最顶部
    return { x: 0, y: 0 }
  }
})
