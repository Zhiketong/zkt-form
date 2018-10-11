<template lang="html">
  <form class="form" v-on="$listeners">
    <div class="form-group"
      v-for="row in fields"
      v-if="!row.group"
      v-show="row.show||!row.hasOwnProperty('show')"
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
export default {
  name: 'Layout',
  inheritAttrs: false,
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
