<template>
  <div id="banner" class="container-fluid p-0">
    <h1 class="title">Apresentação</h1>
    <div class="text-center">
      <img src="./../../../assets/images/logo.svg" alt="Logo TechSkillHub" class="logo">
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
  background-position: center;
  color: $white;
  min-height: 100vh;
  .title {
    font-size: 1.5rem;
    width: fit-content;
    background-color: $dark;
    text-align: center;
    padding: 15px 50px;
    margin: auto;
    border-radius: 0 0 15px 15px;
    @media (min-width: $md) {
      padding: 15px 100px;
      font-size: 2.5rem;
    }
  }
  &>div {
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
    font-size: 2.5rem;
    color: white;
    text-shadow: 0 0 5px black;
    margin-top: 2rem;
    @media (min-width: $sm) {
      font-size: 4rem;
    }
    @media (min-width: $md) {
      font-size: 6rem;
    }
    @media (min-width: $lg) {
      font-size: 8rem;
    }
  }
  .logo {
    max-width: 40%;
    @media (min-width: $md) {
      max-width: 20%;   
    }
  }  
}
</style>
