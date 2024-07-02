<template>
  <div class="container-fluid p-0">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./imgs/img1.webp" class="d-block w-100" alt="Image 1" />
        </div>
        <div class="carousel-item">
          <img src="./imgs/img2.webp" class="d-block w-100" alt="Image 2" />
        </div>
        <div class="carousel-item">
          <img src="./imgs/img3.webp" class="d-block w-100" alt="Image 3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#carousel {
  // .carousel,
  // .carousel-item,
  // .carousel-inner img {
  //   height: 400px;
  //   @media (min-width: $md) {
  //     height: 600px;
  //   }
  //   @media (min-width: $lg) {
  //     height: 800px;
  //   }
  // }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 20px;
  }
  @media (min-width: $md) {
    h1 {
      font-size: 120px;
    }
    h2 {
      font-size: 20px;
    }
  }
}
</style>
