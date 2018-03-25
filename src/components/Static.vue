<template>
  <div class="form-control-static">
    <span v-html="val"></span>
  </div>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormStatic',
    extends: Base
  }
</script>
