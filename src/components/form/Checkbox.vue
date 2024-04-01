<template>
  <div class="row position-relative mx-0">
    <Field :name="nameInput" type="checkbox" v-slot="{ field, errors }" :rules="rulesInput" :value="checkboxValue">
      
      <label>
        <input
          type="checkbox"
          v-bind="field"
          :class="errors[0] ? 'has-error' : ''"
          @change="this.$emit('value', field.checked)"
          :disabled="disabled"
          :checked="valueInput"
          @input="event => valueInput = event.target.value"
        />
        
        <small class="fw-normal ms-2 my-auto">
          {{ labelInput }}
        </small>
      </label>
      
      <ErrorMessage :name="nameInput"/>
    </Field>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  directives: { 
    
  },
  props: {
    valueInput: {
      type: Boolean,
      default: false,
    },
    nameInput: {
      type: String,
      required: true,
    },
    labelInput: {
      type: String,
      required: true,
    },
    rulesInput: {
      type: String,
      default: ""
    },
    checkboxValue: {
      type: Boolean,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
input[type=checkbox] {
  height: 26px;
}
span {
  left: -11px !important;
}
</style>