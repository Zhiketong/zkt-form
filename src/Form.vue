<template>
  <form class="form">
    <form-group>
      <slot name="header"></slot>
    </form-group>
    <form-group
    v-for="row in fields"
    v-bind="row"
    :key="row.name"
    :ref="row.name"
    >
      <div v-for="field in row" :class="field.col|col" :key="field.name">
        <component
          v-bind="field"
          v-model="!field.group?value:value[field.group]"
          :is="field['tagName']"
          :ref="field.name"
        />
        <i class="glyphicon form-control-feedback" v-if="field.icon" :class="['glyphicon-'+field.icon]"></i>
        <p class="help-block">{{field.helpText}}</p>
      </div>
    </form-group>
    <div class="form-group">
      <slot name="footer">
        <input type="submit" class="btn btn-primary">
      </slot>
    </div>
  </form>
</template>
<script>
  import FormGroup from './Group.vue'
  import Label from './Label.vue'
  import Input from './Input.vue'
  import Textarea from './Textarea.vue'
  import Checkbox from './Checkbox.vue'
  import Radio from './Radio.vue'
  import Select from './Select.vue'
  import Static from './Static.vue'

  export default {
    name: 'Form',
    components: {
      FormGroup,
      Label,
      Input,
      Textarea,
      Checkbox,
      Radio,
      Select,
      Static
    },
    filters: {
      col (obj = {md: 12, sm: 12, lg: 12}) {
        var col = []
        for (let k in obj) {
          col.push(`col-${k}-${obj[k]}`)
        }
        return col
      }
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
      }
    }
  }
</script>
