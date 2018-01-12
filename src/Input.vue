<template>
  <input v-model="value" class="form-control">
</template>
<script>
  export default {
    name: 'Input',
    props: {
      name: {
        type: String
      },
      value: {}
    }
  }
</script>
