<template>
  <span class="radio">
    <label class="radio-inline" v-for="option in options" :key="option.value">
        <input
          type="radio"
          v-model="val"
          :value="option.value"
          :name="name"
          @change="$emit('change', $event.target.value)">
        <span>{{option.label}}</span>
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
      value: {}
    }
  }
</script>
<style>
</style>
