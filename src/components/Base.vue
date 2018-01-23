<script>
  import {Parser} from 'expr-eval'
  export default {
    name: 'FormBase',
    props: {
      name: {
        type: String,
        default: ''
      },
      expression: {
        type: String,
        default: 'number*2'
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
        if (this.group) return
        var result = Parser.evaluate(this.expression, this.value)
        return result
      }
    }
  }
</script>
