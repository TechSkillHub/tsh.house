<template>
  <div id="lp-sites" class="container-fluid px-0">
    <div class="header py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <h2>Tech Skill Hub</h2>
          <span>Software House</span>
        </div>
        <div class="time text-end">
          <h5 class="lh-sm">A CONDIÇÃO ESPECIAL<br/>ENCERRA EM:</h5>
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
        <div class="row">
          <div class="col-7 pt-5 content">
            <h1>NÃO PERCA TEMPO!!!</h1>
            <h2>TENHA SEU SITE</h2>
            <div class="box mt-4">
              <div class="list">
                <i class="fa-regular fa-circle-check"></i> Presença Online 24/7
                <i class="fa-regular fa-circle-check"></i> Credibilidade e Profissionalismo
                <i class="fa-regular fa-circle-check"></i> Marketing e Promoção
                <i class="fa-regular fa-circle-check"></i> Informação e Atendimento ao Cliente
                <i class="fa-regular fa-circle-check"></i> Análise e Melhorias Contínuas
              </div>
              <Form>
                <small>
                  Deixe seu e-mail e um de nossos consultores entrará em contato assim que possível.
                </small>
                <Input
                  idInput="email"
                  nameInput="e-mail"
                  typeInput="email"
                  rulesInput="required|email"
                  placeholderInput="Deixe seu melhor e-mail."
                  @value="(i) => i.value.length >= 0 ? form.email = i.value : form.email"
                  :valueInput="form.email"
                />
                
                <button class="primary ms-auto" @click.prevent="submit()">
                  Quero meu site!
                </button>
              </Form>
            </div>
          </div>
        </div>
        <!-- <div class="row mt-3">
          <div class="col-12 content">
            <div class="price">
              <small>POR APENAS</small>
              <h4>Entrada +</h4>
              <h2 style="margin-top: -30px;"><span>12x de</span> R$240</h2>
            </div>
          </div>
        </div> -->
      </div>
      <div class="gradient">

      </div>
    </div>
  </div>
</template>
<script>
import Input from './../../../components/form/Input.vue'
export default {
  data() {
    const now = new Date();
    const tomorrow = new Date('2024, 5, 22 : 10:00:00');
    
    return {
      endTime: tomorrow-now,
      form: {
        email: ''
      }
    }
  },
  components: {
    Input
  }
  
}
</script>
<style lang="scss" scoped>
#lp-sites {
  min-height: 100vh;
  background: $grey3;
  margin-top: -100px;
  
  .header {
    // background-color: rgb($grey1, 0.7);
    // border-bottom: 3px solid $primary;
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
        color: $secondary;
      }
      .square {
        background-color: $primary;
        border-radius: 8px;
        border: 2px solid $secondary;
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
    background-image: url('./imgs/bg_top.webp');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    min-height: 100vh;
    
    // background-color: white;
    // background-image: url('./imgs/websites.png');
    // background-repeat: no-repeat;
    // background-position: center right;
    // background-size: 55%;
    .content {
      .box {
        background-color: $dark;
        border-radius: 0.5rem;
        padding: 2rem;
        width: fit-content;
        .list {
          color: $white;
          display: grid;
          grid-template-columns: auto auto;
          gap: 0.75rem 0.5rem;
          align-items: center;
          font-size: 1.5rem;
        }
      }
      .price {
        width: fit-content;
        margin: auto;
      }
      h1 {
        font-size: 3rem;
        line-height: 100%;
        color: white;    
        font-weight: 900;
        text-shadow:
          5px 5px 0 red,
          -2px -2px 0 red,  
          2px -2px 0 red,
          -2px 2px 0 red,
          2px 2px 0 red;
        // transform: rotate(-5deg);
        // margin-left: 200px;
      }
      h2 {
        font-size: 4.5rem;
        line-height: 100%;
        font-weight: 900;
        color: $primary-light;
        text-shadow:
          5px 5px 0 $secondary,
          -2px -2px 0 $secondary,  
          2px -2px 0 $secondary,
          -2px 2px 0 $secondary,
          2px 2px 0 $secondary;
        // transform: rotate(-5deg);
        span {
          vertical-align: text-bottom;
          font-size: 2.5rem;
        }
      }
    }
    
  }
}
</style>

<style lang="scss">
#lp-sites {
  .content {
    .box {
      form {
        margin-top: 1rem;  
        small {
          color: white;
          max-width: 470px;
          display: block;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
          margin-top: 1.5rem;
        }
        input {
          border-radius: 25px;
          min-height: auto;
          border: none;
          padding: 8px 15px;
          margin-bottom: 0
        }
        button {
          border-radius: 25px;
        }
      }
    }
  }
}
</style>