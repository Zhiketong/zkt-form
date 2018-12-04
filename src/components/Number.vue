<template>
  <input
    v-model.number="val"
    v-on="listeners"
    type="number"
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
      },
      type: {
        type: String,
        default: 'number'
      }
    }
  }
</script>
