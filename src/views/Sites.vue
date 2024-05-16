<template>
  <div id="sites" class="conteiner-fluid">
    <div class="cover"></div>
    
    <div class="container">
      <h1>Desenvolvimento de Sites</h1>
      <div class="col-12 col-xl-7">
        <h4 class="mt-5 mb-4">Qual a importância de um site para sua empresa?</h4>
        <p class="mb-5">Nos dias de hoje, a presença online é fundamental para comunicar, anunciar e conectar-se com os usuários. Portanto, ter um site é crucial para que sua empresa seja localizada pelo seu público-alvo e, sobretudo, seja percebida como relevante.</p>
        <hr/>
      </div>
      <div class="form">
        <h5>Solicite um orçamento</h5>
        <Budget />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center mt-4 mb-5">Principais motivos para ter um site</h2>
          <div class="row">
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Aumento nas vendas</h6>
              <p>No cenário digital atual, um site é mais do que uma simples presença online; é uma ferramenta poderosa para impulsionar as vendas e expandir o alcance do seu negócio. Aqui estão algumas razões pelas quais investir em um site é essencial para o sucesso comercial.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Plataforma exclusiva</h6>
              <p>Ao investir em um site, sua empresa conquista um domínio exclusivo na internet, deixando de depender exclusivamente das redes sociais para atender às demandas do seu público-alvo.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Relação com o cliente</h6>
              <p>Na era digital, onde as interações são cada vez mais virtuais, o estreitamento da relação com o cliente torna-se crucial para o sucesso de qualquer negócio. Entendemos que além de oferecer produtos ou serviços de qualidade, é essencial cultivar uma conexão genuína com aqueles que nos escolhem.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Divulgação eficaz</h6>
              <p>Com um site, sua empresa pode fornecer informações importantes para seu público de forma rápida e eficaz, aumentando a visibilidade e o reconhecimento da marca sem incorrer em custos adicionais</p>
            </div>
          </div>
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
#sites {
  min-height: 100vh;
  background-color: $offWhite;
  position: relative;
  padding-bottom: 50px;
  .cover {
    position: relative;
    height: 40vh;
    background-image: url('./imgs/bg_sites.webp');
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
  }
}
</style>