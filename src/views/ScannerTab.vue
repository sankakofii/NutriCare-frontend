<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scanner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
      <StreamBarcodeReader
          @decode="(a, b, c) => onDecode(a, b, c)"
          @loaded="() => onLoaded()"
      ></StreamBarcodeReader>
    </ion-content>
    
  </ion-page>
</template>

<script>

import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { StreamBarcodeReader } from "vue-barcode-reader";
import { HTTP } from '@/api/config'
import { useStoreScan } from '@/stores/storeScan.js'

const config = {
  headers: {
    
  },
}
// const storeScan = useStoreScan()

export default defineComponent({
  name: 'ScannerTab',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, StreamBarcodeReader },
  data() {
    return {
      text: "",
      id: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    
    onDecode(a, b, c) {
      console.log(a, b, c);
      this.text = a;
      console.log('almost')
      scan()
      console.log('passed')
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text === a) {
          this.text = "";
        }
      }, 5000);
    },
    onLoaded() {
      console.log("load");
    },
    
    }
  });

  scan(() => {
      console.log("started")
      HTTP.get(`scans/get_product_info/${this.text}`, config)
        .then((response) => {
          this.scan_response = response.data
          console.log(this.scan_response)
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
  })
</script>

<style scoped>
</style>

