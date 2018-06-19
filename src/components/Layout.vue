<template lang="html">
  <form class="form">
    <form-group
    v-for="row in fields"
    v-if="!row.group"
    v-bind="row"
    :key="row.name"
    :ref="row.name">
      <slot :name="row.name"></slot>
    </form-group>
  </form>
</template>

<script>
import FormGroup from './Group.vue'
export default {
  name: 'FormLayout',
  components: {
    FormGroup
  },
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

<style lang="css">
</style>
