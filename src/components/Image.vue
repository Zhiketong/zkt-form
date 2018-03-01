<template>
  <img :src="value[name]" alt="alt">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormStatic',
    extends: Base,
    props: {
      alt: {
        type: String,
        default: ''
      }
    }
  }
</script>
