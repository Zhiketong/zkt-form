<template>
  <input type="number" v-model.number="value[name]" @change="$emit('change', $event.target.value)" class="form-control">
</template>
<script>
  import Input from './Input.vue'
  export default {
    name: 'FormNumber',
    extends: Input
  }
</script>
