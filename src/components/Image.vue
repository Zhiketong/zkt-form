<template>
  <img :src="val" :alt="alt">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Img',
    extends: Base,
    props: {
      alt: {
        type: String,
        default: ''
      }
    }
  }
</script>
