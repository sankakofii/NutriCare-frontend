<template>

  <ion-page>
    <ion-header>
      <ion-toolbar color="danger" v-if="harm"/>
      <ion-toolbar color="success" v-else/>
    </ion-header>
    <ion-content v-if="storeScan.getted_product">
      <div class="product-header">
        <h1>{{ storeScan.getted_product?.product?.product_name}}</h1>
        <h2>Barcode: {{ storeScan.getted_product?.code }}</h2>
      </div>
      <div class="product-content">
        <div class="product-image">
          <img v-bind:src="storeScan.getted_product?.product?.image_front_url"/>
        </div>
        <div class="allergens">
          {{ storeScan.getted_product?.product?.allergens }}
        </div>
        <div class="allergens-from-ingredients">
          {{ storeScan.getted_product?.product?.allergens_from_ingredients }}
        </div>
      </div>
    </ion-content>
  </ion-page>
  
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonButtons, IonBackButton, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreScan } from '@/stores/storeScan'
import { useRoute } from 'vue-router'
import { arrowBack } from 'ionicons/icons';

const storeScan = useStoreScan()
const route = useRoute()
const harm = ref(false)

onIonViewWillEnter(( ) => {
  storeScan.getProductByBarcodeFromNCDB(route.params.barcode)
  if((storeScan.getted_product.harm).includes(' ')) {
    harm.value = true
  }
  console.log(storeScan.getted_product.harm)
})

onIonViewWillLeave(() => {
  storeScan.getted_product = {}
  harm.value = false
})



</script>

<style scoped>

.toolbar-okay {

}

.toolbar-not-okay {

}


</style>