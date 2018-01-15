<template>
  <select :value="value[name]" class="form-control">
    <option value="">请选择</option>
    <option :value="option.value" v-for="option in options" :key="option.value">{{option.label}}</option>
  </select>
</template>
<script>
  export default {
    name: 'Select',
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {},
      options: {
        type: Array,
        default () {
          return {}
        }
      }
    }
  }
</script>
