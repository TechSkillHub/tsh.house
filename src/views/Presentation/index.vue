<template>
  <div id="presentation">
    <Banner />
    <Services />
    <Cards />
  </div>
</template>

<script>
import Banner from './banner/index.vue'
import Services from './services/index.vue'
import Cards from './cards/index.vue'

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