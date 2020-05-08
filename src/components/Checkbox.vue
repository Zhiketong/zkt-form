<template>
  <div class="checkbox-wrapper">
    <label v-if="checkAll" class="checkbox">
      <a @click="selectAll">全选</a>/<a @click="deSelectAll">反选</a>
    </label>
    <label 
      class="checkbox-inline" 
      :class="(disabled || option.disabled) ? 'checkbox-disabled' : ''" 
      v-for="option in options" :key="option.value">
      <input
        type="checkbox"
        v-model="val"
        v-on="listeners"
        :value="option[optionValueName]"
        :name="name"
        :true-value="trueValue"
        :false-value="falseValue"
        :disabled="disabled || option.disabled">
      <span>{{option[optionKeyName]}} </span>
    </label>
  </div>
</template>
<script>
  import Base from './Base.vue'
  export default {
    name: 'Checkbox',
    extends: Base,
    props: {
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array
      },
      value: {},
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
      disabled: {
        default: false
      },
      checkAll: {
        default: false
      }
    },
    methods: {
      selectAll () {
        this.val = this.options.map((option) => {
          return option[this.optionValueName]
        })
      },
      deSelectAll () {
        let set = new Set(this.val)
        this.val = this.options.map((option) => {
          let value = option[this.optionValueName]
          return !set.has(value) && value
        })
      }
    }
  }
</script>

<style>
  .checkbox-wrapper {
    width: 100%;
  }
  .checkbox-inline {
    margin-right: 20px;
  }
  .checkbox-disabled{
    color:#aaa;
  }
</style>
