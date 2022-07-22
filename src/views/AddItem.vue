<template>
  <div class="container">
    <div class="text_new_item">
      <h2 class="new_auction">Dodaj nowe ogłoszenie</h2>
      <p class="random_text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum id illum itaque labore, minima nam pariatur
        suscipit voluptas voluptatibus?
      </p>
    </div>
    <div class="add_new_item_box">
      <form @submit.prevent="submitCreate()">
        <div class="input_auction">
          <input required v-model="auction.company" type="text" class="input_auction_size" placeholder="Nazwa kampani">
        </div>
        <div class="input_auction">
          <input required v-model="auction.fund" type="text" class="input_auction_size" placeholder="Fundusz kampani">
        </div>
        <div class="input_auction">
          <input required v-model="auction.item" type="text" class="input_auction_size" placeholder="Przedmiot">
        </div>
        <div class="input_auction">
          <input required v-model="auction.price" type="Number" class="input_auction_size" placeholder="Cena">
        </div>
        <div class="input_auction">
          <select required v-model="auction.groupId" class="select_auction_size" v-if="groups.length > 0">
            <option value="">Miasto</option>
            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
          </select>
        </div>
        <div class="input_auction">
          <input type="submit" class="submit_button" value="Dodaj">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {AuctionService} from "@/services/AuctionService";

export default {
  name: "AddItem",
  data: function () {
    return {
      auction: {
        item: '',
        company: '',
        fund: '',
        price: '',
        groupId: ''
      },
      groups: []
    }
  },
  created: async function () {
    try {
      let resposne = await AuctionService.getAllGroups()
      this.groups = resposne.data;
    } catch (error) {
      console.log('error')
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = await AuctionService.createAuction(this.auction);
        if (response) {
          return this.$router.push('/')
        }else {
          return this.$router.push('/Add')
        }
      } catch (error) {
        console.log('error add')
      }
    }
  }
}
</script>

<style scoped>

</style>