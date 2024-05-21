import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptors from '@/helpers/interceptors'
import validations from '@/helpers/validations'
import { Form, Field, ErrorMessage } from 'vee-validate';
import vSelect from 'vue-select'
import VueCountdown from '@chenfengyuan/vue-countdown';

// interceptors requests e responses
interceptors.request()
interceptors.response()

const app = createApp(App)

app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)
app.component('v-select', vSelect)
app.component(VueCountdown.name, VueCountdown);

app.use(router)
app.use(store)
app.use(validations)

app.mount('#app')
