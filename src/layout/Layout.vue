<template lang="html">
  <form class="form" v-on="$listeners">
    <slot></slot>
    <div class="form-group clearfix"
      v-for="row in fields"
      v-if="!row.group"
      v-show="_visible(row)"
      @click="$emit('update:field', row)"
      :key="row.name"
      :ref="row.name"
      :class="{active: row.name==field.name||field.group}"
    >
      <label v-if="row.label" class="control-label" :class="'col-sm-'+labelColumn">
        {{row.label}}
        <span class="text-warning" v-if="validation[row.name]&&validation[row.name].required">*</span>
      </label>
      <div class="row" :class="'col-sm-'+(12-labelColumn)">
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
    },
    validation: {
      type: Object,
      default () {
        return {}
      }
    },
    labelColumn: {
      type: Number,
      default: 2
    }
  },
  methods: {
    getGroup (name) {
      return this.$refs[name] && this.$refs[name][0]
    },
    _visible (field) {
      if (typeOf(field.visible) === 'function') {
        return field.visible(this.value, field)
      }
      if (!field.dependOnName) return true
      return this.value[field.dependOnName]===field.dependOnValue||this.value[field.dependOnName]!==field.dependOnFalseValue
    }
  }
}
</script>
