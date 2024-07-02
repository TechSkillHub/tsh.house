import axios from 'axios'
import store from '@/store'
import router from '@/router'

function showAlert(error) {
  
  if (error.request.status == 401) {
    localStorage.clear()
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } else {

    store.commit('manager/SET_MODAL_DEFAULT', {
      show: true,
      title: "Ocorreu um erro!",
      body: error.response.data
    })
  }
}

const request = () => {
  return axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
const response = () => {
  return axios.interceptors.response.use(
    (response) => response,
    (error) => {
      showAlert(error)
      return Promise.reject(true)
    }
  )
}

export default {
  request,
  response
}
