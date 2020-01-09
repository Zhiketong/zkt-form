<template>
  <select
    v-model="val"
    v-on="listeners"
    class="form-control">
    <option value="" v-if="showEmpty">请选择</option>
    <option
    v-for="option in options"
    :value="option[optionValueName]"
    :key="option[optionKeyName]"
    :disabled="option['disabled']"
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
      showEmpty: {
        type: Boolean,
        default: true
      },
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
