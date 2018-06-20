<template lang="html">
  <form class="form">
    <div class="form-group"
    v-for="row in fields"
    v-if="!row.group"
    v-bind="row"
    :key="row.name"
    :ref="row.name">
      <slot :name="row.name"></slot>
      <p class="help-block" v-if="row.helpText">{{row.helpText}}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormLayout',
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
