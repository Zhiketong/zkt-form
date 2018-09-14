<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <layout :fields="fields">
      <component
        v-for="field in fields"
        v-bind.sync="field"
        v-model.sync="value[field.name]"
        :slot="field.group||field.name"
        :is="field['component']"
        :ref="field.name&&'field'+field.name"
        :key="field.name"
      />
    </layout>
  </form>
</template>
<script>
  import Layout from './Layout.vue'

  export default {
    name: 'Form',
    components: {
      Layout
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
    methods: {

    }
  }
</script>
