<template>
  <div>
    <slot name='label'></slot>
    <input
    :type="type"
    v-model.trim="val"
    v-bind="$props"
    @change="$emit('change', $event.target.value)"
    class="form-control" :placeholder="placeholder">
    <slot></slot>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Input',
    extends: Base
  }
</script>
