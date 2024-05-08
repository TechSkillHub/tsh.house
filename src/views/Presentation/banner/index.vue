<template>
  <div id="banner" class="container-fluid p-0">
    <h1 class="title">Apresentação</h1>
    <div class="container text-center">
      <img src="./../../../assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid logo">
      <h1 class="fontLogo">Tech Skill Hub</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    client() {
      return this.$store.state.manager.userData
    },
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#banner {
  background-image: url('./imgs/matiz.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: $white;
  min-height: 100vh;
  padding-top: 100px;
  .title {
    background-color: $dark;
    text-align: center;
    width: fit-content;
    padding: 15px 100px;
    margin: auto;
    border-radius: 0 0 15px 15px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 110px);
  }
  .fontLogo {
    font-family: $fontLogo;
    font-weight: 500;
    text-align: center;
    font-size: 8rem;
    color: white;
    text-shadow: 0 0 5px black;
  }
  .logo {
    max-width: 20%;
  }  
}
</style>
