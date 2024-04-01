<template>
  <div id="parceiros" class="container-fluid d-flex align-itens-center">
    <div class="container">
      <h1 class="text-center">Parceiros</h1>
      <p class="text-center">Sim, PARCEIROS!<br/>Entendemos que mais do que simples clientes precisamos criar uma relação de parceiria,<br/> para que com esse vínculo possamos criarmos um case de sucesso.</p>

      <div class="row">
        <div class="col-10 offset-lg-1 partners my-5">
          <img src="./imgs/amil.png" alt="" class="w-100">
          <img src="./imgs/claro.png" alt="" class="w-100">
          <img src="./imgs/lubrax.svg" alt="" class="w-100">
          <img src="./imgs/maguary.png" alt="" class="w-100">
          <img src="./imgs/mercadoPago.png" alt="" class="w-100">
          <img src="./imgs/tigre.png" alt="" class="w-100">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#parceiros {
  min-height: 70vh;
  background-color: $offWhite;
  padding: 40px 0;
  h1 {
    color: $secondary;
  }
  p {
    color: $black;
  }
  .partners {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    img {
      filter: grayscale(1);
      transition: all 0.3s ease-in-out;
      padding: 4rem;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
}
</style>
