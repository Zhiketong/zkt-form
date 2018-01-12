<template>
  <div class="form-group">
    <slot></slot>
    <div class="clearfix"></div>
    <p class="help-block" v-if="helpText">{{helpText}}</p>
  </div>
</template>
<script>
  export default {
    name: 'FormGroup',
    props: {
      id: {
        type: String,
        default: ''
      },
      helpText: {
        type: String,
        default: ''
      }
    }
  }
</script>
