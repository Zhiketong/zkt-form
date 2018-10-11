<template lang="html">
  <div
    :class="['form-column', column, validation.$error&&'has-error']"
    v-show="show"
  >
    <slot></slot>
    <p class="help-block" v-if="validation.$error">
      {{validation|message}}
    </p>
  </div>
</template>

<script>
import message from '../utils/message'

export default {
  name: 'Column',
  inheritAttrs: false,
  filters: {
    message
  },
  props: {
    column: {
      default: 'col-sm-12'
    },
    show: {
      default: true
    },
    validation: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="css">
.form-column {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
