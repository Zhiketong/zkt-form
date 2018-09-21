<script>
  export default {
    name: 'Base',
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: ''
      },
      expression: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      group: {
        type: String,
        default: ''
      },
      validation: {
        type: Object,
        default () {
          return {}
        }
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
      },
      setProp (name, value) {
        this.$emit(`update:${name}`, value)
      }
    }
  }
</script>

<style>
.form-filed {
  display: inline-block;
  margin-bottom: 10px;
}
</style>
