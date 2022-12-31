import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import { HTTP } from '@/api/config.js'



const config = {
  headers: {
    
  },
}


export const useStoreAccount = defineStore('storeAccount', {
    state: () => {
      return {
        account: {},
      }
    },
    actions: {
      
    }
  })