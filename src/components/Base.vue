
<script>
import {Parser} from 'expr-eval'
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
      helpText:{
        type: String,
        default: ''
      },
      label: {
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
      }
    },
    mounted () {
      if (this.expression) {
        this.$watch('model',
        (nv) => {
           this.model[this.name] = Parser.evaluate(this.expression, this.model)
        },
        {
          deep: true,
          immediate: true
        })
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
}
</style>
