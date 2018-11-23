<template>
  <select
    v-model="val"
    v-on="listeners"
    class="form-control"
    @change="$emit('change', $event.target.value)">
    <option value="">请选择</option>
    <option
    v-for="option in options"
    :value="option[optionValueName]"
    :key="option[optionKeyName]"
    >
      {{option[optionKeyName]}}
    </option>
  </select>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Select',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {},
      options: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
