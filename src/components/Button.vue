<template>
  <button class="btn btn-info" :type="type">{{value}}</button>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Button',
    extends: Base,
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>
