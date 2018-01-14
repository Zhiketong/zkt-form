<template>
  <textarea v-model="value[name]" class="form-control">{{value}}</textarea>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Input',
    extends: Base
  }
</script>
