<template>
  <div id="solucoes" class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1 class="mb-5">A <span>Tech Skill Hub</span> possuí a solução<br/>ideal para sua necessidade!</h1>
      <div class="row justify-content-around">
        <div v-for="(item, index) in solutions" :key="index" class="col-10 col-lg card mx-2 mb-5 pb-4">
          <img
            :src="item.image"
            alt="Soluções"
            width="200"
            style="margin: 23px auto !important;"
          />
          <h6 class="mt-4">{{ item.title }}</h6>
          <p class="mx-auto">
            {{ item.text }}
          </p>
        </div>
      </div>
      <h5>Com nossa experiência e dedicação, fornecemos soluções abrangentes para impulsionar seu sucesso empresarial.</h5>
    </div>
  </div>
</template>

<script>
import iconIdentity from './imgs/identity.svg'
import iconInfra from './imgs/infra.svg'
import iconSoftware from './imgs/software.svg'
import iconSeo from './imgs/seo.svg'

export default {
  data() {
    return {
      solutions: [
        {
          image: iconIdentity,
          title: 'Identidade Visual',
          text: 'Criamos toda o manual de identidade visual da empresa, logo, mochups, fachada, entre outros.'
        },
        {
          image: iconInfra,
          title: 'Infraestrutura',
          text: 'Todos nossos sistemas são hospedados em cloud pelo fato de poder oferecer uma estrutura com uma ótima perfomace e um baixo custo.'
        },
        {
          image: iconSoftware,
          title: 'Desenvolvimento de Software',
          text: 'Desenvolvemos software com foco em soluções específicas e performance, buscando a melhor experiência e desempenho.'
        },
        {
          image: iconSeo,
          title: 'SEO',
          text: 'Aplicar regras para aumentar o alcance do seu site de forma orgânica, assim tendo um melhor ranqueamento do seu site no Google.'
        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#solucoes {
  background-color: $offWhite;
  padding: 80px 0;
  h1 {
    color: $black;
    span {
      font-family: $fontLogo;
      color: $primary;
    }
  }
  h6 {
    color: $primary;
    min-height: 48px;
    line-height: 110%;
  }
  h5 {
    color: $primary;
    max-width: 1000px;
    margin: auto;
    font-size: 1.75rem;
  }
  .card{
    border: 5px solid transparent;
    img {
      transition: all 0.5s;
    }
    &:hover {
      border: 5px solid $primary;
      img {
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: $lg) {
    h1 {
      font-size: 2rem;
      line-height: 120%;
    }
    h5 {
      font-size: 1.25rem;
    }
  }
}
</style>
