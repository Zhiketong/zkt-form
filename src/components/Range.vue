<template>
  <div>
    <input type="range" :style="`background-size: ${val / max * 100}% 100%;`" v-model="val" :max="max" :min="min" :step="step">
    <p>{{val}}</p>
  </div>
</template>

<script>
import Base from './Base.vue'
export default {
  name: 'Range',
  extends: Base,
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },
    max: {
      type: String,
      default: ''
    },
    min: {
      type: String,
      default: ''
    },
    step: {
      type: String,
      default: ''
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
    background: -webkit-linear-gradient(#059CFA, #059CFA) no-repeat;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 10px; /*将轨道设为圆角的*/
    box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff;
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
}
p{
  display: inline-block;
}
div{
  padding-top: 7px;
}
</style>
