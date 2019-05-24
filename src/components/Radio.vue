<template>
  <span class="radio-wrapper" v-on="listeners">
    <label class="radio-inline" :class="(disabled || option.disabled) ? 'radio-disabled' : ''" v-for="option in options" :key="option.value">
        <input
          type="radio"
          v-model="val"
          :value="option[optionValueName]"
          :name="name"
          :disabled="disabled || option.disabled">
        <span>{{option[optionKeyName]}}</span>
      </label>
  </span>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Radio',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      disabled: {
        default: false
      }
    }
  }
</script>

<style>
.radio-inline {
  margin-right: 20px;
}
.radio-disabled{
  color:#aaa;
}
</style>

