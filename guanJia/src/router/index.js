import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import home from '@/components/home'
import qiyelist from '@/view/qiyelist'
import creatlist from '@/view/creatlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
            {
          path:'/home/qiyelist',
          name:'qiyelist',
          component:qiyelist
           },{
          path:'/home/creatlist',
          name:'createlist',
          component:creatlist
        }
      ]
    }

  ]
})
