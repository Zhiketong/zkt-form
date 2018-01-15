<template>
  <label v-if="text" class="control-label">{{text}}</label>
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
