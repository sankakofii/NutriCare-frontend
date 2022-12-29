<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
        <div v-if=storeScan.scan_response>
          <ion-list v-for="product in storeScan.scan_response" :key="product.code">
            <ion-button :to="`product/${product.code}`"><ion-item>{{product.code}}</ion-item></ion-button>
          </ion-list>

        </div>
        
      </ion-header>
    
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonButton } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan.js'

const storeScan = useStoreScan()


</script>
