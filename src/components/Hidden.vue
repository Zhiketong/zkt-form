<script>
  import Input from './Input.vue'
  export default {
    name: 'FormHidden',
    props: {
      type: {
        type: String,
        default: 'hidden'
      }
    },
    extends: Input
  }
</script>
