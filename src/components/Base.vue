<script>
  import {Parser} from 'expr-eval'
  export default {
    name: 'FormBase',
    domProps: {
      diabled: true
    },
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
        type: Object,
        default () {
          return {}
        }
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
    methods: {
      setValue (value) {
        this.value[this.name] = value
      },
      getValue () {
        return this.value[this.name]
      },
      setProp (name, prop, internal=false) {
        if (arguments.length>=2&&!name) throw new Error('必须提供prop属性')
        let value = internal ? this.value[prop] : prop
        this.$emit(`update:${name}`, value)
      }
    },
    mounted () {
      if (this.expression) {
        this.$watch('value',
        (nv) => {
           this.value[this.name] = Parser.evaluate(this.expression, this.value)
        },
        {
          deep: true,
          immediate: true
        })
      }
    }
  }
</script>
