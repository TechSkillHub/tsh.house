import axios from 'axios'
import store from "@/store";
import router from "@/router";

export default class Login {
  login(data) {
    const newData = {
      login: data.username,
      senha: data.password
    }

    store.commit('manager/SET_LOADING', true)
    
    return new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_APP_API_BASE}/User/Autenticar`, newData)
        .then((resp) => {
          localStorage.setItem('token', resp.data.token)
          store.commit('manager/SET_LOADING', false)
          store.commit('manager/SET_MODAL_LOGIN', false)
          store.commit('manager/SET_LOGGED', true)
          router.push('/dashboard')
          resolve(resp)
        })
        .catch((error) => {
          store.commit('manager/SET_LOADING', false)
          reject(error)
        })
    })
  }
}
