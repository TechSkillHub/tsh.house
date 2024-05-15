<template>
  <div id="presentation">
    <Banner />
    <Services />
    <Cards />
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Services from './Services.vue'
import Cards from './Cards.vue'

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