<template>
  <div id="app">{{model}}
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
            id: 'number',
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
            },
            helpText: '这里才是帮助文本'
        },
        number2: {
            name: 'number2',
            tagName: 'Input',
            type: 'range',
            value: 10,
            id: 'hello',
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
        textarea: {
          name: 'textarea',
          tagName: 'Textarea',
          value: 'hello world textarea',
          col: {
            md: 8
          }
        }
      },
      layout: [{
        name: 'group1',
        nested: false,
        // helpText: '这里是帮助文本',
        label: {
          text: '输入框',
          'for': 'number',
          col: {
            md: 4
          }
        },
        fields: ['number', 'number2']
      },
      {
        name: 'group2',
        nested: false,
        // helpText: '这里是帮助文本',
        label: {
          text: '文本',
          'for': 'textarea',
          col: {
            md: 4
          }
        },
        fields: ['textarea']
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
