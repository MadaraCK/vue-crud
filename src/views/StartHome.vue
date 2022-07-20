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
          <router-link to="/Add" class="auction">Nowe ogłoszenie</router-link>
        </p>
      </div>
      <div class="box">
        xd
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