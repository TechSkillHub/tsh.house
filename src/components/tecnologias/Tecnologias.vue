<template>
  <div id="tecnologias" class="container-fluid d-flex align-itens-center">
    <div class="container">
      <h1 class="text-center">Tecnologias</h1>
      <p class="text-center">Estamos em constante atualização, sempre acompanhando as novidades da área de tecnologia.<br/>Procurando oferecer o que há de melhor para nossos parceiros.</p>
      <div class="position-relative box-animation">
        <span class="logo"></span>
        <span class="vue"></span>
        <span class="html"></span>
        <span class="css"></span>
        <span class="js"></span>
        <span class="react"></span>
        <span class="sql"></span>
        <span class="dot"></span>
        <span class="aws"></span>
        <span class="node"></span>
        <span class="bootstrap"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#tecnologias {
  min-height: 50vh;
  background-color: $black;
  padding: 40px 0;
  h1 {
    color: $secondary-light;
  }
  p {
    color: $white;
  }
  .box-animation {
    height: 200px;
    width: 200px;
    position: relative;
    margin: 5rem auto;
    span {
      position: absolute;
      height: 100%;
      width: 100%;
      &.logo {
        border-radius: 50%;
        background-image: url('./imgs/logo.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150px;
        background-color: $dark;
        padding: 1rem;
        box-shadow: 0px 0px 10px 10px $dark;
        // opacity: 0.5;
        z-index: 2;
      }
      &.vue {
        background-image: url('./imgs/vue.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateA 10s ease-in-out infinite;
      }
      &.html {
        background-image: url('./imgs/html.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateA 10s ease-in-out infinite;
        animation-delay: -2s;
      }
      &.css {
        background-image: url('./imgs/css.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateA 10s ease-in-out infinite;
        animation-delay: -4s;
      }
      &.react {
        background-image: url('./imgs/react.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateA 10s ease-in-out infinite;
        animation-delay: -6s;
      }
      &.bootstrap {
        background-image: url('./imgs/bootstrap.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
        animation: animateA 10s ease-in-out infinite;
        animation-delay: -8s;
      }
      &.sql {
        background-image: url('./imgs/sql.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateB 10s ease-in-out infinite;
        // animation-delay: -5s;
      }
      &.dot {
        background-image: url('./imgs/dot.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateB 10s ease-in-out infinite;
        animation-delay: -1s;
      }
      &.aws {
        background-image: url('./imgs/aws.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateB 10s ease-in-out infinite;
        animation-delay: -3s;
      }
      &.node {
        background-image: url('./imgs/node.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: animateB 10s ease-in-out infinite;
        animation-delay: -5s;
      }
      &.js {
        background-image: url('./imgs/javascript.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
        animation: animateB 10s ease-in-out infinite;
        animation-delay: -7s;
      }
      
      @keyframes animateA {
        0% {
          transform: translate(-250px, 100px) scale(0.4);
          z-index: 1;
        }
        50% {
          transform: translate(250px, -100px) scale(0.4);
          z-index: 1;
        }
        50.00001% {
          transform: translate(250px, -100px) scale(0.4);
          z-index: 3;
        }
        100% {
          transform: translate(-250px, 100px) scale(0.4);
          z-index: 1;
        }
      }
      @keyframes animateB {
        0% {
          transform: translate(-250px, -100px) scale(0.4);
          z-index: 1;
        }
        50% {
          transform: translate(250px, 100px) scale(0.4);
          z-index: 1;
        }
        50.00001% {
          transform: translate(250px, 100px) scale(0.4);
          z-index: 3;
        }
        100% {
          transform: translate(-250px, -100px) scale(0.4);
          z-index: 1;
        }
      }
    }
  }
  @media (max-width: $lg) {
    .box-animation {
      width: 100px;
      height: 100px;
      span {
        &.logo {
          background-size: 80px;
        }
      }
      @keyframes animateA {
        0% {
          transform: translate(-150px, 100px) scale(0.4);
          z-index: 1;
        }
        50% {
          transform: translate(150px, -100px) scale(0.4);
          z-index: 1;
        }
        50.00001% {
          transform: translate(150px, -100px) scale(0.4);
          z-index: 3;
        }
        100% {
          transform: translate(-150px, 100px) scale(0.4);
          z-index: 1;
        }
      }
      @keyframes animateB {
        0% {
          transform: translate(-150px, -100px) scale(0.4);
          z-index: 1;
        }
        50% {
          transform: translate(150px, 100px) scale(0.4);
          z-index: 1;
        }
        50.00001% {
          transform: translate(150px, 100px) scale(0.4);
          z-index: 3;
        }
        100% {
          transform: translate(-150px, -100px) scale(0.4);
          z-index: 1;
        }
      }
    }
  }
}
</style>
