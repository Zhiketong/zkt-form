<template>
  <div class="form-control-static" v-html="value[name]"></div>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormStatic',
    extends: Base
  }
</script>
