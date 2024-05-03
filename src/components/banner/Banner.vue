<template>
  <div id="banner" class="container-fluid d-flex align-itens-center p-0">
    <div class="bg-dark"></div>
    <div class="container d-flex flex-column justify-content-center">
      <div class="row d-flex flex-row">
        <div class="col-10 col-lg-8 mx-auto bg-text mb-5">
          <h5>
            <span>CHEGAMOS!!!</span><br/>
            E só não chegamos ontem pra não parecer que era mentira... rsrs
            <br/><br/>
            Nós da <span>TSH</span>, estamos comprometidos em oferecer uma ampla gama de serviços essenciais para aprimorar sua presença online e garantir que sua marca se destaque no mundo digital.
          </h5>
          <router-link :to="{ path: '/', hash: '#fale-conosco' }">
            <button class="primary mt-4">Conte-nos sua idéia</button>
          </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#banner {
  background: url('./imgs/imgBanner.jpg');
  background-size: cover;
  background-position: center;
  color: $primary;
  height: calc(100vh - 100px);
  overflow: hidden;
  color: $white;
  .bg-dark {
    background-color: $black;
    opacity: 0.5;
    width: 100%;
    position: absolute;
    height: calc(100vh - 100px);
    z-index: 0;
  }
  .container {
    z-index: 1;
    .bg-text {
      background-color: $black;
      padding: 2rem;
      border-radius: 8px;
      opacity: 0.8;
      transition: all 0.5s;
      box-shadow: 0px 0px 10px 5px $white;
      h5 {
        line-height: 140%;
        span {
          font-family: $fontLogo;
          color: $primary-light;
          font-size: 2.5rem;
        }
      }
    }
    a {
      text-decoration: none;
    }
    button {
      font-size: 1.2rem;
      background-color: $secondary;
      border: 2px solid $primary-light;
      margin-left: auto;
      // filter: drop-shadow(0px 0px 10px $white);
    }
  }
  @media (max-width: $lg) {
    .container {
      .bg-text {
        h5 {
          font-size: 1.2rem;
          span {
            font-size: 1.75rem;
          }
        }
      }
      button {
        margin-right: auto;
      }
    }
  }
}
</style>
