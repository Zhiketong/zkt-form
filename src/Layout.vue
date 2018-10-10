<template lang="html">
  <form class="form" v-on="$listeners">
    <div class="form-group"
      v-for="row in fields"
      v-if="!row.group"
      v-show="row.show||!row.hasOwnProperty('show')"
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
  </form>
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
