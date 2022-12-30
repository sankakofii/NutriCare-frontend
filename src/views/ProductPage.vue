<template>

  <ion-page>
    <ion-content v-if="storeScan.getted_product">
      <div class="product-header">
        <h1>{{ storeScan.getted_product?.product.product_name}}</h1>
        <h2>Barcode: {{ storeScan.getted_product?.code }}</h2>
      </div>
      <div class="product-content">
        <div class="product-image">
          <img v-bind:src="storeScan.getted_product?.product.image_front_url"/>
        </div>
        <div class="allergens">
          {{ storeScan.getted_product?.product.allergens }}
        </div>
        <div class="allergens-from-ingredients">
          {{ storeScan.getted_product?.product.allergens_from_ingredients }}
        </div>
      </div>
    </ion-content>
  </ion-page>
  
</template>

<script setup>
import { IonPage, IonContent, IonButtons, IonBackButton, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan'
import { useRoute } from 'vue-router'
import { arrowBack } from 'ionicons/icons';

const storeScan = useStoreScan()
const route = useRoute()

onIonViewWillEnter(( ) => {
  storeScan.getProductByBarcodeFromNCDB(route.params.barcode)
})

onIonViewWillLeave(() => {
  storeScan.getted_product = {}
})

</script>

<style scoped>

</style>