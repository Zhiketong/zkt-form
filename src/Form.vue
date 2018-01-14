<template>
  <form class="form">
    <form-group>
      <slot name="header"></slot>
    </form-group>
    <form-group
    v-for="(row, index) in fields"
    :key="index"
    >
      <div v-for="field in row" :class="field.col|col" :key="field.name">
        <component
          v-bind="field"
          v-model="!field.group?value:value[field.group]"
          :is="'Form'+field['tagName']"
          :ref="field.name"
        />
        <i class="glyphicon form-control-feedback" v-if="field.icon" :class="['glyphicon-'+field.icon]"></i>
        <p class="help-block">{{field.helpText}}</p>
      </div>
    </form-group>
    <form-group>
      <slot name="footer">
        <input type="submit" class="btn btn-primary">
      </slot>
    </form-group>
  </form>
</template>
<script>
  import FormGroup from './Group.vue'
  import FormLabel from './Label.vue'
  import FormInput from './Input.vue'
  import FormNumber from './Number.vue'
  import FormTextarea from './Textarea.vue'
  import FormCheckbox from './Checkbox.vue'
  import FormRadio from './Radio.vue'
  import FormSelect from './Select.vue'
  import FormStatic from './Static.vue'

  export default {
    name: 'Form',
    components: {
      FormGroup,
      FormLabel,
      FormInput,
      FormNumber,
      FormTextarea,
      FormCheckbox,
      FormRadio,
      FormSelect,
      FormStatic
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
