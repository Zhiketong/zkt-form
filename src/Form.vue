<template>
  <layout :fields="fields" @submit.prevent="validate()&&$emit('submit')">
    <column
      v-for="field in fields"
      :column="field.column"
      :visible="field.visible"
      :value="value"
      :validation="$v.value[field.name]"
      :slot="field.group||field.name"
      :key="field.name"
    >
    <span class="form-control-static" v-if="field.beforeText" v-html="field.beforeText"></span>
      <component
        v-bind.sync="field"
        v-model.sync="value[field.name]"
        :is="field['component']"
        :ref="field.name"
        class="form-field"
      />
      <span class="form-control-static" v-if="field.afterText" v-html="field.afterText"></span>
    </column>
  </layout>
</template>
<script>
  import Layout from './layout/Layout.vue'
  import Column from './layout/Column.vue'
  import {validationMixin} from 'vuelidate'
  import {transformValidation} from './utils/validators'

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
      Column,
      ...components,
      Boolean: components['Checkbox']
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
        var subError = Object.values(this.$refs).find((item) => {
          var item = item[0]
          return item.validate && !item.validate()
        })

        return !this.$v.$error && !subError
      }
    },
    beforeMount () {
      if (this.fields && this.value) {
        this.fields.forEach((item) => {
          if (!this.value.hasOwnProperty(item.name)) {
            this.value[item.name] = item.value
          }
        })
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
          if (trigger.when && val !== trigger.when) {
            return
          }
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
</script>
