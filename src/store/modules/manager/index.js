export default {
  namespaced: true,
  state: {
    loading: false,
    currentPage: '',
    modalDefault: {},
  },
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    },
    SET_LOADING(state, val) {
      state.loading = val
    },
    SET_MODAL_DEFAULT(state, val) {
      state.modalDefault = val
    },
  },
  getters: {},
  actions: {}
}
