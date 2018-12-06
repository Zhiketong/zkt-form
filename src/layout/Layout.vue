<template lang="html">
  <form class="form" v-on="$listeners">
    <div class="form-group clearfix"
      v-for="row in fields"
      v-if="!row.group"
      v-show="getVisible(row)"
      @click="clickEventFn($event, row)"
      :key="row.name"
      :ref="row.name"
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
    }
  },
  methods: {
    clickEventFn (ev, data) {
      // console.log(data, ev, '999')
      this.$emit('form-group-click-fn', {data: data, ev: ev})
    },
    getVisible (row) {
      if (!row.hasOwnProperty('visible')) return true
      return typeOf(row.visible) == 'function' ? row.visible(this.value) : row.visible
    }
  }
}
</script>
