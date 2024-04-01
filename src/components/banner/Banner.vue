<template>
  <div id="banner" class="container-fluid d-flex align-itens-center p-0">
    <div class="bg-dark"></div>
    <div class="container d-flex flex-column justify-content-center">
      <div class="row d-flex flex-row">
        <div class="col-8 mx-auto bg-text mb-5">
          <h5>
            Nós da <span>TSH</span>, estamos comprometidos em oferecer uma ampla gama de serviços essenciais para aprimorar sua presença online e garantir que sua marca se destaque no mundo digital.
          </h5>
          <button class="primary mt-4">Conte-nos sua idéia</button>
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
      filter: drop-shadow(0px 0px 10px $white);
      // &:hover {
      //   transform: scale(1.05);
      //   filter: drop-shadow(0px 0px 10px $black);
      // }
      h5 {
        line-height: 140%;
        span {
          font-family: $fontLogo;
          color: $primary-light;
          font-size: 2.5rem;
        }
      }
    }
    button {
      font-size: 1.2rem;
      background-color: $secondary;
      border: 2px solid $primary-light;
      margin-left: auto;
      // filter: drop-shadow(0px 0px 10px $white);
    }
  }
  @media (min-width: $md) {
    h4 {
    }
  }
}
</style>
