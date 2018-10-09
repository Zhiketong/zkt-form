<template lang="html">
  <div class="form-layout">
    <div class="form-group"
      v-for="row in fields"
      v-if="!row.group&&row.show!==false"
      :key="row.name"
      :ref="row.name"
      :class="validation[row.name]|hasError"
    >
      <label v-if="row.label" class="control-label col-sm-2">{{row.label}}</label>
      <div class="col-sm-10">
        <slot :name="row.name"></slot>
        <p class="help-block" v-if="row.helpText">{{row.helpText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  inheritAttrs: false,
  filters: {
    hasError (v) {
      return v && v.$error && 'has-error'
    }
  },
  props: {
    fields: {
      type: Array,
      default () {
        return []
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
