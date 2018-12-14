<template lang="html">
  <div  :class="['form-column', column, validation.$error&&'has-error']"  >
    <slot></slot>
    <p class="help-block" v-if="validation.$error">
      {{validation|message(field)}}
    </p>
  </div>
</template>

<script>
import message from '../utils/message'
import typeOf from '../utils/typeOf'

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
    field: {
      type: Object,
      default () {
        return {}
      }
    },
    visible: {
      default: true
    },
    value: {
      type: Object,
      default () {
        return {}
      }
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
  display: inline-block;
  padding-left: 2px;
  padding-right: 2px;
}
</style>
