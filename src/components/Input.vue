<template>
  <div>
    <slot name='label'></slot>
    <input
    :type="type"
    v-model.trim="val"
    @change="$emit('change', $event.target.value)"
    class="form-control" :placeholder="placeholder">
    <slot></slot>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormInput',
    extends: Base,
    props:{
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
    }
  }
</script>
