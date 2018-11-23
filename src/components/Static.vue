<template>
  <span v-html="innerHTML" v-on="listeners" class="form-control-static"></span>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Static',
    extends: Base,
    props: {
      innerHTML: {
        type: String,
        default: ''
      }
    }
  }
</script>
