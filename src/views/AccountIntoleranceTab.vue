<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="toolbar-title">
          <ion-title>Intolerances</ion-title>
        </div>
        <div class="toolbar-add-icon-box">
          <ion-icon size="large" :icon="add" @click="presentAlert()" class="toolbar-add-icon" />
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if=storeAccount.account.intolerances>
        <ion-list v-for="intolerance in storeAccount.account.intolerances" :key="intolerance.type">
          <div class="item">
            <p class="item-type">{{ intolerance.type }}</p>
            <ion-button class="item-delete-button" color="danger" @click="storeAccount.deleteIntolerance(intolerance.intoleranceId)">Delete</ion-button>
          </div>
        </ion-list>
        </div>
    </ion-content>
  </ion-page>
</template>


<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, IonButtons, IonModal, IonLabel, alertController, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { useStoreAccount } from '@/stores/storeAccount'
import { add } from 'ionicons/icons'
import { ref } from 'vue';


const storeAccount = useStoreAccount()



onIonViewWillEnter(( ) => {
  storeAccount.getIntoleranceList()
})

const IntoleranceList = storeAccount.intolerances

const presentAlert = async () => {
  const input = {data: []};

  IntoleranceList.forEach(element => {
    input.data.push({type: 'radio', label: element.type, value: element.intoleranceId})
  });

  console.log(input)
  const alert = await alertController.create({
    header: 'Select intolerance',
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Ok',
        handler: (data) => {
          storeAccount.setIntolerance(data)
        }
      }],
    inputs: input.data
    });

  await alert.present();
}

</script>

<style scoped>
.item {
    display: flex;
    justify-content: space-between;
}

.toolbar-add-icon-box {
  float: right;
}

.toolbar-add-icon {
  align-content: right;
}
</style>