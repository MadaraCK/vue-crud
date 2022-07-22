<template>
  <div class="container" v-if="contacts.length > 0">
    <div class="home_box">
      <h1 class="home_main">Start</h1>
      <p class="home_random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto asperiores autem cum, debitis delectus
        dignissimos eaque esse harum illo ipsa libero minima quisquam quod repellat reprehenderit soluta tempora
        temporibus.
      </p>
      <div class="add_new_auction">
        <p class="new_auction">
          Tutaj możesz wystawić nowe ogłoszenie!
        </p>
        <router-link to="/Add" class="auction">Nowe ogłoszenie</router-link>
      </div>
      <div class="box" v-for="contact of contacts" :key="contact" >
        <ul class="box_input_text">
          <li class="input_text_li">Nazwa: <span class="about_text">{{contact.company}}</span></li>
          <li class="input_text_li">Fundusz: <span class="about_text">{{contact.fund}}</span></li>
          <li class="input_text_li">Przedmiot: <span class="about_text">{{contact.item}}</span></li>
          <li class="input_text_li">Cena: <span class="about_text">{{contact.price}}zł</span></li>
          <li class="input_text_li">Miasto: <span class="about_text">{{contact.groupId}}</span></li>
        </ul>
        <div class="awsome_box">
          <router-link :to="`/edit/${contact.id}`" class="edit">
            <i class="fa fa-pen"></i>
          </router-link>
          <button class="trash" @click="clickDeleteAuction">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {AuctionService} from "@/services/AuctionService";

export default {
  name: "StartHome",
  data: function () {
    return {
      contacts: [],
      group: {}
    }
  },
  created: async function () {
    try {
      let response = await AuctionService.getAllAuction()
      let groupResponse = await AuctionService.getAllGroups(response.data)
      this.contacts = response.data;
      this.group = groupResponse.data;
    } catch (error) {
      console.log('error')
    }
  },
  methods: {
    clickDeleteAuction:async function (auctionId){
      try {
        let response = await AuctionService.deleteAuction(auctionId)
        if (response){
          let response = await AuctionService.getAllAuction();
          this.contacts = response.data;
        }
      }
      catch (error){
        console.log('error')
      }
    }
  }
}
</script>

<style scoped>

</style>