<template>
  <div class="form-group" :class="{'has-error': hasError}">
    <label v-if="label" :for="name" class="control-label col-sm-2">{{label}}</label>
    <div class="col-sm-10">
      <slot></slot>
      <p class="help-block" v-if="helpText">{{helpText}}</p>
    </div>
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
