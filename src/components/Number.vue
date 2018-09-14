<template>
  <input
    type="number"
    v-model.number="val"
    @change="$emit('change', $event.target.value)"
    class="form-control">
</template>
<script>
  import Input from './Input.vue'
  export default {
    name: 'Number',
    extends: Input,
    props: {
      value: {
        type: Number,
        default: 0
      }
    }
  }
</script>
