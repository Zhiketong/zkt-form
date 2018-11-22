<template>
  <textarea
    v-bind="$props"
    v-model="val"
    @change="$emit('change', $event.target.value)"
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
