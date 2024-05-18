<template>
  <div id="aplicacoes" class="conteiner-fluid">
    <div class="cover"></div>
    
    <div class="container top">
      <h1>Aplicações Web e sistemas</h1>
      <div class="col-12 col-xl-7">
        <p class="my-5">
          Nossas aplicações web são desenvolvidas sob medida para atender às necessidades exclusivas da sua empresa. Desde simples websites informativos até complexos sistemas de gestão empresarial, nossa equipe de especialistas trabalha para criar soluções digitais que impulsionam o seu negócio para o próximo nível.
        </p>
      </div>
      <hr class="col-xl-7"/>
      <div class="form">
        <h5>Solicite um orçamento</h5>
        <Budget />
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-12 col-lg-3 ms-auto">
          <img src="./imgs/integration.webp" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 text-end mx-auto">
          <h4>Benefícios das Integrações Inteligentes</h4>
          <p>Imagine uma empresa onde todos os sistemas funcionam em perfeita harmonia, compartilhando dados e automatizando processos de forma eficiente. Com nossas integrações personalizadas, isso se torna uma realidade. Conectamos os diversos aspectos do seu negócio - desde vendas e marketing até contabilidade e atendimento ao cliente - para uma operação mais suave e resultados mais rápidos.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 my-5 text-center">
          <h2>Por que Escolher nossas Soluções Digitais?</h2>
        </div>
        
        <div class="col-12 col-lg px-4">
          <h6 class="mb-3">Inovação Contínua</h6>
          <p>Estamos sempre à frente das tendências tecnológicas, oferecendo soluções que mantêm sua empresa competitiva.</p>
        </div>
        <div class="col-12 col-lg px-4">
          <h6 class="mb-3">Experiência do Usuário Superior</h6>
          <p>Nossas aplicações web são projetadas para oferecer uma experiência do usuário excepcional, garantindo que seus clientes estejam sempre satisfeitos.</p>
        </div>
        <div class="col-12 col-lg px-4">
          <h6 class="mb-3">Suporte Especializado</h6>
          <p>Nossa equipe de suporte está disponível para ajudar em cada etapa do processo, garantindo que suas necessidades sejam atendidas de forma rápida e eficiente.</p>
        </div>

        <div class="col-12 col-lg-8 mx-auto text-center mt-5">
          <h6>Não deixe sua empresa ficar para trás na era digital. Potencialize seu sucesso com nossas aplicações web e integrações personalizadas. Entre em contato hoje mesmo para descobrir como podemos ajudar a transformar sua visão em realidade digital.</h6>
        </div>

      </div>
    </div>
    
  </div>
</template>
<script>
import Budget from '../components/budget/Budget.vue';

export default {
  data() {
    return {}
  },
  components: {
    Budget,
  },
}
</script>

<style lang="scss" scoped>
#aplicacoes {
  min-height: 100vh;
  background-color: $offWhite;
  position: relative;
  padding-bottom: 50px;
  .cover {
    position: relative;
    height: 40vh;
    background-image: url('./imgs/bg_software.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(1px) brightness(0.5);
    -webkit-filter: blur(1px) brightness(0.5);
    z-index: 0;
  }
  .container {
    position: relative;
    z-index: 1;
    &.top {
      position: relative;
      min-height: 330px;
      hr {
        position: absolute;
        bottom: 0;
      }
    }
    h1 {
      font-size: 1.75rem;
      width: fit-content;
      padding: 10px 30px;
      margin-top: -102px;
      z-index: 1;
      background-color: $offWhite;
      border-radius: 8px 8px 0 0;
      text-transform: uppercase;
      @media (min-width: $sm) {
        margin-top: -73px;
        font-size: 2.5rem;
      }
    }
    hr {
      display: none;
      @media (min-width: $xl) {
        display: block;
      }
    }
    .form {
      position: relative;
      width: 90%;
      margin: auto;
      height: 500px;
      background-color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 0 15px 2px black;
      @media (min-width: $xl) {
        width: 35%;
        position: absolute;
        right: 0;
        top: calc(-250px + 68px);
        
      }
    }
    p {
      line-height: 200%;
    }
    // h4 {
    //   font-size: 1.25rem;
    //   @media (min-width: $sm) {
    //     font-size: 1.75rem;
    //   }
    // }
  }
}
</style>