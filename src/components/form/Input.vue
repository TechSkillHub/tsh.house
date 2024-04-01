<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" :value="valueInput">
      <label class="p-0 fw-bold" :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      
      <input
        :id="idInput"
        v-bind="this.$emit('value', field)" 
        :type="type" 
        :name="nameInput" 
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        @keyup="handleChange"
        @keydown="event => valueInput = event.target.value"
        @input="handleChange"
        v-maska
        :data-maska="maskInput"
        :disabled="disabled"
        :value="valueInput"
      />

      <img
        v-if="isPassword && type == 'password'"
        src="./imgs/hide.png"
        @click="showHide()"
      />
      <img
        v-if="isPassword && type == 'text'"
        src="./imgs/show.png"
        @click="showHide()"
      />
      <ErrorMessage :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import { vMaska } from "maska"


export default {
  name: "Input",
  directives: { 
    maska: vMaska 
  },
  props: {
    valueInput: {
      type: String,
      default: "",
    },
    typeInput: {
      type: String,
      default: "text",
    },
    nameInput: {
      type: String,
      required: true,
    },
    idInput: {
      type: String,
      required: false,
    },
    labelInput: {
      type: String,
      required: true,
    },
    placeholderInput: {
      type: String,
      default: "",
    },
    rulesInput: {
      type: String,
      default: ""
    },
    maskInput: {
      type: String,
      default: ""
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  
  data() {
    return {
      type: this.typeInput
    }
  },
  methods: {
    showHide() {
      this.type = this.type == 'password' ? 'text' : 'password'
    }
  }
}
</script>
<style lang="scss" scoped>
  img {
    cursor: pointer;
    position: absolute;
    width: auto;
    height: 24px;
    right: 5px;
    top: 30px;
  }
  #search {
    background-image: url('./../../assets/images/search.svg');
    background-repeat: no-repeat;
    background-position: 97%;
    background-size: 25px;
  }
</style>