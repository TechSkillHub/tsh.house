<template>
  <div id="presentation">
    <Banner />
    <Services />
    <Cards />
  </div>
</template>

<script>
import Banner from './banner/Banner.vue'
import Services from './services/Services.vue'
import Cards from './cards/Cards.vue'

export default {
  components: {
    Banner,
    Services,
    Cards
  }
}
</script>

<style lang="scss" scoped>
#presentation {
  min-height: 100vh;
  margin-top: -100px;
  background-color: $dark;
}
</style>