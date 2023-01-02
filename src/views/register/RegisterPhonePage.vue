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
                <h2>Fill the form</h2>
                <h2>Example (+4550358875)</h2>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Phone Number</ion-label>
                <ion-input v-model="storeAuth.registerData.phoneNumber" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            
          </div>
        </ion-content>
        <ion-footer>
            <div class="register-button-link-box">
              <router-link to="/register/form"><ion-button class="register-back-button">Back</ion-button></router-link>
              <router-link to="/register/phone/verification"><ion-button class="register-next-button" @click="storeAuth.sendVerificationSMS()">Send</ion-button></router-link>
            </div>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, IonFooter } from '@ionic/vue';
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
  padding-top: 20%;
  text-align: center;
}

ion-footer {
    bottom: 20%;
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