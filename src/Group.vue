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
      },
      hasError: {
        type: Boolean,
        default: false
      },
      hasFeedback: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      className () {
        return {
          // 'has-success': true,
          'has-error': this.hasError,
          'has-feedback': this.hasFeedback
        }
      }
    }
  }
</script>
