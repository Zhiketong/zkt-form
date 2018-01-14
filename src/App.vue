<template>
  <div id="app">
    <div class="col-md-4">
        <textarea class="form-control" rows="10" v-model="modelText"></textarea>
    </div>
    <div class="col-md-8">
      <Form
        class="form-horizontal"
        :fields="fields"
        ref="form"
        v-model="model"
        @submit.native.prevent="onSubmit">
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
        input: 'input type text',
        number: 11,
        textarea: 'hello textarea',
        checkbox: ['1'],
        radio: '1',
        select: '2',
        'static': '<h3>请注意</h3>这里可以输入<b>HTML</b>哦<br  />哦啦啦换行',
        nested: {
          number11: 22,
          number22: 33
        }
      },
      fields: [
        [{
          tagName: 'Label',
          text: '输入框',
          col: {
            md: 2
          }
        },
        {
          name: 'input',
          tagName: 'Input',
          value: 10,
          icon: 'plus',
          id: 'number',
          col: {
            md: 4
          },
          style: {
            color: 'red',
            fontSize: '14px',
          },
          helpText: '这里才是帮助文本'
        },
        {
          name: 'number',
          tagName: 'Number',
          value: 10,
          icon: 'plus',
          id: 'number',
          col: {
            md: 4
          },
          style: {
            color: 'red',
            fontSize: '14px',
          },
          helpText: '这里才是帮助文本'
        }],
        [{
          name: 'textarea',
          tagName: 'Textarea',
          value: 'hello world textarea',
          col: {
            md: 8
          }
        }],
        [{
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
        }],
        [{
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
        }],
        [{
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
        }],
        [{
            name: 'static',
            tagName: 'Static',
            type: 'number',
            value: 10,
            id: 'static',
            col: {
              md: 4
            },
        }],
        [{
            name: 'number11',
            tagName: 'Input',
            type: 'number',
            group: 'nested',
            value: 10,
            col: {
              md: 4
            }
        },
        {
            name: 'number22',
            tagName: 'Input',
            type: 'number',
            group: 'nested',
            value: 10,
            col: {
              md: 4
            }
        }]
      ]
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
