<template>

<ion-page>
  <ion-content>
    <div>
    {{ $route.params.id }}
  </div>
  </ion-content>
</ion-page>
  
</template>

<script setup>
import { IonPage,IonContent } from '@ionic/vue';
</script>

<style lang="scss" scoped>

</style>