<script>
  export default {
    name: 'Base',
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
