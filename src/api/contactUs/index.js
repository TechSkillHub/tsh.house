import axios from 'axios'
import store from "@/store";
import router from "@/router";

export default class Contact {
  contact(data) {
    const newData = {
      service_id: 'service_bt6untz',
      template_id: 'template_0rsdsrb',
      user_id: 'DNA6GEtK2chML6G09',
      template_params: {
        'from_name': data.name,
        'from_email': data.email,
        'from_phone': data.phone,
        'message': data.message,
      }
    }

    store.commit('manager/SET_LOADING', true)
    
    return new Promise((resolve, reject) => {
      axios
        .post(`https://api.emailjs.com/api/v1.0/email/send`, newData)
        .then((resp) => {
          store.commit('manager/SET_LOADING', false)
          store.commit('manager/SET_MODAL_DEFAULT', { 
            show: true,
            title: 'Mensagem enviada!',
            body: 'Aguarde que em breve alguém da nossa equipe<br/>entrará em contato.<br/>Desde já agradeçemos.'
          })
          resolve(resp)
        })
        .catch((error) => {
          store.commit('manager/SET_LOADING', false)
          reject(error)
        })
    })
  }
}
