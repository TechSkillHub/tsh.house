<template>
  <div id="services" class="container-fluid px-0">
    <h1 class="title">Serviços</h1>
    <div class="container">
      <div class="row my-5">
        <h5>Principais funções</h5>
        <div class="col-4">
          <p class="fw-bold">
            Na TSH, estamos comprometidos em oferecer uma ampla gama de serviços essenciais para aprimorar sua presença online e garantir que sua marca se destaque no mundo digital. Com nossa experiência e dedicação, fornecemos soluções abrangentes para impulsionar seu sucesso empresarial.
          </p>
        </div>
        <div class="col-4">
          <p>Transformamos ideias em realidade, criando sites sob medida que são atraentes, funcionais e responsivos. Nossa equipe de designers e desenvolvedores colabora de perto com você para entregar uma plataforma online que atenda às suas necessidades específicas.</p>
        </div>
        <div class="col-4">
          <p>
            Entendemos a importância de ser encontrado online. Utilizamos estratégias de SEO para impulsionar a visibilidade do seu site nos resultados de pesquisa. Isso significa mais visitantes, mais oportunidades de negócios e um posicionamento de destaque no mercado.
          </p>
        </div>
      </div>
      <div class="row my-4" v-for="(item, index) in services" :key="index">
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { 
          title: "Criação do Site",
          description: "Nossos designers talentosos trabalharão em estreita colaboração com você para criar um design atraente, moderno e responsivo que represente a identidade da sua marca. Garantiremos que o site funcione de forma eficaz em dispositivos móveis e desktops. Nossa equipe de desenvolvedores experientes utilizará as mais recentes tecnologias e melhores práticas para construir um site funcional, seguro e de alto desempenho. Estaremos atentos à otimização de velocidade, segurança e SEO."
        },
        { 
          title: "Criação da Identidade Visual",
          description: "Na TSH, acreditamos que a identidade visual é muito mais do que apenas um logotipo. É a representação visual de sua história, valores e promessas. Estamos ansiosos para trabalhar com você na criação de uma identidade visual que destaque sua marca, diferencie-a da concorrência e atraia seu público."
        },
        { 
          title: "Acompanhamento do SEO",
          description: "Nossa equipe especializada não apenas criará conteúdo cativante e informativo, mas também se empenhará na otimização para mecanismos de busca (SEO). Isso envolve a identificação de palavras-chave relevantes para o seu setor e a criação de um conteúdo que atraia tráfego orgânico. Implementaremos as melhores "
        },
        { 
          title: "Infraestrutra em Cloud",
          description: "Na era digital em constante evolução, a infraestrutura na nuvem se tornou o pilar da inovação e eficiência para empresas de todos os tamanhos. A migração para a nuvem oferece uma gama de benefícios notáveis, capacitando organizações a alcançar mais, gastando menos."
        }
      ],
    }
  },
  computed: {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#services {
  background-color: $white;
  padding-top: 40px;
  padding-bottom: 20px;
  .title {
    background-color: $dark;
    text-align: right;
    width: 40vw;
    padding: 15px 100px;
    border-radius: 0 15px 15px 0;
    color: $white;
  }
  .container {
    text-align: justify;
    h5 {
      color: $primary;
    }
  }
}
</style>
