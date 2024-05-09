<template>
  <div id="cards" class="container-fluid px-0">    
    <div class="container">
      <div class="row my-5 d-flex justify-content-between">
        <div class="col-10 col-lg mx-auto mx-lg-3 card text-center mb-5" v-for="(item, index) in cards" :key="index">
          <img :src="item.icon" alt="Icon Service" class="mb-4 mx-auto img-fluid">
          <h6 class="mb-4">{{ item.title }}</h6>
          <p class="m-0">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import seo from './imgs/seo.svg'
import dev from './imgs/development.svg'
import design from './imgs/design.svg'
import infra from './imgs/cloud.svg'

export default {
  data() {
    return {
      cards: [
        {
          icon: seo,
          title: "SEO",
          description: "Aplicar regras para aumentar o alcance do seu site de forma orgânica, assim tendo um melhor ranqueamento do seu site no Google."
        },
        {
          icon: dev,
          title: "Criação do Site",
          description: "Iremos desenvolver um site com foco na utilização em smartphones, buscando a melhor experiência e desempenho do site."
        },
        {
          icon: design,
          title: "Identidade Visual",
          description: "Será desenvolvido toda o manual de identidade visual da empresa, logo, mochups, fachada, entre outros."
        },
        {
          icon: infra,
          title: "Infraestrutura",
          description: "Todos nossos sites são hospedados em cloud pelo fato de poder oferecer uma estrutura com uma ótima perfomace e um baixo custo. "
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#cards {
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: $grey1;
  @media (min-width: $md) {
    background-image: url('./imgs/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .title {
    background-color: $dark;
    text-align: right;
    width: 40%;
    padding: 15px 100px;
    border-radius: 0 15px 15px 0;
    color: $white;
  }
  .container {
    .row {
      flex-wrap: wrap;
    }
    .card {
      padding: 30px;
      border-top: 20px solid $primary;
      box-shadow: 0px 0px 10px $grey2;
      h6 {
        line-height: 100%;
        min-height: 40px;
      }
      p {
        line-height: 180%;
      }
      img {
        width: 100px;
      }
    }
  }
}
</style>
