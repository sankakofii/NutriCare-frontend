import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '/',
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
      },
      {
        path: 'account/allergies',
        component: () => import('@/views/AccountAllergyTab.vue')
      },
      {
        path: 'account/intolerances',
        component: () => import('@/views/AccountIntoleranceTab.vue')
      },
      {
        path: 'account/edit',
        component: () => import('@/views/EditAccountTab.vue')
      },
      {
        path: 'product/:barcode',
        component: () => import('@/views/ProductPage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/register/RegisterPage.vue'),
    children: [
      {
        path: '',
        redirect: '/register/form'
      },
      {
        path: 'form',
        component: () => import('@/views/register/RegisterFormPage.vue')
      },
      {
        path: 'phone',
        component: () => import('@/views/register/RegisterPhonePage.vue')
      },
      {
        path: 'phone/verification',
        component: () => import('@/views/register/RegisterPhoneVerificationPage.vue')
      },
      {
        path: 'final',
        component: () => import('@/views/register/RegisterFinalPage.vue')
      }
    ]
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
