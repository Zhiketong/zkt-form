<template>
  <div class="col" :class="className">
    <slot></slot>
    <i class="glyphicon form-control-feedback" v-if="icon" :class="['glyphicon-'+icon]"></i>
    <p class="help-block" v-if="helpText">{{helpText}}</p>
    <template v-if="validation.$error">
    <p class="help-block" v-if="validation.required===false">该字段必须填写</p>
    <p class="help-block" v-if="validation.requiredIf===false">该字段必须填写</p>
    <p class="help-block" v-if="validation.requiredUnless===false">该字段必须填写</p>
    <p class="help-block" v-if="validation.email===false">请填写正确的邮箱</p>
    <p class="help-block" v-if="validation.url===false">请填写正确的网址</p>
    <p class="help-block" v-if="validation.ipAddress===false">请填写正确的IP地址</p>
    <p class="help-block" v-if="validation.macAddress===false">请填写正确的MAC地址</p>
    <p class="help-block" v-if="validation.alpha===false">该字段只能填写字母</p>
    <p class="help-block" v-if="validation.numberic===false">该字段只能填写数字</p>
    <p class="help-block" v-if="validation.alphaNum===false">该字段只能填写字母和数字</p>
    <p class="help-block" v-if="validation.minLength===false">该字段不能少于{{validation.$params['minLength']['min']}}个字符</p>
    <p class="help-block" v-if="validation.maxLength===false">该字段不能多于{{validation.$params['maxLength']['max']}}个字符</p>
    <p class="help-block" v-if="validation.minValue===false">该字段不能小于{{validation.$params['minValue']['min']}}</p>
    <p class="help-block" v-if="validation.maxValue===false">该字段不能大于{{validation.$params['maxValue']['max']}}</p>
    <p class="help-block" v-if="validation.sameAs===false">该字段必须和{{validation.$params['sameAs']['eq']}}相等</p>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'FormCol',
    props: {
      helpText: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      tagName: {
        type: String,
        default () {
          return ''
        }
      },
      col: {
        type: Object,
        default () {
          return {
            md: this.tagName === 'label' ? 2 : 10,
            sm: this.tagName === 'label' ? 2 : 10,
            lg: this.tagName === 'label' ? 2 : 10
          }
        }
      },
      validation: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      className () {
        var className = []
        this.validation.$error&&className.push('has-error')
        this.icon&&className.push('has-feedback')
        for (let k in this.col) {
          className.push(`col-${k}-${this.col[k]}`)
        }
        return className
      }
    }
  }
</script>
