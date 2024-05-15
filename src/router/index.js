import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import Presentation from '../views/Presentation/index.vue'
import Sites from '../views/Sites.vue'
import Aplicacoes from '../views/Aplicacoes.vue'
// import Proposal from '../views/proposal/Proposal.vue'
import store from '../store'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: Presentation
  },
  {
    path: '/sites',
    name: 'sites',
    component: Sites
  },
  {
    path: '/aplicacoes',
    name: 'aplicacoes',
    component: Aplicacoes
  },
  // {
  //   path: '/proposal',
  //   name: 'proposal',
  //   component: Proposal,
  //   meta: {
  //     requireAuth: true
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    store.commit('manager/SET_CURRENT_PAGE', to.href)
    if (to.hash) {
      return {
        el: to.hash,
        top: 99
      }
    } else {
      return {
        top: 0
      }
    }
  }
})

router.beforeEach(async (to) => {  
  let isLogged = localStorage.getItem('token')
  if(to.meta.requireAuth) {
    if(isLogged) {
      return
    } else {
      store.commit('manager/SET_MODAL_DEFAULT', { 
        show: true,
        title: 'Acesso restrito!',
        body: 'Realize o login para acessar.'
      })
      return { path: '/', top: 0 }
    }
  } else {
    return
  }
  
});

export default router
