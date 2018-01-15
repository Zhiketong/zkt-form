<template>
  <input v-model.trim="value[name]" class="form-control">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Input',
    extends: Base
  }
</script>
