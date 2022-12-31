<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="account-box" v-if="storeAccount.account">
        <div class="account-info">
          <ion-img
            src="../assets/account/default-avatar.jpg"
            alt="account avatar"
            class="account-avatar"
          />
          <div class="account-info-content">
            <p>Name: {{ storeAccount.account?.firstName }} {{ storeAccount.account?.lastName }} </p>
            <p>Email: {{ storeAccount.account?.email }}</p>
            <p>Phone number: {{ storeAccount.account?.phoneNumber }}</p>
          </div>
        </div>
        <div class="account-allergens-info">
          <div class="allergens">
            <div class="allergens-header">
              <h2 class="account-aller-into-header">Allergies</h2>
              <div class="account-aller-into-header-icon-box">
                <ion-icon class="account-aller-into-header-icon" :icon="create" />
              </div>
            </div>
            <ion-list v-for="allergen in storeAccount.account.allergies" :key="allergen.type">
              <div class="allergy-item">
                <p>{{ allergen.type }}</p>
              </div>
            </ion-list>
          </div>
          
          <div class="intolerances">
            <div class="allergens-header">
              <h2 class="account-aller-into-header">Intolerances</h2>
              <div class="account-aller-into-header-icon-box">
                <ion-icon class="account-aller-into-header-icon" :icon="create" />
              </div>
            </div>
              <ion-list v-for="intolerance in storeAccount.account.intolerances" :key="intolerance.type">
                <div class="allergy-item">
                  <p>{{ intolerance.type }}</p>
                </div>
              </ion-list>
          </div>          
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { create } from 'ionicons/icons';
import { useStoreAccount } from '@/stores/storeAccount'

const storeAccount = useStoreAccount()

</script>

<style scoped>

  .account-info {
    display: flex;
    background: gray;
  }

  .account-avatar {
    height: 48px;
    width: 48px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .account-info-content {
    padding-left: 10px;
  }

  .account-allergens-info {
    padding-top: 10px;
  }

  .account-aller-into-header {
    font-size: 20px;
    padding-left: 10px;
    width: 50%;
  }

  .allergy-item {
    padding-left: 15px;
  }

  .allergens {
    display: relative;
  }

  .allergens-header {
    display: flex;
  }

  .account-aller-into-header-icon-box {
    height: 100%;
    width: 30px;
    margin-left: auto; 
    margin-right: 0;
    padding-top: 15px;
  }

  .account-aller-into-header-icon {
    height: 24px;
    width: 24px;
  }
</style>
