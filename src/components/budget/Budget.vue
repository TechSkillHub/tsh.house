<template>
  <div id="budget">
    <Form class="d-flex flex-column p-2 position-relative">
      <Input
        idInput="nome"
        nameInput="nome"
        typeInput="text"
        rulesInput="required|alpha_spaces|min:4"
        placeholderInput="Nome completo"
        @value="(i) => i.value.length >= 0 ? form.name = i.value : form.name"
        :valueInput="form.name"
      />
      <Input
        idInput="email"
        nameInput="e-mail"
        typeInput="email"
        rulesInput="required|email"
        placeholderInput="email@exemplo.com.br"
        @value="(i) => i.value.length >= 0 ? form.email = i.value : form.email"
        :valueInput="form.email"
      />
      <Input
        idInput="celular"
        nameInput="celular"
        typeInput="text"
        rulesInput="phoneValid"
        placeholderInput="(  ) _____-____"
        maskInput="(##) #####-####"
        @value="(i) => i.value.length >= 0 ? form.phone = i.value : form.phone"
        :valueInput="form.phone"
      />
      <Textarea
        idInput="mensagem"
        nameInput="mensagem"
        placeholderInput="Como podemos te ajudar?"
        rulesInput="required"
        @value="(i) => i.value.length >= 0 ? form.message = i.value : form.message"
        :valueInput="form.message"
      />
      <div class="">
        <button class="primary ms-auto" @click.prevent="submit()">
          Enviar mensagem
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import Input from '@/components/form/Input.vue'
import Textarea from '@/components/form/Textarea.vue'
import Contact from './../../api/contactUs/index'

const contact = new Contact()

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  components: {
    Input,
    Textarea
  },
  created() {
  },
  methods: {
    submit() {
      contact.contact(this.form)
      document.getElementById("nome").value = ''
      document.getElementById("email").value = ''
      document.getElementById("celular").value = ''
      document.getElementById("mensagem").value = ''
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>