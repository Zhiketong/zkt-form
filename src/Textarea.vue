<template>
  <textarea @input="$emit('input', $event.target.value)" class="form-control">{{value}}</textarea>
</template>
<script>
  export default {
    name: 'Input',
    props: {
      name: {
        type: String
      },
      value: {
      }
    }
  }
</script>
