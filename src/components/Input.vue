<template>
  <input
    v-model.trim="val"
    @change="$emit('change', $event.target.value)"
    class="form-control">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Input',
    extends: Base
  }
</script>
