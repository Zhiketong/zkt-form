<template>
  <textarea
    v-model="value[name]"
    @change="$emit('change', $event.target.value)"
    class="form-control">
  </textarea>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormTextarea',
    extends: Base
  }
</script>
