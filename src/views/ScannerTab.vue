<template>
  <ion-page>
    <ion-content>
      <div v-if="!stop">
        <StreamBarcodeReader
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
  console.log("load");
}

  
</script>

<style scoped>
</style>

