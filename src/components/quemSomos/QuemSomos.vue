<template>
  <div id="quem-somos" class="container-fluid d-flex align-itens-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h1 class="mb-5">Quem Somos?</h1>
          <p>Embora jovem, nossa empresa é impulsionada por uma equipe de fundadores e profissionais com vasta experiência e conhecimento consolidado em suas respectivas áreas. Essa combinação nos permite garantir os melhores resultados.</p>

          <p>A TSH surgiu da união de amigos com uma visão compartilhada: oferecer serviços e produtos personalizados, fundamentados em processos e requisitos bem definidos. Essa abordagem garante soluções rápidas e de alta qualidade, resultado de uma trajetória construída sobre alicerces sólidos.</p>

          <p>Acreditamos firmemente em uma fórmula simples para o sucesso: reduzir o tempo e maximizar os objetivos resulta em menor custo e maior retorno para nossos clientes.</p>

          <p>Nosso propósito é descomplicar o desenvolvimento de soluções em tecnologia, tornando o processo mais eficiente e acessível para todos os envolvidos.</p>
        </div>
      
        <div class="col-lg-5 d-flex align-items-center">
          <img src="./imgs/quemSomos.svg" alt="" class="w-100">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#quem-somos {
  min-height: 50vh;
  background-color: $dark;
  padding: 40px 0;
  h1 {
    color: $primary-light;
    font-family: $fontLogo;
    font-weight: 100;
    font-size: 5rem;
  }
  p {
    color: $white;
  }
}
</style>
