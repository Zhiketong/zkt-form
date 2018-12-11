<template>
  <layout
  :fields="fields"
  :value="value"
  @form-group-click-fn="formGroupClickFn"
  @submit.prevent="validate()&&$emit('submit')"
  ref="layout"
  >
    <column
      v-for="field in fields"
      :column="field.column"
      :visible="field.visible"
      :value="value"
      :validation="$v.value[field.name]"
      :slot="field.group||field.name"
      :key="field.name"
    >
    <span class="form-control-static form-control-beforetext" v-if="field.beforeText" v-html="field.beforeText"></span>
      <component
        v-bind.sync="field"
        v-model.sync="value[field.name]"
        :is="field['component']"
        :ref="field.name"
        @change="$v.value[field.name]&&$v.value[field.name].$touch()"
        class="form-field"
      />
      <span class="form-control-static form-control-aftertext" v-if="field.afterText" v-html="field.afterText"></span>
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
      formGroupClickFn (obj) {
        this.$emit('form-group-click', obj)
      },
      getValue () {
        return this.value
      },
      setValue (value) {
        this.$emit('input', value)
      },
      getField (name) {
        return this.$refs[name] && this.$refs[name][0]
      },
      addField (field = {}) {
        this.fields.push(field)
      },
      getGroup (name) {
        return this.$refs.layout.getGroup(name)
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
    mounted () {
      var that = this
      that.triggers && that.triggers.forEach((trigger) => {
        var sourceField = that.getField(trigger.source)
        var targetField = that.getField(trigger.target)
        if (!sourceField || !targetField) {
          return
        }
        sourceField.$on(trigger.event, action)
        if (trigger.immediate) {
          action(sourceField[trigger.sourceProp])
        }
        function action (value){
          var val = trigger.sourceProp == 'value' ? value :sourceField[trigger.sourceProp]
          if (trigger.when && val !== trigger.when) {
            return
          }
          if (trigger.targetProp !== 'value') {
            targetField.$emit(`update:${trigger.targetProp}`, val)
          } else {
            targetField.$emit(`input`, value)
          }
        }
      })
    }
  }
</script>

<style media="screen">
  .form-control-beforetext {
    display: inline-block;
    padding-right: 2px;
  }
  .form-control-aftertext {
    display: inline-block;
    padding-left: 2px;
  }
</style>
