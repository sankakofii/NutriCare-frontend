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
    }
  },
  actions: {
    scanProduct(barcode) {
      console.log("started")
        HTTP.get(`Scans/get_product_info?barcode=${barcode}`, config)
          .then((response) => {
            this.scan_response = response.data
            console.log(this.scan_response)
          })
          .catch((error) => {
            alert(error)
            console.log(error)
          })
    }
  }
})
