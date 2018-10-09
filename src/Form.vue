<template>
  <form class="form" @submit.prevent="_onSubmit">
    <layout :fields="fields" :validation="$v.value">
      <component
        v-for="field in fields"
        v-bind.sync="field"
        v-model.sync="value[field.name]"
        v-show="field.show||!field.hasOwnProperty('show')"
        :slot="field.group||field.name"
        :is="field['component']"
        :ref="field.name"
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
      getField (name) {
        return this.$refs[name][0]
      },
      validate () {
        this.$v.$touch()
        return !this.$v.$error
      },
      _onSubmit (e) {
        this.validate() && this.$emit('submit')
      }
    },
    mounted () {
      var that = this
      that.triggers && that.triggers.forEach((trigger) => {
        var sourceField = that.getField(trigger.source)
        var targetField = that.getField(trigger.target)
        if (!sourceField || !targetField) {
          return
        }
        sourceField.$on(trigger.event, (value) => {
          var val = trigger.sourceProp == 'value' ? value :sourceField[trigger.sourceProp]
          if (trigger.targetProp !== 'value') {
            targetField.$emit(`update:${trigger.targetProp}`, val)
          } else {
            targetField.$emit(`input`, value)
          }
        })
        if (trigger.immediate) {
          sourceField.$emit(trigger.event, sourceField[trigger.sourceProp])
        }
      })
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
