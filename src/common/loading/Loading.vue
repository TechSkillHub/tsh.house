<template>
  <div class="mask">
    <span class="loader"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.body.classList.add('scroll-hidden')
  },
  unmounted() {
    document.body.classList.remove('scroll-hidden')
  }
}
</script>
<style lang="scss" scoped>
.mask {
  z-index: 9999;
}
.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #fff;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}
.loader::before {
  top: auto;
  bottom: 0;
  background-color: $primary;
  animation-delay: 0.5s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes scale50 {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
