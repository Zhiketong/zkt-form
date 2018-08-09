<template>
  <div>
    <slot name='label'></slot>
    <span>
      <label class="radio-inline" v-for="option in options" :key="option.value">
          <input
            type="radio"
            v-model="val"
            :value="option.value"
            :name="name"
            @change="$emit('change', $event.target.value)">
          <span>{{option.label}}</span>
        </label>
    </span>
    <slot ></slot>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'FormRadio',
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

