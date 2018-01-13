<template>
  <div id="app">
    <div class="col-md-4">
      <div class="">
        <textarea class="form-control" rows="10" v-model="modelText">{{model}}</textarea>
      </div>
    </div>
    <div class="col-md-8">
      <Form class="form-horizontal" :fields="fields" :layout="layout" ref="form" v-model="model" @submit.native.prevent="onSubmit">
        <button type="submit" slot="footer">button</button>
      </Form>
    </div>

  </div>
</template>

<script>
import Form from './Form.vue'
export default {
  name: 'app',
  components: {
    Form
  },
  computed: {
    modelText: {
      get () {
        return JSON.stringify(this.model)
      },
      set (text) {
        this.model = JSON.parse(text)
      }
    }
  },
  data () {
    return {
      model: {
        number: 101,
        number2: 11,
        textarea: 'hello textarea',
        checkbox: ['1'],
        radio: '1',
        select: '2',
        'static': '静态文本',
        'static2': '<h3>请注意</h3>这里可以输入<b>HTML</b>哦<br  />哦啦啦换行',
        nested: {
          number11: 22,
          number22: 33
        }
      },
      fields: {
        number: {
            name: 'number',
            tagName: 'Input',
            type: 'number',
            value: 10,
            icon: 'plus',
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
        },
        'static': {
            name: 'static',
            tagName: 'Static',
            type: 'number',
            value: 10,
            id: 'static',
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
        },
        'static2': {
            name: 'static',
            tagName: 'Static',
            type: 'number',
            value: 10,
            col: {
              md: 4
            }
        },
        number11: {
            name: 'number11',
            tagName: 'Input',
            type: 'number',
            value: 11,
            icon: 'plus',
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
        number22: {
            name: 'number22',
            tagName: 'Input',
            type: 'number',
            value: 22,
            icon: 'plus',
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
      },
      layout: [{
        name: 'group1',
        nested: false,
        // helpText: '这里是帮助文本',
        label: {
          text: '输入框',
          'for': 'number',
          col: {
            md: 2
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
            md: 2
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
            md: 2
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
            md: 2
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
            md: 2
          }
        },
        fields: ['select']
      },
      {
        name: 'group6',
        label: {
          text: '静态',
          'for': 'static',
          col: {
            md: 2
          }
        },
        fields: ['static']
      },
      {
        name: 'group7',
        fields: ['static2']
      },
      {
        name: 'nested',
        nested: true,
        // helpText: '这里是帮助文本',
        label: {
          text: '嵌套',
          'for': 'number',
          col: {
            md: 2
          }
        },
        fields: ['number11', 'number22']
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
