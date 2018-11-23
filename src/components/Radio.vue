<template>
  <span class="radio-wrapper" v-on="listeners">
    <label class="radio-inline" v-for="option in options" :key="option.value">
        <input
          type="radio"
          v-model="val"
          :value="option[optionValueName]"
          :name="name"
          @change="$emit('change', $event.target.value)">
        <span>{{option[optionKeyName]}}</span>
      </label>
  </span>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Radio',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
    }
  }
</script>
