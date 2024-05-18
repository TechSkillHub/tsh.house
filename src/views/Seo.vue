<template>
  <div id="seo" class="conteiner-fluid">
    <div class="cover"></div>
    
    <div class="container top">
      <h1>Consultoria de SEO</h1>
      <div class="col-12 col-xl-7">
        <p class="my-4">SEO (Search Engine Optimization), ou Otimização para Motores de Busca, é um conjunto de técnicas e estratégias aplicadas para melhorar a visibilidade de um site nos resultados orgânicos dos mecanismos de busca, como o Google, Bing e Yahoo. O objetivo principal do SEO é aumentar o tráfego qualificado para o site, por meio da melhoria da sua posição nos resultados de pesquisa para determinadas palavras-chave relevantes ao conteúdo oferecido. </p>
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
          <h2 class="text-center mt-4 mb-5">Por que SEO é Essencial para o seu Negócio?</h2>
          <div class="row">
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Aumento de Tráfego Qualificado</h6>
              <p>Ao otimizar o seu site para os mecanismos de busca, você atrai visitantes que estão ativamente procurando pelos produtos ou serviços que você oferece, aumentando as chances de conversão.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Retorno sobre Investimento</h6>
              <p>Diferente de outras formas de marketing, o SEO oferece um retorno sobre investimento sustentável a longo prazo, uma vez que os resultados orgânicos continuam gerando tráfego e leads mesmo após o fim das campanhas.</p>
            </div>
            <div class="col-12 col-lg px-4">
              <h6 class="mb-3">Credibilidade e Autoridade</h6>
              <p>Estar bem posicionado nos resultados de busca transmite confiança aos usuários, tornando sua empresa uma autoridade no seu setor e gerando mais leads qualificados.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-lg-8">
          <h4 class="mb-4">Nossa Abordagem de SEO</h4>
          <ul>
            <li><strong>Análise Detalhada:</strong> Começamos por uma análise detalhada do seu site e do seu mercado, identificando oportunidades e áreas de melhoria.</li>
            <li><strong>Otimização On-page e Off-page:</strong> Implementamos técnicas avançadas de otimização on-page e off-page para melhorar a visibilidade do seu site nos resultados de busca.</li>
            <li><strong>Conteúdo de Qualidade:</strong> Criamos conteúdo relevante e otimizado que atrai, engaja e converte os visitantes em clientes fiéis.</li>
            <li><strong>Monitoramento e Ajustes Constantes:</strong> Monitoramos continuamente o desempenho do seu site e ajustamos nossa estratégia de SEO para garantir resultados consistentes e sustentáveis.</li>
          </ul>
        </div>
        <div class="col-12 col-lg-4 ms-auto d-flex align-items-center">
          <img src="./imgs/seo.webp" alt="" class="img-fluid">
        </div>
      </div>

      <div class="row text-centr">
        <div class="col-12">
          <h2 class="mt-5 mb-4">Por que Escolher Nossa Agência de SEO?</h2>
        </div>
        <div class="col-12">
          <p>
            Nossa equipe de especialistas em SEO possui anos de experiência e um histórico comprovado de sucesso.<br/>
            Desenvolvemos estratégias de SEO personalizadas para cada cliente, levando em consideração suas metas, público-alvo e concorrência.<br/>
            Utilizamos ferramentas avançadas de análise para fornecer relatórios detalhados sobre o desempenho do seu site e o impacto das nossas estratégias de SEO.
          </p>
        </div>
        <div class="col-12 col-lg-8 mx-auto text-center mt-4">
          <h6>Não deixe a sua empresa ser invisível na internet!<br/>Entre em contato conosco hoje mesmo e descubra como nossa estratégia de SEO pode impulsionar o crescimento do seu negócio!</h6>
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
#seo {
  min-height: 100vh;
  background-color: $offWhite;
  position: relative;
  padding-bottom: 50px;
  .cover {
    position: relative;
    height: 40vh;
    background-image: url('./imgs/bg_seo.webp');
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