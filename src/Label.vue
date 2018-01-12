<template>
  <label v-if="text">{{text}}</label>
</template>
<script>
  export default {
    name: 'Label',
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>
