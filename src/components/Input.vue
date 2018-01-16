<template>
  <input v-model.trim="value[name]" @change="$emit('change', $event.target.value)" class="form-control">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormInput',
    extends: Base
  }
</script>
