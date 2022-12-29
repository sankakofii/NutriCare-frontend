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
 const storeScan = useStoreScan()

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
      storeScan.scanProduct(a)
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

  
</script>

<style scoped>
</style>

