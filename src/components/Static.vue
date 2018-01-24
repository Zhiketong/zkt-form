<template>
  <div class="form-control-static">
    <span class="before">{{before}}</span>
    <span v-html="value[name]"></span>
    <span class="after">{{after}}</span>
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
      }
    }
  }
</script>
