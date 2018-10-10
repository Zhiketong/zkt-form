export default [
  {
    name: 'input',
    component: 'Input',
    value: '',
    label: '输入框',
    style: {width: '33.33%'},
    placeholder: '文本'
  },
  {
    name: 'number',
    component: 'Number',
    value: 10,
    group: 'input',
    style: {width: '33.33%'},
    placeholder: '数字'
  },
  {
    name: 'url',
    component: 'Input',
    value: 'http://www.baidu.com',
    group: 'input',
    style: {width: '33.33%'},
    placeholder: 'url'
  },
  {
    name: 'password',
    component: 'Input',
    type: 'password',
    placeholder: '密码',
    label: '密码',
    style: {width: '50%'},
    show: false
  },
  {
    name: 'repeatPassword',
    component: 'Input',
    type: 'password',
    placeholder: '重复密码',
    group: 'password',
    style: {width: '50%'}
  },
  // {
  //   label: '密码',
  //   name: 'password',
  //   tagName: 'input',
  //   type: 'password',
  //   placeholder: '密码',
  //   group: 'input'
  // },
  {
    name: 'textarea',
    component: 'Textarea',
    label: '文本框'
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
    // group:'checkbox'
  },
  {
    name: 'truefalse',
    component: 'Checkbox',
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
      label: 'option1',
      value: '1'
    }, {
      label: 'option2',
      value: '2'
    }],
    label: '下拉'
  },
  {
    component: 'divider',
    name: 'divider',
    label: ' '
  },
  {
    name: 'static',
    component: 'Static',
    value: '(*@ο@*) 哇～，这里可以输入一些自定义的<b>HTML</b>',
    label: '静态'
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
    label: ' '
  }
]
