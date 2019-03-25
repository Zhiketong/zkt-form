<template>
  <input
  type="range"
  :style="`background-size: ${val / max * 100}% 100%;`"
  v-model="val"
  v-on="listeners"
  :max="max"
  :min="min"
  :step="step">
</template>

<script>
import Input from './Input.vue'
export default {
  name: 'Range',
  extends: Input,
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style scoped>
input[type=range] {
    display: inline-block;
    -webkit-appearance: none;
    width: 300px;
    border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
    background: -webkit-linear-gradient(#D32F2F, #D32F2F) no-repeat;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 10px; /*将轨道设为圆角的*/
    box-shadow: 0 1px 1px #EEEEEE, inset 0 .125em .125em #EEEEEE;/* 轨道内置阴影效果 */
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    cursor: pointer;
    margin-top: -6px; /*使滑块超出轨道部分的偏移量相等*/
    background: #D32F2F;
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em #EEEEEE; /*设置边框*/
    box-shadow: 0 .125em .125em #EEEEEE; /*添加底部阴影*/
}
p{
  display: inline-block;
}
div{
  padding-top: 7px;
}
</style>
