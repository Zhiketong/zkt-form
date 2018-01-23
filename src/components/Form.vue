<template>
  <form class="form">
    <form-group
    v-for="(row, index) in fields"
    :key="index"
    :ref="'group'+index"
    >
      <form-col
        v-for="field in row"
        v-bind="{
          col: field.col,
          helpText: field.helpText,
          icon:field.icon,
          validation: field.group?$v.value[field.group][field.name]:$v.value[field.name]
          }"
        :key="field.name">
        <component
          v-bind.sync="field"
          v-model="!field.group?value:value[field.group]"
          :is="field['tagName']&&'Form'+field['tagName']"
          :ref="field.name&&'field'+field.name"
          @input.native="_onChange(field)"
          @change.native="_onChange(field)"
        />

      </form-col>
    </form-group>
  </form>
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import * as utils from './utils.js'
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
  import FormDivider from './Divider.vue'
  import FormHidden from './Hidden.vue'

  export default {
    name: 'Form',
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
      FormStatic,
      FormDivider,
      FormHidden
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
        if (field.group) {
          this.$v.value[field.group][field.name]&&this.$v.value[field.group][field.name].$touch()
        } else {
          this.$v.value[field.name]&&this.$v.value[field.name].$touch()
        }
      }
    }
  }
</script>
