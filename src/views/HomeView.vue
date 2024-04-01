<template>
  <div
    class="scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#header"
    data-bs-offset="0"
    tabindex="0"
  >
    <Banner />
    <Solucoes />
    <Parallax />
    <Tecnologias />
    <Parallax />
    <Parceiros />
    <QuemSomos />
    <FaleConosco />    
  </div>
</template>

<script>
import Banner from '@/components/banner/Banner.vue'
import Solucoes from '@/components/solucoes/Solucoes.vue'
import Parallax from '@/components/parallax/Parallax.vue'
import Tecnologias from '@/components/tecnologias/Tecnologias.vue'
import Parceiros from '@/components/parceiros/Parceiros.vue'
import FaleConosco from '@/components/faleConosco/FaleConosco.vue'
import QuemSomos from '@/components/quemSomos/QuemSomos.vue'

export default {
  data() {
    return {}
  },
  components: {
    Banner,
    Solucoes,
    Parallax,
    Tecnologias,
    Parceiros,
    FaleConosco,
    QuemSomos
  },
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    }
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
