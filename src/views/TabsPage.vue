<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/scanner">
          <ion-icon :icon="barcode" />
          <ion-label>Scan</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/account">
          <ion-icon :icon="person" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, barcode, person} from 'ionicons/icons';

</script>
