<template>
  <img v-bind="$props" :src="val" v-on="listeners">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Img',
    extends: Base,
    inheritAttrs: true,
    props: {
      alt: {
        type: String,
        default: ''
      }
    }
  }
</script>
