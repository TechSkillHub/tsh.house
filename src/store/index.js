import { createStore } from 'vuex'
import loginModule from './modules/login/index'
import managerModule from './modules/manager/index'

const store = createStore({
  modules: {
    login: loginModule,
    manager: managerModule
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
