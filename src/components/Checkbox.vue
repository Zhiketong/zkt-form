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
  export default {
    name: 'FormCheckbox',
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
