export default [
  {
    name: 'input',
    tagName: 'input',
    value: '',
    label: '输入框'
  },
  {
    name: 'number',
    tagName: 'number',
    value: 10,
    group: 'input'
  },
  {
    name: 'password',
    tagName: 'input',
    type: 'password',
    placeholder: '密码',
    group: 'input'
  },
  {
    name: 'textarea',
    tagName: 'textarea',
    label: '文本框'
  },
  {
    name: 'checkbox',
    tagName: 'checkbox',
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
    tagName: 'checkbox',
    group: 'checkbox',
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
    tagName: 'radio',
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
    tagName: 'select',
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
    name: 'static',
    tagName: 'static',
    label: '静态'
  },
  {
    name: 'image',
    tagName: 'image',
    label: '图片'
  },
  {
    tagName: 'divider',
    name: 'divider',
  },
  {
    name: 'submit',
    tagName: 'button',
    type: 'submit',
    label: ' '
  }
]
