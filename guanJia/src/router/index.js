import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import home from '@/components/home'
import kehu from '@/components/kehu'
import qiyelist from '@/view/qiyelist'
import creatlist from '@/view/creatlist'
import manage from '@/view/manage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/kehu',
      name:'kehu',
     component: kehu
    },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
        {
          path:'/home/manage',
          name:'manage',
          component:manage
        }
          ,  {
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
