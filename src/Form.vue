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
      <div :class="group.label.col|col">
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

  export default {
    name: 'Form',
    components: {
      Label,
      FormGroup,
      Input
    },
    filters: {
      col (obj = {}) {
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
