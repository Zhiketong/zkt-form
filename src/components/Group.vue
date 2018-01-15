<template>
  <div class="form-group" :class="{'has-error': hasError}">
    <slot></slot>
    <div class="clearfix"></div>
    <p class="help-block" v-if="helpText">{{helpText}}</p>
  </div>
</template>
<script>
  export default {
    name: 'FormGroup',
    props: {
      helpText: {
        type: String,
        default: ''
      },
      hasError: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
