import { defineStore } from 'pinia'

import { HTTP } from '@/api/config.js'


const config = {
  headers: {
    
  },
}


export const useStoreScan = defineStore('storeScan', {
  state: () => {
    return {
      scan_response: [],
      getted_product: {},
      scanList: []
    }
  },
  actions: {
    scanProduct(barcode) {
      console.log("started")
        HTTP.get(`Scans/get_product_info?barcode=${barcode}`, config)
          .then((response) => {
            this.scan_response.push(response.data)
            this.last_scan = response.data
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
    getScannedProductsByAccountId(account_id) {
      HTTP.get(`Scans/scan_histories_of_account?account_id=${account_id}`, config)
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
