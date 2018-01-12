<template>
  <form class="form">
    <form-group>
      <slot name="header"></slot>
    </form-group>
    <form-group
    v-for="group in layout"
    v-bind="group"
    :key="group.name"
    :ref="group.name"
    >
      <div :class="group.label.col|col" v-if="group.label">
        <Label v-bind="group.label" />
      </div>
      <div v-for="field in group.fields" :class="fields[field].col|col">
        <component
          v-if="fields[field]"
          v-bind="fields[field]"
          v-model="group.nested?value[group.name]:value[field]"
          :key="field"
          :is="fields[field]['tagName']"
          :ref="field"
        />
      <p class="help-block">{{fields[field].helpText}}</p>
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

  export default {
    name: 'Form',
    components: {
      FormGroup,
      Label,
      Input,
      Textarea,
      Checkbox
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
        type: Object,
        default () {
          return {}
        }
      },
      layout: {
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
