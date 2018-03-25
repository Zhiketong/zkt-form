<template>
  <button class="btn" :type="type">{{value}}</button>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormButton',
    extends: Base,
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>
