export default [
  {
    name: 'input',
    component: 'Input',
    value: '',
    label: '输入框',
    style: 'width: 33.33%'
  },
  {
    name: 'number',
    component: 'number',
    value: 10,
    group: 'input',
    style: 'width: 33.33%'
  },
  {
    name: 'password',
    component: 'Input',
    type: 'password',
    placeholder: '密码',
    group: 'input',
    style: 'width: 33.33%'
  },
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
    label: '多选'
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
    name: 'divider'
  },
  {
    name: 'static',
    component: 'Static',
    value: 'xxxxx',
    label: '静态'
  },
  {
    name: 'image',
    component: 'Img',
    label: '图片'
  },
  {
    name: 'submit',
    component: 'Button',
    type: 'submit',
    label: ' '
  }
]
