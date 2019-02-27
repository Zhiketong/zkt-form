<template>
  <div class="checkbox-wrapper">
    <label class="checkbox-inline" v-for="option in options" :key="option.value">
        <input
          type="checkbox"
          v-model="val"
          v-on="listeners"
          :value="option[optionValueName]"
          :name="name"
          :true-value="trueValue"
          :false-value="falseValue"
          :disabled="disabled">
        <span>{{option[optionKeyName]}} </span>
      </label>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Checkbox',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      value: {},
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
      disabled: {
        default: false
      }
    }
  }
</script>

<style>
  .checkbox-wrapper {
    width: 100%;
  }
  .checkbox-inline {
    margin-right: 20px;
  }
</style>
