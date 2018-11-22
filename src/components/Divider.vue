<template>
  <div class="form-divider">
    <div class="badge">{{title}}</div>
    <hr>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Divider',
    extends: Base,
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
  .form-divider {
    width: 100%;
    text-align: center
  }
  .form-divider .badge {
    margin-bottom: -60px;
  }
</style>
