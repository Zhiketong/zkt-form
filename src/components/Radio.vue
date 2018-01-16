<template>
  <div class="radio-wrapper">
    <label class="radio-inline" v-for="option in options" :key="option.value">
        <input
          type="radio"
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
    name: 'FormRadio',
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      value: {}
    },
    computed: {
      val: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },
    data () {
      return {}
    }
  }
</script>
