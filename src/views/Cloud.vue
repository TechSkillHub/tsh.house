<template>
  <div id="cloud" class="conteiner-fluid">
    <div class="cover"></div>
    
    <div class="container top">
      <h1>Infraestrutra em Cloud</h1>
      <div class="col-12 col-xl-7 h-100">
        <p class="my-5">Se você está buscando por uma solução que impulsione a eficiência, flexibilidade e segurança da sua empresa, a infraestrutura em nuvem é a resposta. Com a nossa plataforma de nuvem, você pode levar o seu negócio para o próximo nível, aproveitando uma série de benefícios exclusivos.</p>
      </div>
      <hr class="col-xl-7"/>
      <div class="form">
        <h5>Solicite um orçamento</h5>
        <Budget />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center mt-4 mb-5">Por que Escolher a Infraestrutura em Nuvem?</h2>
          <div class="row">
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Escalabilidade Ilimitada</h6>
              <p>Diga adeus aos limites físicos dos servidores tradicionais. Com a infraestrutura em nuvem, você pode escalar os recursos de acordo com a demanda do seu negócio, garantindo que você tenha sempre a capacidade necessária para crescer.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Flexibilidade de Acesso</h6>
              <p>Acesso aos seus dados e aplicativos de qualquer lugar, a qualquer momento. Com a nuvem, seus colaboradores podem trabalhar de forma remota, colaborar em tempo real e acessar informações críticas de forma segura, aumentando a produtividade e a eficiência da sua equipe.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Segurança Avançada</h6>
              <p>Proteja os seus dados com as mais avançadas medidas de segurança disponíveis. Nossa plataforma de nuvem oferece criptografia de ponta a ponta, monitoramento constante e backups automáticos para garantir a segurança e integridade dos seus dados.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Redução de Custos</h6>
              <p>Reduza os custos de infraestrutura e manutenção, eliminando a necessidade de investir em servidores físicos e hardware obsoleto. Com a infraestrutura em nuvem, você paga apenas pelos recursos que utiliza, economizando dinheiro e recursos valiosos.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-lg-8">
          <h2 class="mb-4">Por que Escolher a Nossa Plataforma de Nuvem?</h2>
          <ul>
            <li><strong>Experiência Comprovada:</strong> Com anos de experiência e um histórico comprovado de sucesso, somos líderes no fornecimento de soluções de nuvem confiáveis e inovadoras.</li>
            <li><strong>Suporte Personalizado:</strong> Nossa equipe de especialistas está aqui para ajudar a guiar você em cada etapa do processo, desde a migração inicial até o suporte contínuo e personalizado.</li>
            <li><strong>Inovação Contínua:</strong> Estamos sempre à frente das últimas tendências e tecnologias, garantindo que você tenha acesso às ferramentas mais avançadas e poderosas disponíveis.</li>
          </ul>
        </div>
        <div class="col-12 col-lg-4 ms-auto d-flex align-items-center">
          <img src="./imgs/cloud.webp" alt="" class="img-fluid">
        </div>
      </div>

      <div class="row text-centr">
        <div class="col-12 col-lg-8 mx-auto text-center mt-4">
          <h6>Não deixe o potencial do seu negócio ser limitado pela infraestrutura tradicional.<br/>Faça a transição para a infraestrutura em nuvem e libere todo o poder da sua empresa hoje mesmo!</h6>
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
#cloud {
  min-height: 100vh;
  background-color: $offWhite;
  position: relative;
  padding-bottom: 50px;
  .cover {
    position: relative;
    height: 40vh;
    background-image: url('./imgs/bg_cloud.webp');
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
    ul {
      text-align: justify;
      line-height: 150%;
      li {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>