<template lang="html">
  <div  :class="['form-column', column, validation.$error&&'has-error']"  v-show="_visible(field)">
    <span class="form-control-static form-control-beforetext" v-if="field.beforeText" v-html="field.beforeText"></span>
    <slot></slot>
    <span
      class="glyphicon  form-control-feedback"
      v-if="field.icon" :class="field.icon"
      :style="{left:field.style&&field.style.width,marginLeft:'-34px'}"></span>
    <span class="form-control-static form-control-aftertext" v-if="field.afterText" v-html="field.afterText"></span>
    <p class="help-text" v-if="field.helpText" v-html="field.helpText">{{field.helpText}}</p>
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
  methods: {
    _visible (field) {
      if (typeOf(field.visible) === 'function') {
        return field.visible(this.value, field)
      }
      if (!field.dependOnName) return true
      return this.value[field.dependOnName]===field.dependOnValue
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
.form-control-beforetext {
  display: inline-block;
  padding-right: 2px;
  color: #999;
  font-size: 12px;
}
.form-control-aftertext {
  display: inline-block;
  padding-left: 2px;
  color: #999;
  font-size: 12px;
}
</style>
