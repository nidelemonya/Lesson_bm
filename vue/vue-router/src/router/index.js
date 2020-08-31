import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Params from '@/components/Params.vue'
import Error from '@/components/Error.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      components: {  // 多 router-view 的时候要 加 s 为 components
        default:Home,
        left:Hi1,
        right:Hi2
      },
      alias:'/home1'
    },
    {
      path: '/jspang',
      name: 'Home',
      components: {  // 多 router-view 的时候要 加 s 为 components
        default:Home,
        left:Hi2,
        right:Hi1
      }
    },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   alias:'/home1'
  // },
  {
    path: '/params/:newsId(\\d+)/:newsTitle', // 冒号绑定 括号加 正则 限制为数字
    component: Params
  },
  {
    path: '/hi',
    component: Hi,
    children:[
      {path: '/',name:'Home/Hi', component:Hi},
      {path: 'hi1',name:'hi1', component:Hi1}, // 注意这里有小坑 /
      {path: 'hi2',name:'hi2', component:Hi2} // 传 name 面包屑
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/goHome',
    redirect:'/' // 重定向
  },
  {
    path: '/goParams/:newsId(\\d+)/:newsTitle',
    redirect: '/params/:newsId(\\d+)/:newsTitle'
  },
  {
    path: '/hi1',
    component:Hi1,
    alias:'/lemon' // 更友好的重定向的方式
  },{
    path:'*', // 代表 404
    component:Error
  }
]

const router = new VueRouter({
  // mode: 'history',
  // mode: 'hash', // 默认为哈希路由
  base: process.env.BASE_URL,
  routes
})

export default router
