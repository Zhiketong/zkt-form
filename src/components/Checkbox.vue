<template>
  <div>
    <slot name='label'></slot>
    <span>
      <label class="checkbox-inline" v-for="option in options" :key="option.value">
          <input
            type="checkbox"
            v-model="val"
            :value="option.value"
            :name="name"
            @change="$emit('change', $event.target.value)"
            :true-value="trueValue"
            :false-value="falseValue">
          <span>{{option.label}}</span>
        </label>
    </span>
    <slot ></slot>
  </div>
  
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormCheckbox',
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
      }
    }
  }
</script>
<style scoped>
.form-horizontal .checkbox-wrapper .checkbox-inline {
  padding-top: 5px;
}
</style>
