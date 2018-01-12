<template>
  <div id="app">
    <Form :fields="fields" :layout="layout" ref="form" v-model="model" @submit.native.prevent="onSubmit">
      <button type="submit" slot="footer">button</button>
    </Form>
  </div>
</template>

<script>
import Form from './Form.vue'
export default {
  name: 'app',
  components: {
    Form
  },
  data () {
    return {
      model: {
        number: 101,
        number2: 11
      },
      fields: {
        number: {
            name: 'number',
            tagName: 'Input',
            type: 'number',
            value: 10,
            id: 'hello',
            label: 'Hello',
            'class': {
              foo: true,
              bar: false
            },
            col: {
              md: 4
            },
            style: {
              color: 'red',
              fontSize: '14px',
            }
        },
        number2: {
            name: 'number2',
            tagName: 'Input',
            type: 'number',
            value: 10,
            id: 'hello',
            label: 'Hello',
            'class': {
              foo: true,
              bar: false
            },
            col: {
              md: 4
            },
            style: {
              color: 'red',
              fontSize: '14px',
            }
        }
      },
      layout: [{
        name: 'group1',
        nested: false,
        helpText: '这里是帮助文本',
        label: {
          text: 'label',
          col: {
            md: 3
          }
        },
        fields: ['number', 'number2']
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit')
    }
  },
  mounted () {
    console.log(this.$refs.form)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
