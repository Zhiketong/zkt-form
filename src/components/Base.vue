<script>
  export default {
    name: 'Base',
    inheritAttrs: true,
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {},
      type: {
        type: String,
        default: 'text'
      },
      optionKeyName: {
        type: String,
        default: 'label'
      },
      optionValueName: {
        type: String,
        default: 'value'
      },
      placeholder: {
        type: String,
        default: ''
      },
      group: {
        type: String,
        default: ''
      }
    },
    computed: {
      val: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      },
      listeners () {
        var vm = this
        return Object.assign({}, this.$listeners, {
          input (e) {
            // vm.$emit('input', e.target.value)
          }
        })
      }
    },
    methods: {
      setValue (value) {
        this.val = value
      },
      getValue () {
        return this.val
      }
    }
  }
</script>
<style>
  .form-field {
    display: inline-block;
    width: 100%;
  }
</style>
