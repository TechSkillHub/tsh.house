<template>
  <div>
    <nav id="header" class="navbar navbar-expand-xl fixed-top">
      <div class="container">
        <router-link
          class="navbar-brand logo"
          :to="{ path: '/', hash: '#banner' }"
          @click="hideMenu()"
        >
          Tech Skill Hub
          <span>SOFTWARE HOUSE</span>
        </router-link>
        <!-- <button class="primary desk mx-2">Candidato</button>
        <button class="primary desk">Empresa</button> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          id="buttonHeader"
          title="buttonHeader"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse" @click="hideMenu()">
          <!-- <div class="mobile mt-3 justify-content-around">
            <button class="primary">Candidato</button>
            <button class="primary">Empresa</button>
          </div> -->
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#banner' }"
                class="nav-link"
                :class="currentPage == '/#banner' ? 'active' : ''"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#solucoes' }"
                class="nav-link"
                :class="currentPage == '/#solucoes' ? 'active' : ''"
                >Soluções</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#tecnologias' }"
                class="nav-link"
                :class="currentPage == '/#tecnologias' ? 'active' : ''"
                >Tecnologias</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#parceiros' }"
                class="nav-link"
                :class="currentPage == '/#parceiros' ? 'active' : ''"
                >Parceiros</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#quem-somos' }"
                class="nav-link"
                :class="currentPage == '/#quem-somos' ? 'active' : ''"
                >Quem Somos?</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#fale-conosco' }"
                class="nav-link"
                :class="currentPage == '/#fale-conosco' ? 'active' : ''"
                >Fale conosco</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link
                :to="{ path: '/dashboard' }"
                class="nav-link"
                :class="currentPage == '/dashboard' ? 'active' : ''"
                >Dashboard</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <router-link
                :to="{ path: '/register' }"
                class="nav-link"
                :class="currentPage == '/register' ? 'active' : ''"
                >Register</router-link
              >
            </li> -->
            <router-link to="/presentation">
              <button class="primary mx-auto ms-md-3 mt-3 mt-md-0" to="/presentation">Login</button>
            </router-link>
            <!-- <button v-else class="secondary mx-auto ms-md-3 mt-3 mt-md-0" @click="logout()">Logout</button> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.state.manager.logged = true;
    }
  },
  methods: {
    hideMenu() {
      let el = document.getElementById('navbarCollapse')
      el.classList.remove('show')
    },
  },
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    },
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.desk {
  display: none !important;
}
.mobile {
  display: flex !important;
}
@media (min-width: $md) {
  .desk {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .scroll-hidden {
    #header {
      right: 17px;
    }
  }
}
nav {
  background-color: $black;
  color: $offWhite;
}
nav.navbar {
  padding: 14px 0;
  .logo {
    font-family: $fontLogo;
    font-size: 33px;
    color: $secondary;
    span {
      font-family: 'Montserrat', sans-serif;
      background-color: $primary-light;
      color: $black;
      border-radius: 8px;
      padding: 0.2rem 0.5rem;
      font-weight: 700;
      font-size: 11px;
      display: block;
      width: fit-content;
      margin-left: auto;
    }
    &::after {
      content: none !important;
      text-decoration: none;
    }
  }
  a {
    width: fit-content;
    color: $white;
    text-decoration: none;
    &.active {
      color: $primary-light;
      &::after {
        display: block;
        content: ' ';
        width: 100%;
        height: 2px;
        background-color: $secondary;
      }
    }
  }
  .navbar-toggler {
    outline: none;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  .navbar-collapse ul {
    padding-top: 20px;
    @media (min-width: $md) {
      padding-top: 0px;
    }
  }
  .navbar-toggler-icon {
    background-image: url('./../../assets/images/hamburger.svg');
  }
}
</style>
