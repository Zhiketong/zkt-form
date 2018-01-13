<template>
  <div class="form-control-static" v-html="value"></div>
</template>
<script>
  export default {
    name: 'Static',
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
