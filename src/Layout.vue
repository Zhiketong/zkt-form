<template lang="html">
  <div class="form-layout">
    <div class="form-group"
      v-for="row in fields"
      v-if="!row.group"
      :key="row.name"
      :ref="row.name"
    >
      <label v-if="row.label" class="control-label col-sm-2">{{row.label}}</label>
      <div :class="row.label?'col-sm-10':'col-sm-12'">
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
