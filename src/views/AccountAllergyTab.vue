<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="toolbar-title">
          <ion-title>Allergies</ion-title>
        </div>
        <div class="toolbar-add-icon-box">
          <ion-icon size="large" :icon="add" @click="presentAlert()" class="toolbar-add-icon" />
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <div v-if=storeAccount.account.allergies>
            <ion-list v-for="allergy in storeAccount.account.allergies" :key="allergy.type">
            <div class="item">
                <p class="item-type">{{ allergy.type }}</p>
                <ion-button class="item-delete-button" color="danger" @click="storeAccount.deleteAllergy(allergy.allergyId)">Delete</ion-button>
            </div>
            </ion-list>
        </div>
    </ion-content>
  </ion-page>
</template>


<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, alertController, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { add } from 'ionicons/icons'
import { useStoreAccount } from '@/stores/storeAccount.js'

const storeAccount = useStoreAccount()

onIonViewWillEnter(( ) => {
  storeAccount.getAllergyList()
})

const AllergyList = storeAccount.allergies

const presentAlert = async () => {
  const input = {data: []};
  console.log(AllergyList)
  AllergyList.forEach(element => {
    input.data.push({type: 'radio', label: element.type, value: element.allergyId})
  });

  console.log(input)
  const alert = await alertController.create({
    header: 'Select allergy',
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Ok',
        handler: (data) => {
          storeAccount.setAllergy(data)
        }
      }],
    inputs: input.data
    });

  await alert.present();
}


</script>

<style scoped>

.toolbar-add-icon-box {
  float: right;
}

.toolbar-add-icon {
  align-content: right;
}

.item {
    display: flex;
    justify-content: space-between;
    background: rgb(51, 49, 49);
}

.item-type {
    padding-left: 10%;
}

.item-delete-button {
    padding-right: 10%;
}
</style>