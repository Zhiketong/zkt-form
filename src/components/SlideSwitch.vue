<template>
  <div>
    <div class="onoffswitch">
     <input type="checkbox"
     :true-value="trueValue"
     :false-value="falseValue"
     v-model="val"
     name="onoffswitch"
     class="onoffswitch-checkbox"
     :id="`${name}switch`">
     <label class="onoffswitch-label" :for="`${name}switch`">
         <span class="onoffswitch-inner"></span>
         <span class="onoffswitch-switch"></span>
     </label>
    </div>
  </div>
</template>

<script>
import Base from './Base.vue'
export default {
  name: 'SlideSwitch',
  extends: Base,
  props: {
    trueValue: {
      default: 1
    },
    falseValue: {
      default: 0
    }
  }
}
</script>
<style scoped>
.onoffswitch {
  position: relative;
  width: 110px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select: none;
}
.onoffswitch-checkbox {
  display: none;
}
.onoffswitch-label {
  display: block;
  height: 25px;
  width: 50px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #E3E3E3;
  border-radius: 36px;
}
.onoffswitch-inner {
  display: block;
  width: 100%;
  height: 22px;
  background-color: #D32F2F;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
  display: block;
  float: left;
  width: 50%;
  height: 36px;
  padding: 0;
  line-height: 30px;
  font-size: 16px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}
.onoffswitch-inner:before {
  /* content: "开启"; */
  padding-left: 10px;
  background-color: #D32F2F;
  color: #27A1CA;
  text-align: left;
}
.onoffswitch-inner:after {
  /* content: "关闭"; */
  padding-right: 10px;
  background-color: #FFFFFF;
  color: #666666;
  text-align: right;
}
.onoffswitch-switch {
  display: block;
  width: 25px;
  margin: 0px;
  background: #A1A1A1;
  position: absolute;
  top: 0; bottom: 0;
  right: 85px;
  border: 2px solid #E3E3E3;
  border-radius: 36px;
  transition: all 0.3s ease-in 0s;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
  margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
  width: 25px;right: 62px;
  background-color: #FFFFFF;
 }
</style>
