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
                <h1>Verification</h1>
                <h2>Input the code from SMS</h2>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Code</ion-label>
                <ion-input type="text" v-model="verificationCode" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>            
          </div>
        </ion-content>
        <ion-footer>
            <div class="register-button-link-box">
              <ion-button class="register-next-button" :router-link="`/register/phone`">Back</ion-button>
              <ion-button class="register-next-button" :router-link="`/register/final`" @click="storeAuth.verifyCode()">Verify</ion-button>
            </div>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, IonFooter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreAuth } from '@/stores/storeAuth'
import {ref} from "vue"

const storeAuth = useStoreAuth()
const verificationCode = ref("")
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
  padding-top: 20%;
  text-align: center;
}

ion-footer {
    bottom: 20%;
}

.code-options {
    display: flex;
    justify-content: space-between;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
}

.register-button-link-box {
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
}

.register-next-button {
    top: 40%;
}

.register-back-button {
    top: 40%;
}

.register-link {
  display: block;
  padding: 0;
}

h2 {
    font-size: 15px;
}
</style> 