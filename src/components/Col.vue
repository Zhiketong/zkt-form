<template>
  <div class="col" :class="className">
    <slot></slot>
    <i class="glyphicon form-control-feedback" v-if="icon" :class="['glyphicon-'+icon]"></i>
    <p class="help-block" v-if="helpText">{{helpText}}</p>
    <template v-if="$v.$error">
    <p class="help-block" v-if="$v.required===false">该字段必须填写</p>
    <p class="help-block" v-if="$v.email===false">请填写正确的邮箱</p>
    <p class="help-block" v-if="$v.minLength===false">该字段不能少于{{$v.$params['minLength']['min']}}个字符</p>
    <p class="help-block" v-if="$v.maxLength===false">该字段不能多于{{$v.$params['maxLength']['max']}}个字符</p>
    <p class="help-block" v-if="$v.minValue===false">该字段不能小于{{$v.$params['minValue']['min']}}</p>
    <p class="help-block" v-if="$v.maxValue===false">该字段不能大于{{$v.$params['maxValue']['max']}}</p>
    <p class="help-block" v-if="$v.sameAs===false">该字段必须和{{$v.$params['sameAs']['eq']}}相等</p>
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
      col: {
        type: Object,
        default () {
          return {
            md: 12,
            sm: 12,
            lg: 12
          }
        }
      },
      $v: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      className () {
        var className = []
        this.$v.$error&&className.push('has-error')
        this.icon&&className.push('has-feedback')
        for (let k in this.col) {
          className.push(`col-${k}-${this.col[k]}`)
        }
        return className
      }
    }
  }
</script>
