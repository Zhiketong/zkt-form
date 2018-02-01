<template>
  <label v-if="text" class="control-label">{{text}}:</label>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormLabel',
    extends: Base,
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
.form-horizontal .control-label {
  font-weight: normal;
  display: block;
}
</style>
