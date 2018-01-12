<template>
  <div id="app">{{model}}
    <Form class="form-horizontal" :fields="fields" :layout="layout" ref="form" v-model="model" @submit.native.prevent="onSubmit">
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
        number2: 11,
        textarea: 'hello textarea',
        checkbox: ['1'],
        radio: '1',
        select: '2'
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
        },
        checkbox: {
          name: 'checkbox',
          tagName: 'Checkbox',
          value: ['1'],
          col: {
            md: 8
          },
          options: [{
            label: 'option1',
            value: '1'
          }, {
            label: 'option2',
            value: '2'
          }]
        },
        radio: {
          name: 'radio',
          tagName: 'Radio',
          value: '1',
          col: {
            md: 8
          },
          options: [{
            label: 'option1',
            value: '1'
          }, {
            label: 'option2',
            value: '2'
          }]
        },
        select: {
          name: 'select',
          tagName: 'Select',
          col: {
            md: 8
          },
          options: [{
            label: 'option1',
            value: '1'
          }, {
            label: 'option2',
            value: '2'
          }]
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
        label: {
          text: '文本',
          'for': 'textarea',
          col: {
            md: 4
          }
        },
        fields: ['textarea']
      },
      {
        name: 'group3',
        label: {
          text: '多选',
          'for': 'checkbox',
          col: {
            md: 4
          }
        },
        fields: ['checkbox']
      },
      {
        name: 'group4',
        label: {
          text: '单选',
          'for': 'radio',
          col: {
            md: 4
          }
        },
        fields: ['radio']
      },
      {
        name: 'group5',
        label: {
          text: '下拉',
          'for': 'select',
          col: {
            md: 4
          }
        },
        fields: ['select']
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
