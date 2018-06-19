<template>
  <div class="form-group" :class="{'has-error': hasError}">
    <label v-if="label" :for="name">{{label}}</label>
    <slot></slot>
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
      },
      name: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>
