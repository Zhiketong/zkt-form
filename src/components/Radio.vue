<template>
  <div class="radio-wrapper">
    <label class="radio-inline" v-for="option in options" :key="option.value">
        <input
          type="radio"
          v-model="val"
          :value="option.value"
          :name="name"
          @change="$emit('change', $event.target.value)">
        <span>{{option.label}}</span>
      </label>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormRadio',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      value: {}
    }
  }
</script>
<style>
.form-horizontal .radio-wrapper .radio-inline {
  padding-top: 5px;
}
</style>
