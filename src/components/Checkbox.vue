<template>
  <div class="checkbox-wrapper">
    <label class="checkbox-inline" v-for="option in options" :key="option.value">
        <input
          type="checkbox"
          v-model="value[name]"
          :value="option.value"
          :name="name"
          @change="$emit('change', $event.target.value)">
        <span>{{option.label}}</span>
      </label>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormCheckbox',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      value: {}
    }
  }
</script>
<style scoped>
.form-horizontal .checkbox-wrapper .checkbox-inline {
  padding-top: 5px;
}
</style>
