<template>
  <div>
    <button class="btn btn-primary" :type="type">{{value}}</button>
  </div>
  
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
