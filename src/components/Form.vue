<template>
  <form-layout :fields="fields" @submit.prevent="_onSubmit">
    <component
      v-for="field in fields"
      v-bind.sync="field"
      v-model.sync="value[field.name]"
      :slot="field.group||field.name"
      :is="field['tagName']&&'form-'+field['tagName']"
      :ref="field.name&&'field'+field.name"
      @input.native="_onChange(field)"
      @change.native="_onChange(field)"
      class="field"
    />
  </form-layout>
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import * as utils from './utils.js'
  import FormLayout from './Layout.vue'
  import FormLabel from './Label.vue'
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

  var Form = {
    name: 'FormNested',
    mixins: [validationMixin],
    components: {
      FormLayout,
      FormLabel,
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
      validate () {
        this.$v.$touch()
        return !this.$v.$error
      },
      getField (name) {
        return this.$refs['field'+name]&&this.$refs['field'+name][0]
      },
      getGroup (name) {
        return this.$refs['group'+name]&&this.$refs['group'+name][0]
      },
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

  Form.register = function (name, component) {
    if (name.name) {
      component = name
    }
    name = component.name
    if (Form.components[name]) {
      throw new Error('该组件已经被注册')
    }
    Form.components[name] = component
  }

  export default Form
</script>
