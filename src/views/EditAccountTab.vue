<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Edit account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid fixed no-padding>
      <ion-row>
        <ion-col size="12" padding>

          <ion-list margin-bottom>
            <ion-list-header color="light">
              <ion-label class="fw700">Form</ion-label>
            </ion-list-header>

            <ion-item>
              <ion-label color="dark" position="stacked">First Name:</ion-label>
              <ion-input v-model="editData.newFirstName" placeholder="Ex..: Joe"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label color="dark" position="stacked">Last Name:</ion-label>
              <ion-input v-model="editData.newLastName" placeholder="Ex.: Mama"></ion-input>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-button size="large" expand="full" color="dark" @click="edit" no-margin>Edit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList, IonLabel, IonInput, IonListHeader, IonButton, onIonViewWillLeave } from '@ionic/vue';
import { useStoreAccount } from '@/stores/storeAccount'
import { reactive } from 'vue'

const storeAccount = useStoreAccount()

const editDataInitial = reactive({
  newFirstName: '',
  newLastName: ''
})

const editData = reactive({
  newFirstName: '',
  newLastName: '',
})

const edit = () => {
    console.log(editData)
    storeAccount.editAccountById(editData.newFirstName, editData.newLastName)
}

onIonViewWillLeave(() => {
    Object.assign(editData, editDataInitial)
})

</script>

<style scoped>
  
</style>
