<template>
  <div>
    <slot name='label'></slot>
    <img :src="val" alt="alt">
  </div>
 
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
