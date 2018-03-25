<template>
  <img :src="val" alt="alt">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormImage',
    extends: Base,
    props: {
      alt: {
        type: String,
        default: ''
      }
    }
  }
</script>
