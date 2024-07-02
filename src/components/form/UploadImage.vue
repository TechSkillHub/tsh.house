<template>
  <div>
    <Field :name="nameInput" v-slot="{ value, errors, handleChange }" :rules="rulesInput">
      <label v-if="labelInput" :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      
      <input
        v-bind="this.$emit('value', value)" 
        type="file" 
        :name="nameInput"
        @change="handleChange" 
        @input="event => valueInput = event.target.value"
        :value="valueInput"
      />
      <ErrorMessage :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import { vMaska } from "maska"


export default {
  name: "UploadImage",
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
      required: true,
    },
    labelInput: {
      type: String,
      required: false,
    },
    rulesInput: {
      type: String,
      default: ""
    },
  },
  
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  span {
    margin-bottom: -35px;
    width: max-content;
  }
</style>