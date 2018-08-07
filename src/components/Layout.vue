<template lang="html">
  <form class="form" @submit.prevent="_onSubmit">
    <div class="form-group "
    v-for="row in fields"
    v-bind="row"
    :key="row.name"
    :ref="row.name">
      <div >
        <slot v-if="row.group" :name="row.name"></slot>
      </div>
      <div >
        <slot v-if="!row.group" :name="row.name"></slot>
      </div> 
      <slot name="warnText"></slot>
    </div>
  </form>
</template>

<script>

export default {
  name: 'FormLayout',
  
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    },
    validation:{
      type:Object
    }
  },
  
  mounted(){
    // console.log(this.validation)
    },
  methods:{
     _onSubmit () {
        // this.validate()&&
        this.$emit('onSubmit')
        // alert(1)
      }
  }
}
</script>
