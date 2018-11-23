<template>
  <span v-html="val" v-on="listeners" class="form-control-static"></span>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Static',
    extends: Base
  }
</script>
