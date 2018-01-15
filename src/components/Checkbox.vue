<template>
  <div class="checkbox">
    <label class="checkbox-inline" v-for="option in options" :key="option.value">
        <input
          type="checkbox"
          v-model="value[name]"
          :value="option.value"
          :name="name">
        <span>{{option.label}}</span>
      </label>
  </div>
</template>
<script>
  export default {
    name: 'Checkbox',
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
