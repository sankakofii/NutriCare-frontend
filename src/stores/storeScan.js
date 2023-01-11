import { defineStore } from 'pinia'

import { HTTP } from '@/api/config.js'
import { useStoreAuth } from './storeAuth'

const storeAuth = useStoreAuth()

const config = {
  headers: {
    Authorization: `bearer ${storeAuth.user.token}`
  },
}


export const useStoreScan = defineStore('storeScan', {
  state: () => {
    return {
      scan_response: {},
      getted_product: {},
      scanList: []
    }
  },
  actions: {
    scanProduct(barcode) {
      console.log("started")
        HTTP.get(`Scans/get_product_info?barcode=${barcode}&AccountId=${storeAuth.user.accountId}`, config)
          .then((response) => {
            this.scan_response = response.data
            this.getted_product = response.data
            this.router.replace(`product/${barcode}`)
            console.log(this.scan_response)
          })
          .catch((error) => {
            alert(error)
            console.log(error)
          })
    },
    getProductByBarcodeFromNCDB(barcode) {
      HTTP.get(`Products/get_product_by_barcode?barcode=${barcode}`, config)
        .then((response) => {
          this.getted_product = response.data
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
    getScannedProductsByAccountId() {
      HTTP.get(`Scans/scan_histories_of_account?account_id=${storeAuth.user.accountId}`, config)
        .then((response) => {
          this.scanList = response.data
          console.log(this.scanList)
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    }
  }
})
