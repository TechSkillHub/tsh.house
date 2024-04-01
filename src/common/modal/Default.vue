<template>
  <div id="modalDefault" class="modal d-block show">
    <div class="mask" @click="close()"></div>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <h1 class="modal-title fs-5">{{ modalInfo.title }}</h1>
          <button type="button" class="btn-close" @click="close()"></button>
        </div>
        <div class="modal-body text-center">
          {{ modalInfo.body }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn primary mx-auto" @click="close()">Close</button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  props: {
    modalInfo: {
      type: Object
    }
  },
  data() {
    return {}
  },
  mounted() {
    document.body.classList.add('scroll-hidden')
  },
  unmounted() {
    setTimeout(() => {
      document.body.classList.remove('scroll-hidden')
    }, 500)
  },
  created() {},
  methods: {
    close() {
      this.$store.commit('manager/SET_MODAL_DEFAULT', { show: false })
    }
  }
}
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
