<template>
  <Cookies />
  <Transition>
    <ModalDefault v-if="modalDefault.show" :modalInfo="modalDefault" />
  </Transition>
  <transition name="fade" mode="out-in">
    <Loading v-if="loading" />
  </transition>
  <Header v-if="route != '/presentation' && route != '/landing-sites'" />
  <RouterView />
  <Footer v-if="route != '/presentation' && route != '/landing-sites'" />
</template>

<script>
import Cookies from '@/common/cookies/Cookies.vue'
import ModalDefault from '@/common/modal/Default.vue'
import Loading from '@/common/loading/Loading.vue'
import Header from '@/common/header/Header.vue'
import Footer from '@/common/footer/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: {
    Cookies,
    ModalDefault,
    Loading,
    Header,
    Footer
  },
  computed: {
    loading() {
      return this.$store.state.manager.loading
    },
    modalDefault() {
      return this.$store.state.manager.modalDefault
    },
    route() { 
      return this.$route.path
    }
  },
  mounted() {},
  created() {},
  watch: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
#app {
  padding-top: 99px;
  @media (max-width: $lg) {
    padding-top: 86px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
