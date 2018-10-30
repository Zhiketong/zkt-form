<template lang="html">
  <div
    :class="['form-column', column, validation.$error&&'has-error']"
    v-show="visible"
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
    show: {
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
    visible () {
      return 'function' === typeOf(this.show) ? this.show(this.value) : this.show
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
