<template>
  <span v-html="val" class="form-control-static"></span>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Static',
    extends: Base
  }
</script>
