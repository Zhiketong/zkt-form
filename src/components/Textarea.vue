<template>
  <textarea
    v-model="val"
    v-on="listeners"
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
