<template>
    <div class="container-fluid not-found text-center d-flex align-items-center flex-column justify-content-center">
      <h1>404</h1>
      <h2>Not found</h2>
      <p>Página não encontrada.<br/>Tente novamente mais tarde ou entre em contato com nosso suporte.</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
  .not-found {
    background-color: $primary;
    color: $white;
    min-height: calc(100vh - 240px);
    font-weight: 700;
    h1 {
      font-size: 150px;
    }
    h2 {
      font-size: 60px;
    }
    p {
      font-weight: 300;
      margin-top: 50px;
    }
  }
</style>