<template>
  <div class="container">
    <div class="text_new_item">
      <h2 class="new_auction">Edycja ogłoszenia</h2>
      <p class="random_text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit ipsam minima officia unde, voluptatem!
        Commodi ea eveniet facilis, illum inventore libero rerum tenetur voluptas.
      </p>
    </div>
    <div class="add_new_item_box">
      <form @submit.prevent="updateSubmit()">
        <div class="input_auction">
          <input v-model="auction.company" type="text" class="input_auction_size" placeholder="Nazwa kampani">
        </div>
        <div class="input_auction">
          <input v-model="auction.fund" type="text" class="input_auction_size" placeholder="Fundusz kampani">
        </div>
        <div class="input_auction">
          <input v-model="auction.item" type="text" class="input_auction_size" placeholder="Przedmiot">
        </div>
        <div class="input_auction">
          <input v-model="auction.price" type="Number" class="input_auction_size" placeholder="Cena">
        </div>
        <div class="input_auction">
          <select v-model="auction.groupId" class="select_auction_size" v-if="groups.length > 0">
            <option value="">Miasto</option>
            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
          </select>
        </div>
        <div class="input_auction">
          <input type="submit" class="submit_button" value="Edytuj">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {AuctionService} from "@/services/AuctionService";

export default {
  name: "EditItem",
  data: function () {
    return {
      auctionId: this.$route.params.auctionId,
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
      let response = await  AuctionService.getAuction(this.auctionId);
      this.auction = response.data
      let groupResponse = await AuctionService.getAllGroups();
      this.groups = groupResponse.data
    } catch (error) {
      console.log('error')
    }
  },
  methods:{
    updateSubmit: async function () {
      try {
        let response = await AuctionService.updateAuction(this.auction, this.auctionId);
        if (response) {
          return this.$router.push('/')
        }else {
          return this.$router.push(`/edit/${this.auctionId}`)
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