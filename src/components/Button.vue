<template>
  <button
  class="btn btn-info"
  :type="type"
  v-on="$listeners">
  {{value}}
</button>
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Button',
    extends: Base,
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      waitingTime: {
        type: Number,
        default: 3000
      }
    },
    mounted () {
      if (this.type !== 'submit') return
      this.$on('click',  () => {
        this.$emit('update:disabled', true)
        setTimeout(() => {
          this.$emit('update:disabled', false)
        }, this.waitingTime)
      })
    }
  }
</script>
