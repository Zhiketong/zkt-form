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
.form-control {
  display: inline-block;
  width: auto;
}
</style>
