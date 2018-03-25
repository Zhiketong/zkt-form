<script>
  export default {
    name: 'FormBase',
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
        this.$emit('input', value)
      },
      getValue () {
        return this.value
      },
      setProp (name, value) {
        this.$emit(`update:${name}`, value)
      }
    }
  }
</script>

<style>
.form-control {
  display: inline-block;
}
</style>
