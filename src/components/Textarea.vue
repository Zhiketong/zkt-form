<template>
  <div>
    <slot name='label'></slot>
    <textarea
      v-model="val"
      @change="$emit('change', $event.target.value)"
      class="form-control">
    </textarea>
    <slot></slot>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormTextarea',
    extends: Base
  }
</script>
