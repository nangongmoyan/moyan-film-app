import { store } from '@/store'
import nprogress from 'nprogress' 
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes :RouteRecordRaw[] = [
  {
    path:'/films',
    meta:{showTab:true},
    component:()=>import(/* webpackChunkName: 'films' */ '@/views/film/bar/FilmBar.vue'),
    children:[
      {
        path: '/films/filmList/:type',
        name: 'FilmList',
        component: () => import(/* webpackChunkName: 'ComingSoon' */ '@/views/film/bar/FilmList.vue'),
        meta: { showTab: true }
      },
      {
        path: '/films',
        redirect: '/films/filmList/1'
      }
    ]
  },
  {
    path: '/cinemas',
    meta: { showTab: true },
    component: () => import(/* webpackChunkName: 'cinemas' */ '@/views/cinema/bar/CinemaBar.vue'),
  },
  {
    path: '/center',
    meta: { requiresAuth: true, showTab: true },
    component: () => import(/* webpackChunkName: 'center' */ '@/views/center/bar/CenterBar.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/login/Login.vue')
  },
  {
    path: '/',
    redirect: '/films'
  }
]

const router = createRouter({
  /** 路由模式 */
  history: createWebHashHistory(), 
  /** 路由规则 */
  routes 
})



router.beforeEach((to, _, next )=>{
  /** 开始加载进度条 */
  nprogress.start() 
  if (to.meta.requiresAuth && !store.state.user) {
    router.push({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }else {
    next()
  }
})


router.afterEach(() => {
  /** 进度条加载结束 */
  nprogress.done()  
})

export default router