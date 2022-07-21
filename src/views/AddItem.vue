<template>
  <div class="container">
    <div class="text_new_item">
      <h2 class="new_auction">Dodaj nowe ogłoszenie</h2>
      <p class="random_text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum id illum itaque labore, minima nam pariatur suscipit voluptas voluptatibus?
      </p>
    </div>
    <div class="add_new_item_box">
      <form>
        <div class="input_auction">
          <input type="text" class="input_auction_size" placeholder="Nazwa kampani">
        </div>
        <div class="input_auction">
          <input type="text" class="input_auction_size" placeholder="Fundusz kampani">
        </div>
        <div class="input_auction">
          <input type="text" class="input_auction_size" placeholder="Przedmiot">
        </div>
        <div class="input_auction">
          <input type="Number" class="input_auction_size" placeholder="Cena">
        </div>
        <div class="input_auction">
          <select class="select_auction_size">
            <option value="">Miasto</option>
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
export default {
  name: "AddItem"
}
</script>

<style scoped>

</style>