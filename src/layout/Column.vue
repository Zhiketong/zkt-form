<template lang="html">
  <div
    :class="['form-column', column, validation.$error&&'has-error']"
    v-show="getVisible"
  >
    <slot></slot>
    <p class="help-block" v-if="validation.$error">
      {{validation|message}}
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
  },
  computed: {
    getVisible () {
      return 'function' === typeOf(this.visible) ? this.visible(this.value) : this.visible
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
