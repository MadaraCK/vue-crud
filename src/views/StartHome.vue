<template>
  <div class="container">
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
      <div class="box">
        <ul class="box_input_text">
          <li class="input_text_li">Name: <span class="about_text">Nazwa kampani</span></li>
          <li class="input_text_li">Fundusz: <span class="about_text">Fundusz kampani</span></li>
          <li class="input_text_li">Przedmiot: <span class="about_text">Przedmiot</span></li>
          <li class="input_text_li">Cena: <span class="about_text">Cena</span></li>
          <li class="input_text_li">Miasto: <span class="about_text">Miasto</span></li>
        </ul>
        <div class="awsome_box">
          <router-link to="/edit" class="edit">
            <i class="fa fa-pen"></i>
          </router-link>
          <button class="trash">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartHome"
}
</script>

<style scoped>

</style>