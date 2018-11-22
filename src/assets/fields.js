export default [
  {
    name: 'input',
    component: 'Input',
    value: '',
    label: '输入框',
    column: 'a',
    placeholder: '文本'
  },
  {
    name: 'number',
    component: 'Number',
    value: 10,
    group: 'input',
    column: 'col-sm-4',
    placeholder: '数字',
    visible (value) {
      return value.input === '010-2222222'
    }
  },
  {
    name: 'url',
    component: 'Input',
    column: 'col-sm-4',
    value: 'http://www.baidu.com',
    group: 'input',
    placeholder: 'url'
  },
  {
    name: 'password',
    component: 'Input',
    type: 'password',
    placeholder: '密码',
    label: '密码',
    style: {width: '50%'},
    visible: false
  },
  {
    name: 'repeatPassword',
    component: 'Input',
    type: 'password',
    placeholder: '重复密码',
    group: 'password',
    style: {width: '50%'}
  },
  {
    name: 'textarea',
    component: 'Textarea',
    label: '文本框',
    class: 'col-sm-2'
  },
  {
    name: 'checkbox',
    component: 'Checkbox',
    value: ['1'],
    options: [{
      label: 'option1',
      value: '1'
    }, {
      label: 'option2',
      value: '2'
    }],
    label: '多选',
    optionKeyName: 'label',
    optionValueName: 'value'
    // group:'checkbox'
  },
  {
    name: 'truefalse',
    component: 'Boolean',
    // group: 'checkbox',
    options: [{
      label: '是否同意？',
      value: '1'
    }],
    trueValue: '1',
    falseValue: '0',
    label: '布尔'

  },
  {
    name: 'radio',
    component: 'radio',
    value: '1',
    options: [{
      label: 'option1',
      value: '1'
    }, {
      label: 'option2',
      value: '2'
    }],
    label: '单选'
  },
  {
    // group:"checkbox",
    name: 'select',
    component: 'Select',
    options: [{
      label1: 'option1',
      value: '1'
    }, {
      label1: 'option2',
      value: '2'
    }],
    label: '下拉',
    optionKeyName: 'label1',
    optionValueName: 'value'
  },
  {
    component: 'divider',
    name: 'divider',
    label: ' ',
    title: 'hello'
  },
  {
    name: 'static',
    component: 'Static',
    value: '自定义的<b>HTML</b>',
    label: '静态',
    beforeText: 'before text',
    afterText: 'after text'
  },
  {
    name: 'image',
    component: 'Img',
    label: '图片'
  },
  {
    name: 'nested',
    component: 'Form',
    label: ' ',
    fields: [
      {
        name: 'nested1',
        component: 'Number',
        label: '嵌套',
        style: 'width: 50%'
      },
      {
        name: 'nested2',
        component: 'Input',
        group: 'nested1',
        style: 'width: 50%'
      },
    ],
    validation: {
      nested2: {
        required: true
      }
    }
  },
  {
    name: 'submit',
    component: 'Button',
    type: 'submit',
    label: ' ',
    disabled: false
  }
]
