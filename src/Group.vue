<template>
  <div class="form-group" :class="className">
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
    },
    computed: {
      className () {
        return {
          'has-success': true,
          'has-error': true,
          'has-feedback': true
        }
      }
    }
  }
</script>
