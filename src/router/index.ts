import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomeTab.vue')
      },
      {
        path: 'scanner',
        component: () => import('@/views/ScannerTab.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/AccountTab.vue')
      }
      ,
      {
        path: 'product/:barcode',
        component: () => import('@/views/ProductPage.vue')
      }
      ,
      {
        path: 'login',
        component: () => import('@/views/LoginPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
