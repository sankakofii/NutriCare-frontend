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
                <h1>Register your account</h1>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="storeAuth.registerData.email" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input type="password" v-model="storeAuth.registerData.password" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Confirm password</ion-label>
                <ion-input type="password" v-model="storeAuth.registerData.password2" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">First Name</ion-label>
                <ion-input v-model="storeAuth.registerData.firstName" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Last Name</ion-label>
                <ion-input v-model="storeAuth.registerData.lastName" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>

            <div class="register-button-link-box">
              <router-link to="/register/phone"
              ><ion-button class="register-next-button">Next</ion-button></router-link>
              
              <router-link :to="`/login`" class="register-link">I have an account.</router-link>
            </div>
          </div>
        </ion-content>
    </ion-page>
</template>

<script setup>

import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, onIonViewWillLeave } from '@ionic/vue';
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