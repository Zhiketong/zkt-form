<template>
  <layout
  :fields="fields"
  :value="value"
  :field.sync="context"
  @submit.prevent="validate()&&$emit('submit')"
  ref="layout"
  >
    <column
      v-for="field in fields"
      v-show="!field.dependOnName||value[field.dependOnName]===field.dependOnValue||value[field.dependOnName]!==field.dependOnFalseValue"
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
        @active="setCurrent"
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
    directives: {
      hide (el, binding, vnode) {
        el.style.display = binding.value ? 'none' : ''
      }
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
    data () {
      return {
        context: {},
        current: {}
      }
    },
    watch: {
      context (nv, ov) {
        this.current = {}
        this.$emit('active', nv)
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
        return this.$refs[name] && this.$refs[name][0]
      },
      addField (field = {}) {
        if (this.context.component == 'Form') {
          this.context.fields.push(field)
          this.$set(this.value, field.name, {})
        } else if (this.context.component == 'List') {
          this.context.fields.push(field)
          this.$set(this.value, field.name, [])
        } else {
          this.fields.push(field)
          this.context = field
        }
      },
      removeField () {
        if (this.current.name) {
          let index = this.context.fields.indexOf(this.current)
          index > -1 && this.context.fields.splice(index, 1)
          this.current = {}
        } else {
          let index = this.fields.indexOf(this.context)
          index > -1 && this.fields.splice(index, 1)
          this.context = {}
        }
      },
      setCurrent (field) {
        this.current = field
        this.$emit('active', field)
      },
      getGroup (name) {
        return this.$refs.layout.getGroup(name)
      },
      validate () {
        this.$v.$touch()
        var subError = Object.values(this.$refs).find((item, index) => {
          var item = item.length ? item[0] : item
          return item.validate && !item.validate()
        })
        return !this.$v.$error && !subError
      }
    },
    mounted () {
    }
  }
</script>

<style media="screen">
  .form-control-beforetext {
    display: inline;
    padding-right: 2px;
  }
  .form-control-aftertext {
    display: inline;
    padding-left: 2px;
  }
</style>
