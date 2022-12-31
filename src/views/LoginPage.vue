<template>
    <ion-page>
        <ion-content>
          <div class="login">
            <div class="logo-box">
              <ion-img
                class="logo"
                src="../assets/nutricare/nutricare-logo.png"
                alt="nutricare logo"
              />
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="credentials.email" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="input">
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input v-model="credentials.password" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <ion-button class="login-button" @click="signIn">Log In</ion-button>
          </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonLabel, IonButton, IonImg, IonItem, onIonViewWillLeave } from '@ionic/vue';
import { useStoreAuth } from '@/stores/storeAuth'
import { reactive, ref } from 'vue'

const storeAuth = useStoreAuth()

const credentials = reactive({
  email: '',
  password: '',
})

const error = ref(false)
const errorMessage = ref('')


/* Sign in */
const signIn = () => {
  if (!credentials.email || !credentials.password) {
    error.value = true
    errorMessage.value = 'You have to fill all the fields'
  } else {
    storeAuth.loginUser(credentials)
  }
}

</script>

<style lang="scss" scoped>

.login {
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.login-button {
  position: relative;
  margin-top: 20px;
  width: 50%;
  position: relative;
  top: 35%;
}

.input {
  width: 90%;
  padding-left: 15px;
  position: relative;
  top: 30%;
}

.logo-box {
  padding: 15%;
  position: relative;
  top: 20%;
}
</style> 