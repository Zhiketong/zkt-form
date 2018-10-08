<template>
  <input
    v-model.number="val"
    v-bind="$props"
    @change="$emit('change', $event.target.value)"
    class="form-control">
</template>
<script>
  import Input from './Input.vue'
  export default {
    name: 'Number',
    extends: Input,
    props: {
      value: {
        default: 0
      },
      type: {
        type: String,
        default: 'number'
      }
    },
    methods:{
      min(e){
          this.val--
          this.$emit('change',this.val)
      },
      plus(){
          this.val++
          this.$emit('change', this.val)
      },
    }
  }
</script>
