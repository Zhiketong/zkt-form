<template>
  <div>
    <slot name='label'></slot>
      <div class="input-group">
            <span class="input-group-addon active" @click="min($event)"> — </span>
            <input 
            type="number" 
            class="form-control" 
            v-model.number="val"
            @change="$emit('change', $event.target.value)">
            <span class="input-group-addon active" @click="plus()"> + </span>
        </div>
    <slot></slot>
  </div>
</template>
<script>
  import Input from './Input.vue'
  export default {
    name: 'FormNumber',
    extends: Input,
    props: {
      value: {
        default: 0
      }
    },
    methods:{
      min(e){
          this.val--
          this.$emit('change',this.val)
      },
      plus(){
          this.val++
          this.$emit('change', this.val)
      },
    }
  }
</script>
<style scoped>
    .active{ position: relative;}
    .active:hover{cursor: pointer;}
    .active:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color:#ddd;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        opacity: 0;
        pointer-events: none;
        -webkit-transition: opacity 600ms;
        transition: opacity 600ms;   /*加上动画显得更自然*/
    }
    .active:active:before{
        opacity: 1;
        -webkit-transition: opacity 150ms;
        transition: opacity 150ms;
        }
</style>
