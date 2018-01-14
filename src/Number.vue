<template>
  <input type="number" v-model.number="value[name]" class="form-control">
</template>
<script>
  import Input from './Input.vue'
  export default {
    name: 'Number',
    extends: Input
  }
</script>
