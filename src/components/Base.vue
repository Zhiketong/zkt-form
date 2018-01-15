<script>
  export default {
    name: 'FormBase',
    props: {
      name: {
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
      }
    }
  }
</script>
