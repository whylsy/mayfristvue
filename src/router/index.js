import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/city',
      name: 'city',
      component: City
    },{
      path: '/detail/:sightId', //动态路由
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
})
