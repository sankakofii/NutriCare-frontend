<template>
  <ion-page>
    <ion-content class="scanner-tab" :fullscreen="true">
      <div class="loading-text" v-if="load"><p class="loading-text-vertical">Loading...</p></div>
      <div class="scanner" v-if="!stop">
        <StreamBarcodeReader class="scan"
            @decode="(a, b, c) => onDecode(a, b, c)"
            @loaded="() => onLoaded()"
        ></StreamBarcodeReader>
      </div>
    </ion-content>
    
  </ion-page>
</template>

<script setup>

import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { StreamBarcodeReader } from "vue-barcode-reader";
import { useStoreScan } from '@/stores/storeScan.js'

const text = ref("");
const stop = ref(false)
const id = ref(null)
const load = ref(true)

const storeScan = useStoreScan()

const onDecode = (a, b, c) => {
  console.log(a, b, c);
  text.value = a;
  console.log('almost')
  storeScan.scanProduct(a)
  stop.value = true
  console.log('passed')
  if (id.value) clearTimeout(id.value);
  id.value = setTimeout(() => {
    if (text.value === a) {
      text.value = "";
    }
  }, 5000);
}

const onLoaded = () => {
  load.value = false;
  console.log("load");
}

  
</script>

<style scoped>
  .loading-text {
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .loading-text-vertical{
    position: relative;
    top: 50%;
  }

  .scanner {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  .scan {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
</style>

