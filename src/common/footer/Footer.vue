<template>
  <div id="footer" class="bg-dark border-top py-4">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <div
            class="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-start d-flex flex-column align-items-center"
          >
            <div class="text-center me-md-auto">
            <router-link :to="{ path: '/', hash: '#banner' }">
              <img src="./imgs/logo.svg" class="logo" alt="Logo Tech Skill Hub" /><br/>
            </router-link>
            </div>
          </div>

          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <span>© TechSkillHub 2023</span>
          </div>

          <ul
            class="col-12 col-md-4 nav justify-content-center justify-content-md-end list-unstyled d-flex"
          >
            <li class="mx-3">
              <a href="https://www.linkedin.com/company/tsh-it" target="_blank">
                <img src="./imgs/linkedin.svg" alt="Icon LinkedIn" />
              </a>
            </li>
            <li class="mx-3">
              <a href="https://www.instagram.com/tech.skillhub" target="_blank">
                <img src="./imgs/instagram.svg" alt="Icon Instagram" />
              </a>
            </li>
            <!-- <li class="mx-3">
              <a href="http://www.facebook.com" target="_blank">
                <img src="./imgs/facebook.svg" alt="Icon Facebook" />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
#footer {
  color: $white;
  position: relative;
  z-index: 1060;
  .logo {
    width: 50px;
    height: auto;
    margin-bottom: 10px;
  }
  img {
    width: 18px;
    height: 20px;
  }
}
</style>
