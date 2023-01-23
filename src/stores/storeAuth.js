import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import { HTTP } from '@/api/config.js'

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
      return {
        user: {},
        registerData: {},
        responseMessage: {}
      }
    },
    actions: {
      loginUser(credentials) {
        HTTP.post('Auth/login', {
            email: credentials.email,
            password: credentials.password
        })
            .then((response) => {
                // console.log(response)
                // console.log(response.data)
                // storeAccount.account = response.data.account

                this.user = { 
                  token: response.data.token,
                  refreshToken: response.data.refreshToken,
                  accountId: response.data.account.accountId
                }
                // storeAccount.user = response.data.token
                console.log(this.user)
                this.router.push('/tabs/home')
                // console.log(storeAccount.account)
                // console.log(this.user)
            })
            .catch(function (error) {
                console.log(error)
            })
      },
      register() {
        HTTP.post('Auth/register', {
          email: this.registerData.email,
          password: this.registerData.password,
          firstName: this.registerData.firstName,
          lastName: this.registerData.lastName,
          phoneNumber: this.registerData.phoneNumber  
        })
          .then((response) => {
            console.log(response.data)
            // storeAccount.account = response.data.account

            this.user = { 
              token: response.data.token,
              refreshToken: response.data.refreshToken,
              accountId: response.data.account.accountId
            }

            console.log(this.user)
            // storeScan.getScannedProductsByAccountId(storeAccount.account.accountId)
            this.router.push('/tabs/home')
            // this.router.push('/login')
          })
          .catch(function (error) {
            console.log(error)
        })
      },
      sendVerificationSMS() {
        HTTP.post(`PhoneService/send_registration_code?phoneNumber=%2B${this.registerData.phoneNumber.toString()}`)
            .then((response) =>{
              console.log(response.data)
            })
            .catch(function (error) {
              console.log(error)
            })
      },
      verifyCode() {
        HTTP.post(`PhoneService/verify_code?codeFromSMS=${this.registerData.verificationCode}&phoneNumber=%2B${this.registerData.phoneNumber.toString()}`)
          .then((response) =>{
              console.log(response.data)
              this.responseMessage = response.data
              if(this.responseMessage == 'approved'){
                this.router.push('/register/final')
              } else{
                console.log('else')
              }
           })
           .catch(function (error) {
            console.log(error)
          })
      },
      logout() {
        this.user = {}
        this.registerData = {}
        this.responseMessage = {}
        this.router.push('/')
      }
    }
  })