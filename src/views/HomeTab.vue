<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scanned Products</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <div v-if=storeScan.scanList>
          <ion-list v-for="product in storeScan.scanList" :key="product.code">
            <div class="item">
              <p class="scan-time">Scan time: {{ product.scanTime }}</p>
              <ion-button class="item-button" :router-link="`product/${product.code}`">{{ product.product.product_name }}</ion-button>
              <div class="item-image-box">
                <div class="item-image">
                  <img v-bind:src="product.product.image_front_url"/>
                </div>
              </div>
            </div>
          </ion-list>
        </div>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan.js'
import { useStoreAccount } from '@/stores/storeAccount'

const storeScan = useStoreScan()
const storeAccount = useStoreAccount()

onIonViewWillEnter(( ) => {
  storeScan.getScannedProductsByAccountId(storeAccount.account.accountId)
})

onIonViewWillLeave(() => {
  storeScan.scanList = []
})

</script>

<style scoped>
  .item {
    background: rgb(48, 46, 46);
    width: 100%;
    height: 100px;
    position: relative;
  }

  .item-button {
  }

  .item-image-box {
    position: absolute;
    right: 10px;
    height: 100px;
    width: 70px;
    top: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-image {
    max-height: 100%;
    border: 1px solid rgb(122, 117, 117);
    border-radius: 4px;
  }

  .scan-time {
    font-size: 10px;
  }

</style>
