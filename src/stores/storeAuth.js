import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import { HTTP } from '@/api/config.js'

import { useStoreAccount } from '@/stores/storeAccount.js'
import { useStoreScan } from './storeScan'

const storeAccount = useStoreAccount()
const storeScan = useStoreScan()

const config = {
  headers: {
    NCApiKey: `9753a148-1261-4238-8dfc-89a91d834f4e`
  },
}

HTTP.defaults.headers['NCApiKey'] = process.env.NC_APP_API_KEY


export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
      return {
        user: useStorage('user', []),
        registerData: {},
        responseMessage: {}
      }
    },
    actions: {
      loginUser(credentials) {
        HTTP.post('Auth/login', {
            email: credentials.email,
            password: credentials.password
        }, config)
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
      register(registerData) {
        HTTP.post('Auth/register', {
          email: this.registerData.email,
          password: this.registerData.password,
          firstName: this.registerData.firstName,
          lastName: this.registerData.lastName,
          phoneNumber: this.registerData.phoneNumber  
        })
          .then((response) => {
            console.log(response.data)
            storeAccount.account = response.data
            storeScan.getScannedProductsByAccountId(storeAccount.account.accountId)
            this.router.push('/tabs/home')
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
      }
    }
  })