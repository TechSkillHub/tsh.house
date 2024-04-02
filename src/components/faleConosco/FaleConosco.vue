<template>
  <div id="fale-conosco" class="container-fluid d-flex align-itens-center">
    <div class="container">
      <h1 class="text-center">Fale Conosco</h1>
      <div class="row mt-5">
        <div class="col-10 col-lg-4 offset-lg-2 offset-1">
          <h6>
            Estamos aqui para transformar suas ideias em realidade.<br/><br/>
            Entre em contato e vamos criar juntos a solução perfeita para o seu projeto!
          </h6>
          <img src="./imgs/contactUs.svg" alt="">
        </div>
        <div class="col-12 col-lg-5">
          <Form @submit="submit" class="d-flex flex-column p-4 position-relative">
            <Input
              labelInput="Nome"
              nameInput="nome"
              typeInput="text"
              rulesInput="required|alpha_spaces|min:4"
              placeholderInput="Seu nome completo"
              @value="(i) => i.value.length >= 0 ? form.name = i.value : form.name"
              :valueInput="form.name"
            />
            <Input
              labelInput="E-mail"
              nameInput="e-mail"
              typeInput="email"
              rulesInput="required|email"
              placeholderInput="email@exemplo.com.br"
              @value="(i) => i.value.length >= 0 ? form.email = i.value : form.email"
              :valueInput="form.email"
            />
            <Input
              labelInput="Celular"
              nameInput="celular"
              typeInput="text"
              rulesInput="required|phoneValid"
              placeholderInput="(  ) _____-____"
              maskInput="(##) #####-####"
              @value="(i) => i.value.length >= 0 ? form.phone = i.value : form.phone"
              :valueInput="form.phone"
            />
            <Textarea 
              labelInput="Mensagem"
              nameInput="mensagem"
              placeholderInput="Como podemos te ajudar?"
              @value="(i) => i.value.length >= 0 ? form.message = i.value : form.message"
              :valueInput="form.message"
            />
            <div class="row">
              <button class="primary ms-auto mt-4 me-3">
                Enviar mensagem
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/form/Input.vue'
import Textarea from '@/components/form/Textarea.vue'

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
  methods: {
    submit() {
      console.log(this.form)
    },
  }
};
</script>

<style lang="scss" scoped>
#fale-conosco {
  // min-height: 100vh;
  background-color: $primary;
  padding: 4rem 0;
  h1 {
    color: $secondary;
  }
  h6 {
    color: $black;
    text-align: center;
  }
  form {
    background-color: $offWhite;
    border-radius: 8px;
    padding: 2rem !important;
  }
}
</style>
