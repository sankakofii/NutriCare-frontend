<template>
  <ion-page>
    <ion-content class="scanner-tab" :fullscreen="true">
      <!-- <div class="loading-text" v-if="load"><p class="loading-text-vertical">Loading...</p></div> -->
    </ion-content>
    
  </ion-page>
</template>

<script setup>

// import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan.js'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


// const text = ref("");
// const id = ref(null)
// const scanActive = ref(false)

const storeScan = useStoreScan()

onIonViewWillEnter(( ) => {
  BarcodeScanner.prepare()
})

onIonViewDidEnter(() => {
  startScan()
})

onIonViewWillLeave(( ) => {
  document.querySelector('body').classList.remove('scanner-active');
})



const startScan = async () => {
  //fix for barcodescanner.hideBackground()
  document.querySelector('body').classList.add('scanner-active');
  // Check camera permission
  await BarcodeScanner.checkPermission({ force: true });

  // make background of WebView transparent
  // note: if you are using ionic this might not be enough, check below
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  // if the result has content
  if (result.hasContent) {
    console.log(result.content); // log the raw scanned content
    storeScan.scanProduct(result.content)
    stopScan()
  }
};

const stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};

// const checkPermision = () => {
//   const status = await BarcodeScanner.checkPermission({force: true})
//   if(status.granted){
//     return true
//   }
//   return false
// };


  
</script>

<style scoped>
  ion-content {
      --background: #00000000;
      --ion-color-base: transparent;
      --ion-background-color: transparent;
  }

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

