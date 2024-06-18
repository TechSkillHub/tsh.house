<template>
  <div id="solucoes" class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <div class="row">
        <h1 class="mb-4 mb-lg-5">A <span>Tech Skill Hub</span><br class="mobile"/> possuí a solução<br/>que falta para o sucesso da sua empresa!</h1>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8 px-0">
          <carousel class="col-12 mx-auto d-block d-md-none" :items-to-show="1.2" :wrap-around="true">
            <slide v-for="(item, index) in solutions" :key="index" @click="irPara(item.route)">
            <div class="card pb-2 mx-2 h-100">
              <img
                :src="item.image"
                alt="Soluções"
                width="150"
                class="img-fluid mx-auto"
              />
              <h6 class="mt-2">{{ item.title }}</h6>
              <p class="mx-auto">
                {{ item.text }}
              </p>
            </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>

          <div class="row justify-content-center gap-4 d-none d-md-flex">
            <div v-for="(item, index) in solutions" :key="index" class="col-10 col-lg-5 card pb-2" @click="irPara(item.route)">
              <img
                :src="item.image"
                alt="Soluções"
                width="150"
                class="img-fluid mx-auto"
              />
              <h6 class="mt-2">{{ item.title }}</h6>
              <p class="mx-auto">
                {{ item.text }}
              </p>
              <!-- <div class="price d-flex flex-column">
                <small>A partir de:</small>
                <span class="entrada" v-if="item.price != 'Sob Consulta'">Entrada</span>
                <div class="d-flex">
                  <span class="valor plus" v-if="item.price != 'Sob Consulta'">+</span>
                  <span class="valor" :class="item.price == 'Sob Consulta' ? 'fs-3 mt-2' : 'ms-1'">{{ item.price }}</span>
                  <span class="parcelas" v-if="item.price != 'Sob Consulta'">12x</span>
                </div>
              </div> -->
              <div class="ms-auto mt-auto saibaMais">
                Saiba mais <i class="fa-solid fa-circle-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-11 mx-auto col-lg-4 mt-4 mt-lg-0">
          <div class="form">
            <h6 class="my-3">Preencha o formulário e um de nossos consultores entrará em contato sem compromisso!</h6>
            <Budget class="mt-auto" />
          </div>
          <h6 class="p-3 mt-3">Com nossa experiência e dedicação, fornecemos soluções abrangentes para impulsionar seu sucesso empresarial.</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconIdentity from './imgs/identity.svg'
import iconInfra from './imgs/infra.svg'
import iconSoftware from './imgs/software.svg'
import iconSeo from './imgs/seo.svg'
import Budget from './../budget/Budget.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  data() {
    return {
      solutions: [
        {
          image: iconIdentity,
          title: 'Desenvolvimento de Sites',
          text: 'Ter um site ajuda a construir credibilidade e profissionalismo para seu negócio ou projeto. Além de seu negócio estar acessível 24/7.',
          route:'/sites',
          price: 'R$240'
        },
        {
          image: iconInfra,
          title: 'Infraestrutura em Cloud',
          text: 'Todos nossos sistemas são hospedados em cloud pelo fato de poder oferecer uma estrutura com uma ótima perfomace e um baixo custo.',
          route:'/cloud',
          price: 'R$490'
        },
        {
          image: iconSoftware,
          title: 'Aplicações Web e Software',
          text: 'Desenvolvemos software com foco em soluções específicas e performance, buscando a melhor experiência e desempenho.',
          route:'/software',
          price: 'Sob Consulta'
        },
        {
          image: iconSeo,
          title: 'Consultoria de SEO',
          text: 'Aplicar regras para aumentar o alcance do seu site de forma orgânica, assim tendo um melhor ranqueamento do seu site no Google.',
          route:'/seo',
          price: 'R$20'
        },
      ]
    }
  },
  components: {
    Budget,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    irPara(value) {
      this.$router.push(value)
    }
  }
}
</script>

<style lang="scss" scoped>
#solucoes {
  background-color: $offWhite;
  padding: 50px 0;
  .mobile {
    display: none;
    @media (max-width: $lg) {
      display: block;
    }
  }
  @media (max-width: $lg) {
    padding: 30px 0;
    p {
      font-size: 14px;
    }
  }
  h1 {
    color: $black;
    span {
      font-family: $fontLogo;
      color: $primary;
    }
  }
  h6 {
    color: $primary;
    line-height: 110%;
  }
  h5 {
    color: $primary;
    max-width: 1000px;
    margin: auto;
    font-size: 1.75rem;
  }
  .card{
    cursor: pointer;
    border: 5px solid transparent;
    overflow: hidden;
    h6 {
      color: $primary;
      line-height: 110%;
    }
    img {
      transition: all 0.5s;
    }
    &:hover {
      border: 5px solid $primary;
      img {
        transform: scale(1.2);
      }
    }
    .saibaMais {
      color: $secondary;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .form {
    background-color: $primary-light;
    padding: 1rem;
    border-radius: 0.5rem;
    h6 {
      color: $dark;
      font-size: 1.25rem;
      @media (max-width: $lg) {
        font-size: 1.1rem;
      }
    }
  }
  .price {
    text-align: left;
    position: relative;
    >div {
      margin-top: -5px;
    }
    .entrada {
      font-size: 1.25rem;
      font-weight: 700;
    }
    .valor {
      color: $alert;
      font-size: 2.9rem;
      vertical-align: text-bottom;
      font-weight: 700;
      &.plus {
        font-size: 2rem;
      }
    }
    .parcelas {
      position: absolute;
      bottom: 9px;
      font-size: 90%;
      font-weight: 500;
    }
  }
  @media (max-width: $lg) {
    h1 {
      font-size: 20px;
      line-height: 100%;
    }
    h5 {
      font-size: 1.25rem;
    }
    form {
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
.carousel__prev, .carousel__next {
  height: 100%;
  transform: translateY(-50%);
  background-color: rgb(217, 218, 219, 0.5);
  margin: 0;
}
</style>
