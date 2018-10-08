<template>
  <form class="form" @submit.prevent="_onSubmit">
    <layout :fields="fields" :validation="$v.value">
      <component
        v-for="field in fields"
        v-bind.sync="field"
        v-model.sync="value[field.name]"
        :slot="field.group||field.name"
        :is="field['component']"
        :ref="field.name&&'field'+field.name"
        :class="'form-filed'"
        :key="field.name"
      />
      <error-message
        v-for="field in fields"
        :validation="$v.value[field.name]"
        :slot="field.group||field.name"
        :key="field.name+'msg'"
        :style="{width: (field.style&&field.style.width)?field.style.width:'100%'}"
      />
    </layout>
  </form>
</template>
<script>
  import Layout from './Layout.vue'
  import ErrorMessage from './Message.vue'
  import {validationMixin} from 'vuelidate'
  import * as validators from 'vuelidate/lib/validators'

  var components = {}
  var req = require.context('./components', true)
  req.keys().forEach((key) => {
    var component = req(key).default
    components[component.name] = component
  })

  export default {
    name: 'Form',
    mixins: [validationMixin],
    components: {
      Layout,
      ErrorMessage,
      ...components
    },
    provide () {
      return this
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
          return {}
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
        value: transformValidation(this.validation)
      }
    },
    methods: {
      getValue () {
        return this.value
      },
      setValue (value) {
        this.$emit('input', value)
      },
      validate () {
        this.$v.$touch()
        console.log(this.$v)
        return !this.$v.$error
      },
      _onSubmit (e) {
        this.validate() && this.$emit('submit')
      }
    },
    mounted () {
    }
  }

  function transformValidation (validation) {
    var obj = {}
    for (let name in validation) {
      let validator = validation[name]
      obj[name] = {}
      for (let k in validator) {
        if (typeof validator[k] === 'object') {
          validation[name] = transformValidation(validation[name])
          break
        }
        if (!validators[k]) continue
        obj[name][k] = validator[k] === true ? validators[k] : validators[k](validator[k])
      }
    }
    return obj
  }
</script>
