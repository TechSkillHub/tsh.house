<template>

<div id="cookies" v-if="!showCookies" class="modal d-block show">
  <div class="mask" @click="close()"></div>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="container my-auto">
        <div class="row">
          <div class="col-9 ">
            Nós usamos cookies para garantir a melhor experiência no nosso site, para habilitar serviços e funcionalidades essenciais no nosso site e para coletar dados sobre como os visitantes interagem com o nosso site e serviços. Ao clicar em "Aceitar", você concorda em usarmos todos os cookies para publicidade, análises e suporte. 
          </div>
          <div class="col-3 d-flex justify-content-evenly align-items-center">
            <button type="button" class="btn primary" @click="acceptCookies()">Aceitar</button>
            <button type="button" class="btn outlined" @click="close()">Recusar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      showCookies: false
    }
  },
  methods: {
    acceptCookies() {
      window.localStorage.setItem('showCookies', true)
      this.showCookies = true
      document.body.classList.remove('scroll-hidden')
    },
    close() {
      this.showCookies = true
      document.body.classList.remove('scroll-hidden')
    }
  },
  mounted() {
    if (window.localStorage.getItem('showCookies') != undefined) {
      this.showCookies = window.localStorage.getItem('showCookies')
    } else {
      document.body.classList.add('scroll-hidden')
    }
  },
  unmounted() {
    document.body.classList.remove('scroll-hidden')
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
#cookies {
  .modal-dialog {
    max-width: none;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
  .modal-content {
    margin-top: calc(100vh - 130px);
    border-radius: 0;
    height: 130px;
  }
}
.mask {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
