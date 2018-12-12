<template lang="html">
  <form class="form" v-on="$listeners">
    <div class="form-group clearfix"
      v-for="row in fields"
      v-if="!row.group"
      v-show="getVisible(row)"
      @click="$emit('update:field', row)"
      :key="row.name"
      :ref="row.name"
      :class="{active: row.name==field.name||field.group}"
    >
      <label v-if="row.label" class="control-label col-sm-2">{{row.label}}</label>
      <div class="col-sm-10 row">
          <slot :name="row.name"></slot>
      </div>
    </div>
  </form>
</template>

<script>
import typeOf from '../utils/typeOf'
export default {
  name: 'Layout',
  inheritAttrs: false,
  inject: ['current'],
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    field: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    getVisible (row) {
      if (!row.hasOwnProperty('visible')) return true
      return typeOf(row.visible) == 'function' ? row.visible(this.value) : row.visible
    },
    getGroup (name) {
      return this.$refs[name] && this.$refs[name][0]
    }
  }
}
</script>
