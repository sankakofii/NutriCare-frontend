<template>
    <ion-page>
        <ion-content>
            <ion-input v-model="credentials.email"></ion-input>
            <ion-input v-model="credentials.password"></ion-input>
            <ion-button @click="storeAuth.login(credentials)">Sign in</ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { reactive } from 'vue'

const credentials = reactive({
  email: '',
  password: '',
})
</script>

<style scoped>
    ion-input {
        background: pink;
        padding-top: 10px;
    }
</style>