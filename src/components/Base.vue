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
