<template>
  <div class="form-control-static" v-html="t(value[name])"></div>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'FormStatic',
    extends: Base,
    methods: {
      t () {
        return this.value[this.name]&&this.value[this.name].replace('{{computedValue}}', this.computedValue)
      }
    }
  }
</script>
