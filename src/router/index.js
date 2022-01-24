import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index'

const privateRoutes = [
  {
    path: '/order',
    component: layout,
    redirect: '/order/all',
    meta: {
      title: '订单'
    },
    children: [
      {
        path: '/order/all',
        name: 'allOrder',
        component: () => import('@/views/order-manage/all-order/index'),
        meta: {
          title: '全部订单',
          icon: ''
        }
      },
      {
        path: '/article/detail',
        name: 'articleDetail',
        component: () => import('@/views/article/article-detail.vue'),
        meta: {
          title: '文章详情'
        }
      }
    ]
  }
]

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: layout,
    redirect: '/order/all',
    children: [
      // 404 401
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
