import { store } from '@/store'
import nprogress from 'nprogress' 
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes :RouteRecordRaw[] = [
  {
    path:'/films',
    meta:{showTab:true},
    component:()=>import(/* webpackChunkName: 'FilmBar' */ '@/views/film/bar/FilmBar.vue'),
    children:[
      {
        path: '/films/filmList/:type',
        name: 'FilmList',
        component: () => import(/* webpackChunkName: 'FilmList' */ '@/views/film/bar/FilmList.vue'),
        meta: { showTab: true }
      },
      {
        path: '/films',
        redirect: '/films/filmList/1'
      }
    ]
  },
  {
    path: '/film/:filmId',
    name: 'FilmDetail',
    component: () => import(/* webpackChunkName: 'FilmDetail' */ '@/views/film/detail/FilmDetail.vue')
  },
  {
    path: '/cinemas',
    meta: { showTab: true },
    component: () => import(/* webpackChunkName: 'CinemaBar' */ '@/views/cinema/bar/CinemaBar.vue'),
  },
  {
    path: '/center',
    meta: { requiresAuth: true, showTab: true },
    component: () => import(/* webpackChunkName: 'CenterBar' */ '@/views/center/bar/CenterBar.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'Login' */ '@/views/login/Login.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'Setting' */ '@/views/setting/Setting.vue'),
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: 'CityList' */ '@/views/city/list/CityList.vue'),
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