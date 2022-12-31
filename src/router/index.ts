import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: '/tabs/home',
        component: () => import('@/views/HomeTab.vue')
      },
      {
        path: '/tabs/scanner',
        component: () => import('@/views/ScannerTab.vue')
      },
      {
        path: '/tabs/account',
        component: () => import('@/views/AccountTab.vue')
      }
      ,
      {
        path: '/tabs/product/:barcode',
        component: () => import('@/views/ProductPage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
