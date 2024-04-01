<template>
  <div class="row position-relative pb-3 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" :value="valueInput">
      <label class="p-0 fw-bold" :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      <textarea
        v-bind="this.$emit('value', field)"
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        :name="nameInput" 
        v-on:keyup="countdown"
        @keydown="event => valueInput = event.target.value"
        @input="handleChange"
        rows="5"
        maxlength="500"
        v-model="mensagem"

      ></textarea>
      <small>Máx. de {{ remainingCount }} caracteres.</small>

      <ErrorMessage :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import { vMaska } from "maska"

export default {
  name: "Textarea",
  directives: { 
    maska: vMaska 
  },
  props: {
    valueInput: {
      type: String,
      default: "",
    },
    nameInput: {
      type: String,
      required: false,
    },
    labelInput: {
      type: String,
      required: false,
    },
    placeholderInput: {
      type: String,
      default: "",
    },
    rulesInput: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      remainingCount: 500,
      maxCount: 500,
      mensagem: this.valueInput
    }
  },
  methods: {
    countdown() {
      this.remainingCount = this.maxCount - this.mensagem.length;
    },
  },
  mounted() {
    this.countdown()
  }
}
</script>
<style lang="scss" scoped>
small {
  text-align: right;
  font-size: 12px;
  padding: 0;
  color: $grey2;
}
</style>