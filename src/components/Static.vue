<template>
  <div>
    <slot name='label'></slot>
    <span class="before" v-html="before"></span>
    <span v-html="val"></span>
    <span class="after" v-html="after"></span>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormStatic',
    extends: Base,
     props: {
      before: {
        type: String,
        default: ''
      },
      after: {
        type: String,
        default: ''
      },
      value: {
        default: 0
      }
    }
  }
</script>
