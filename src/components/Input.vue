<template>
  <input
    v-model.trim="val"
    v-bind="$props"
    v-on="listeners"
    class="form-control">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Input',
    extends: Base
  }
</script>
