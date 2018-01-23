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
    computed: {
      computedValue () {
        if (!this.expression) return
        var result = Parser.evaluate(this.expression, this.value)
        return result
      }
    }
  }
</script>
