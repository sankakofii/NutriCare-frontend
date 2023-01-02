<template>
    <ion-page>
        <ion-content>
          <div class="register">
            <div class="logo-box">
              <ion-img
                class="logo"
                src="../assets/nutricare/nutricare-logo.png"
                alt="nutricare logo"
              />
            </div>
            <div class="register-header">
                <h1>All done!</h1>
                <h2>Click on register to create your new account!</h2>
            </div>        
          </div>
        </ion-content>
        <ion-footer>
            <div class="register-button-link-box">
              <ion-button class="register-next-button" :router-link="`/tabs/home`" @click="storeAuth.register()">Register</ion-button>
            </div>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, IonFooter, onIonViewWillLeave } from '@ionic/vue';
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
    padding-top: 25%;
    text-align: center;
}

ion-footer {
    bottom: 20%;
}


.register-button-link-box {
  display: flex;
  justify-content: center;
}

h2 {
    font-size: 15px;
}
</style> 