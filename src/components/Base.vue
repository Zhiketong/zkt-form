<script>
  export default {
    name: 'Base',
    inheritAttrs: false,
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
      placeholder: {
        type: String,
        default: ''
      },
      group: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
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
.form-filed {
  display: inline-block;
}
</style>
