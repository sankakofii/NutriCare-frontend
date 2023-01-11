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
        allergies: {},
        intolerances: []
      }
    },
    actions: {
      setAllergy() {
        console.log("creating...")
      },
      setIntolerance(id) {
        HTTP.post(`Accounts/intolerances/set_intolerance`, {
          accountId: this.account.accountId,
          intoleranceId: id
        })
        .then((response) => {
          console.log(response.data)
          this.account.intolerances = response.data.intolerances
          console.log(this.account)
      })
      .catch(function (error) {
          console.log(error)
      })
      },
      deleteAllergy(accountId, allergyId) {
        console.log("deleting...")
      },
      deleteIntolerance(id) {
        HTTP.delete(`Accounts/intolerances/remove_intolerance`, {
          data: {
            accountId: this.account.accountId,
            intoleranceId: id
          }
        })
        .then((response) => {
          console.log(response.data)
          this.account.intolerances = response.data.intolerances
          console.log(this.account)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getAllIntolerances() {
        console.log('getting...')
      },
      getAllAllergies() {
        console.log("getting...")
      },
      getIntoleranceList() {
        HTTP.get(`Intolerances`)
        .then((response) => {
          console.log(response)
          console.log(response.data)
          this.intolerances = response.data
          console.log(this.intolerances)
      })
      .catch(function (error) {
          console.log(error)
      })
      },
      getAllergyList() {
        HTTP.get(`Intolerances`)
      }
    }
  })