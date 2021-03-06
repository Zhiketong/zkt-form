# 直客通-表单引擎 zkt-form

> 用于后台表单的快速生成,本项目为表单引擎的基本包，其他有依赖的富组件请根据业务采用扩展方式实现

## 功能
1. 支持基本表单控件：输入框、文本框、多选、单选、下拉、布尔、静态html
1. 支持表单扩展： 通过继承扩展更多字段和功能
1. 支持自定义页眉和页脚
1. 支持样式自定义
1. 支持获取单个字段
1. 支持事件绑定
1. 支持嵌套字段
1. 支持校验和自定义校验规则
1. 支持多列布局

## 版本
- 2.27.2
- 负责人： 任明磊

## 使用方法

### 调用form
```html
<Form
  :fields="fields"
  :validation="validation"
  :options="options"
  :components="components"
  ref="form"
  v-model="model"
  @submit="onSubmit">
</Form>
```
### 获取单个字段
```javascript
var form = this.$refs.form
var name = 'fieldName' // model fields validation中的name一一对应
var field = form.getField(name)
```
### 绑定事件
```javascript
field1.$on('change', () => {
  field2.value = 'other value'
})
```

## 扩展表单
```
import Form from './Form.vue'
import FormOtherField from './OtherField.vue'
export default {
  extends: Form,
  components: {
    FormOtherField
  }
}
// 在fields中
{
  name: 'otherfield',
  tagName: 'OtherField'
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Props
参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
fields | 表单内容项 | array | - | -
validation | 表单校验对象 | object | - | -
options | 表单域label宽度 | object | - | -
components | 表单扩展组件对象 | object | - | -

## 常见问题

## 遗留问题

## 更新记录

## 实例参考

