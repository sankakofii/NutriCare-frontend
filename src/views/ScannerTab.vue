<template>
  <ion-page>
    <ion-content class="scanner-tab" :fullscreen="true">
      <!-- <div class="loading-text" v-if="load"><p class="loading-text-vertical">Loading...</p></div> -->
      <div class="scanner">
        <ion-button @click="startScan">Start</ion-button>
        <ion-button @click="stopScan">Stop</ion-button>
      </div>
    </ion-content>
    
  </ion-page>
</template>

<script setup>

import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan.js'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const text = ref("");
const stop = ref(false)
const id = ref(null)
const load = ref(true)

const storeScan = useStoreScan()


const startScan = async () => {
  BarcodeScanner.hideBackground();
  const result = await BarcodeScanner.startScan();
  if (result.hasContent) {
    console.log(result.content);
  }
};

const stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};


  
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

