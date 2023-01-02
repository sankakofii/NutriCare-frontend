<template>
    <ion-page>
        <ion-tabs>
          <ion-router-outlet></ion-router-outlet>
        </ion-tabs>
    </ion-page>
</template>

<script setup>

import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, onIonViewWillLeave, IonRouterOutlet, IonTabs } from '@ionic/vue';
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

</script>


<style lang="scss" scoped>

.register {
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.logo-box {
    position: relative;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
}

.register-header {
    padding-top: 5%;
    text-align: center;
}

.input {
  width: 100%;
  padding-left: 5%;
  padding-right: 10%;
  text-align: center;
}

.register-button-link-box {
  position: relative;
  display: inline;
  top: 5%;
}

.register-next-button {
  width: 45%;
}

.register-link {
  display: block;
  padding: 3%;
}
</style> 