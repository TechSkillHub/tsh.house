<template>
  <div id="lp-sites" class="container-fluid px-0">
    <div class="header py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <h2>Tech Skill Hub</h2>
          <span>Software House</span>
        </div>
        <div class="time">
          <h5>FIM DA OFERTA ESPECIAL:</h5>
          <vue-countdown :time="endTime" v-slot="{ hours, minutes, seconds }">
            <div class="square">
              {{ hours }}
            </div>
            :
            <div class="square">
              {{ minutes.toString().padStart(2, '0') }} 
            </div>
            :
            <div class="square">
              {{ seconds.toString().padStart(2, '0') }}
            </div>
          </vue-countdown>
        </div>
      </div>  
    </div>
    <div class="banner">
      <div class="container">
        <div class="col-7 text-center pt-5">
          <h1>NÃO PERCA TEMPO!!!</h1>
          <h2>SEU SITE <small>POR APENAS</small></h2>
          <h3>Entrada +</h3>
        </div>
        <!-- <div class="offset-7 col-5">
          <img src="./imgs/websites.png" class="img-fluid my-5" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const now = new Date();
    const tomorrow = new Date('2024, 5, 22 : 10:00:00');
    
    return {
      endTime: tomorrow-now
    }
  }
  
}
</script>
<style lang="scss" scoped>
#lp-sites {
  min-height: 100vh;
  background: $dark;
  margin-top: -100px;
  .header {
    background-color: rgb($grey1, 0.7);
    border-bottom: 3px solid $primary;
    position: fixed;
    width: 100%;
    .logo {
      width: fit-content;
      h2 {
        color: $secondary;
        font-family: $fontLogo;
        line-height: 100%;
      }
      span {
        font-family: 'Montserrat', sans-serif;
        background-color: $primary;
        color: $black;
        border-radius: 2rem;
        padding: 0.2rem 0.75rem;
        font-weight: 700;
        display: block;
        width: fit-content;
        margin-left: auto;
        margin-top: -5px;
        font-size: 0.8rem;
      }
    }
    .time {
      display: flex;
      align-items: center;
      h5 {
        margin-bottom: 0;
        color: $secondary-light;
      }
      .square {
        background-color: $primary;
        border-radius: 8px;
        border: 2px solid $secondary-light;
        padding: 0.75rem 0.5rem;
        width: 60px;
        text-align: center;
      }
      span {
        color: $white;
        font-weight: 700;
        font-size: 2rem;
        display: flex;
        margin-left: 1rem;
        justify-content: center;
        gap: 5px;
        align-items: baseline;
      }
    }
  }
  .banner {
    min-height: 80vh;
    padding-top: 100px;
    background-color: white;
    background-image: url('./imgs/websites.png');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 55%;
    h1 {
      font-size: 4rem;
      color: $white;    
      font-weight: 900;
      text-shadow:
        3px 3px 0 $error,
        -1px -1px 0 $error,  
        1px -1px 0 $error,
        -1px 1px 0 $error,
        1px 1px 0 $error;
    }
  }
}
</style>