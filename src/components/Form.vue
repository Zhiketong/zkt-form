<template>
  <form class="form">
    <form-group>
      <slot name="header"></slot>
    </form-group>
    <form-group
    v-for="(row, index) in fields"
    :key="index"
    >
      <form-col
        v-for="field in row"
        v-bind="{
          col: field.col,
          helpText: field.helpText,
          icon:field.icon,
          $v: field.group?$v.value[field.group][field.name]:$v.value[field.name]
          }"
        :key="field.name">
        <component
          v-bind="field"
          v-model="!field.group?value:value[field.group]"
          :is="'Form'+field['tagName']"
          :ref="field.name"
          @input.native="field.group?$v.value[field.group][field.name].$touch():$v.value[field.name].$touch()"
        />

      </form-col>
    </form-group>
    <form-group>
      <slot name="footer"></slot>
    </form-group>
  </form>
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import * as validators from 'vuelidate/lib/validators'
  import FormGroup from './Group.vue'
  import FormCol from './Col.vue'
  import FormLabel from './Label.vue'
  import FormInput from './Input.vue'
  import FormNumber from './Number.vue'
  import FormTextarea from './Textarea.vue'
  import FormCheckbox from './Checkbox.vue'
  import FormRadio from './Radio.vue'
  import FormSelect from './Select.vue'
  import FormStatic from './Static.vue'

  function typeOf (obj) {
    var class2type = {} ;
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e,i){
        class2type[ "[object " + e + "]" ] = e.toLowerCase()
    })
    if ( obj == null ){
        return String( obj )
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ class2type.toString.call(obj) ] || "object" :
        typeof obj
  }

  // 转换校验配置规则，把配置的值转换成函数调用
  function transformValidation (validation) {
    for(let name in validation) {
      let validator = validation[name]
      for(let k in validator) {
        if (typeOf(validator[k]) === 'object') {
          validation[name] = transformValidation(validation[name])
          break
        }
        if (!validators[k]) continue
        validator[k] = validator[k]===true ? validators[k] : validators[k](validator[k])
      }
    }
    return validation
  }

  export default {
    name: 'Form',
    validators,
    mixins: [validationMixin],
    components: {
      FormGroup,
      FormCol,
      FormLabel,
      FormInput,
      FormNumber,
      FormTextarea,
      FormCheckbox,
      FormRadio,
      FormSelect,
      FormStatic
    },
    props: {
      fields: {
        type: Array,
        default () {
          return []
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
      }
    },
    validations () {
      var validation = transformValidation(this.validation)
      return {
        value: this.validation
      }
    },
    methods: {
      validate () {
        this.$v.$touch()
        return !this.$v.$error
      },
      getField (name) {
        return this.$refs[name][0]
      }
    }
  }
</script>
