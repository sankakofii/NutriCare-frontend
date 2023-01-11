import { defineStore } from 'pinia'
import { HTTP } from '@/api/config.js'
import { useStoreAuth } from './storeAuth'

const storeAuth = useStoreAuth()


const config = {
  headers: {
    Authorization: `bearer ${storeAuth.user.token}`
  }
}


export const useStoreAccount = defineStore('storeAccount', {
    state: () => {
      return {
        user: {},
        account: {},
        allergies: [],
        intolerances: []
      }
    },
    actions: {
      setAllergy(id) {
        HTTP.post(`Accounts/allergies/set_allergy`, {
          accountId: this.account.accountId,
          allergyId: id
        }, config)
        .then((response) => {
          console.log(response.data)
          this.account.allergies = response.data.allergies
          console.log(this.account)
        })
        .catch(function (error) {
          console.log(error)
      })
      },
      setIntolerance(id) {
        HTTP.post(`Accounts/intolerances/set_intolerance`, {
          accountId: this.account.accountId,
          intoleranceId: id
        }, config)
        .then((response) => {
          console.log(response.data)
          this.account.intolerances = response.data.intolerances
          console.log(this.account)
      })
      .catch(function (error) {
          console.log(error)
      })
      },
      deleteAllergy(id) {
        HTTP.delete(`Accounts/allergies/remove_allergy?AllergyId=${id}&AccountId=${this.account.accountId}`, config)
        .then((response) => {
          console.log(response.data)
          this.account.allergies = response.data.allergies
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      deleteIntolerance(id) {
        HTTP.delete(`Accounts/intolerances/remove_intolerance?IntoleranceId=${id}&AccountId=${this.account.accountId}`, config)
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
        HTTP.get(`Intolerances`, config)
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
        HTTP.get(`Allergies`, config)
        .then((response) => {
          console.log(response.data)
          this.allergies = response.data
          console.log(this.allergies)
        })
        .catch(function (error) {
          console.log(error)
      })
      },
      getAccountById() {
        HTTP.get(`Accounts/${storeAuth.user.accountId}`, config)
        .then((response) => {
          this.account = response.data
        }, config)
        .catch(function (error) {
          console.log(error)
      })
      }
    }
  })