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
                <ion-input type="password" v-model="credentials.password" placeholder="Enter text"></ion-input>
              </ion-item>
            </div>
            <div class="login-button-link-box">
              <ion-button class="login-button" @click="signIn">Log In</ion-button>
              <router-link :to="`/register/form`" class="register-link">I don't have an account.</router-link>
            </div>
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

.input {
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  top: 25%;
}

.logo-box {
  padding: 15%;
  position: relative;
  top: 20%;
}

.login-button-link-box {
  position: relative;
  display: inline;
  top: 30%;
}

.login-button {
  width: 45%;
}

.register-link {
  display: block;
  padding: 5%;
}
</style> 