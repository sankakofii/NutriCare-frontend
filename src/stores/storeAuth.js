import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import { HTTP } from '@/api/config.js'

import { useStoreAccount } from '@/stores/storeAccount.js'

const storeAccount = useStoreAccount()

const config = {
  headers: {
    
  },
}



export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
      return {
        user: useStorage('user', []),
        registerData: {}
      }
    },
    actions: {
      loginUser(credentials) {
        HTTP.post('Auth/login', {
            email: credentials.email,
            password: credentials.password
        })
            .then((response) => {
                console.log(response)
                console.log(response.data)
                this.user = {
                    email: response.data.email
                }
                storeAccount.account = response.data
                this.router.push('/tabs/home')
                console.log(storeAccount.account)
            })
            .catch(function (error) {
                console.log(error)
            })
      },
      register() {
        console.log("registering...")
      },
      sendVerificationSMS() {
        console.log("sending SMS...")
      },
      verifyCode() {
        console.log("verifying the code...")
      }
    }
  })