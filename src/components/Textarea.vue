<template>
  <textarea
    v-model="val"
    v-on="listeners"
    class="form-control">
  </textarea>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Textarea',
    extends: Base
  }
</script>
