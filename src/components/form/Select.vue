<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" :value="defaultValue">
      <label class="p-0 fw-bold" :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      
      <v-select 
        v-bind="field, this.$emit('value', field)" 
        :reduce="optionsInput => optionsInput.id"
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        :name="nameInput"
        :options="optionsInput"
        :searchable="true"
        @change="handleChange"
        :label="labelView"  
        v-model="defaultValue"
        :multiple="multiple"
        :clearable="clearable"
      >
        <template v-slot:no-options>Nenhum resultado encontrado.</template>
      </v-select>

      <ErrorMessage class="p-0" :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

import { vMaska } from "maska"

export default {
  name: "Select",
  directives: { 
    maska: vMaska 
  },
  props: {
    valueInput: {
      type: Array,
      default: [],
    },
    nameInput: {
      type: String,
      required: true,
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
    labelView: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    optionsInput: {
      type: Array,
      default: []
    },
  },
  
  data() {
    return {
      defaultValue: this.valueInput
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>