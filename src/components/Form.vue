<template>
  <div>
    <slot name="header"></slot>
    <form-layout :fields="fields" :validation='$v.value' @onSubmit="_onSubmit">
        <component
        v-for="field in fields"
        v-bind.sync="field"
        :model="model"
        v-model.sync="value[field.name]"
        :slot="field.group||field.name"
        :is="field['tagName']&&'form-'+field['tagName']"
        :ref="field.name&&'field'+field.name"
        :key="field.name"
        @input.native="_onChange(field)"
        @change="_onChange(field)"
        class="field"
        :class="className(field.name)"
        style='width:100%'>
          <div slot="label">
            <!-- label&helpText -->
            <label v-if="field.label && field.label.length >= 0" >{{field.label}}</label>
            <span style="margin-left:10px;color:#BDBBBF;font-size:12px">{{field.helpText && field.helpText.length >= 0?`(${field.helpText})`:''}}</span>
          </div>
          <!-- warnText -->
          <template v-if="warnTip(field.name).$error">
            <p class="help-block" v-if="warnTip(field.name).required===false">该字段必须填写</p>
            <p class="help-block" v-if="warnTip(field.name).requiredIf===false">该字段必须填写</p>
            <p class="help-block" v-if="warnTip(field.name).requiredUnless===false">该字段必须填写</p>
            <p class="help-block" v-if="warnTip(field.name).email===false">请填写正确的邮箱</p>
            <p class="help-block" v-if="warnTip(field.name).url===false">请填写正确的网址</p>
            <p class="help-block" v-if="warnTip(field.name).ipAddress===false">请填写正确的IP地址</p>
            <p class="help-block" v-if="warnTip(field.name).macAddress===false">请填写正确的MAC地址</p>
            <p class="help-block" v-if="warnTip(field.name).alpha===false">该字段只能填写字母</p>
            <p class="help-block" v-if="warnTip(field.name).numberic===false">该字段只能填写数字</p>
            <p class="help-block" v-if="warnTip(field.name).alphaNum===false">该字段只能填写字母和数字</p>
            <p class="help-block" v-if="warnTip(field.name).minLength===false">该字段不能少于{{warnTip(field.name).$params['minLength']['min']}}个字符</p>
            <p class="help-block" v-if="warnTip(field.name).maxLength===false">该字段不能多于{{warnTip(field.name).$params['maxLength']['max']}}个字符</p>
            <p class="help-block" v-if="warnTip(field.name).minValue===false">该字段不能小于{{warnTip(field.name).$params['minValue']['min']}}</p>
            <p class="help-block" v-if="warnTip(field.name).maxValue===false">该字段不能大于{{warnTip(field.name).$params['maxValue']['max']}}</p>
            <p class="help-block" v-if="warnTip(field.name).sameAs===false">该字段必须和{{warnTip(field.name).$params['sameAs']['eq']}}相等</p>
        </template>
      </component>
    </form-layout>
    <slot name="footer"></slot>
  </div>
  
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import * as utils from './utils.js'
  import FormLayout from './Layout.vue'
  import FormInput from './Input.vue'
  import FormNumber from './Number.vue'
  import FormTextarea from './Textarea.vue'
  import FormCheckbox from './Checkbox.vue'
  import FormRadio from './Radio.vue'
  import FormSelect from './Select.vue'
  import FormStatic from './Static.vue'
  import FormDivider from './Divider.vue'
  import FormImage from './Image.vue'
  import FormButton from'./Button.vue'

  export default {
    name: 'FormNested',
    mixins: [validationMixin],
    components: {
      FormLayout,
      FormInput,
      FormNumber,
      FormTextarea,
      FormCheckbox,
      FormRadio,
      FormSelect,
      FormStatic,
      FormDivider,
      FormImage,
      FormButton
    },
    props: {
      fields: {
        type: Array,
        default () {
          return []
        }
      },
      model:{
          type: Object,
          default () {
            return {}
          }
      },
      value: {
        type: Object,
        default () {
          return {}
        }
      },
      validation: {
        type: Object,
        default () {
          return {
            value: {
            }
          }
        }
      },
      triggers: {
        type: Array,
        default () {
          return []
        }
      },
      name: {
        type: String,
        default: ''
      }
    },
    validations () {
      return {
        value: utils.transformValidation(this.validation)
      }
    },
    methods: {
      className(name){
        var className = []
        var obj = {...this.$v.value[name]}
        obj.$error&&className.push('has-error')
        return className
      },
      warnTip(name){
        var obj = {...this.$v.value[name]}
        return obj
      },
      validate () {
        this.$v.$touch()
        return !this.$v.$error
      },
      // getField (name) {
      //   return this.$refs['field'+name]&&this.$refs['field'+name][0]
      // },
      // getGroup (name) {
      //   return this.$refs['group'+name]&&this.$refs['group'+name][0]
      // },
      _onChange (field) {
        this.$v.value[field.name]&&this.$v.value[field.name].$touch()
      },
      _onSubmit () {
        this.validate()&&this.$emit('submit')
      }
    },
    mounted () {
      
      // this.triggers.forEach((trigger) => {
      //   var sourceField = this.getField(trigger.source)
      //   var targetField = this.getField(trigger.target)
      //   sourceField.$on(trigger.event, (value) => {
      //     targetField.setProp(trigger.targetProp, sourceField[trigger.sourceProp])
      //   })
      // })
    }
  }
</script>
