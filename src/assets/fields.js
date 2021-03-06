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
    column: 'col-sm-2',
    placeholder: '数字'
  },
  {
    name: 'number2',
    component: 'Number',
    value: 10,
    group: 'input',
    column: 'col-sm-2',
    placeholder: '数字'
  },
  {
    name: 'url',
    component: 'Input',
    column: 'col-sm-4',
    value: '',
    group: 'input',
    placeholder: 'url',
    options: [
      'https://www.baidu.com',
      'https://www.google.com'
    ]
  },
  {
    name: 'password',
    component: 'Input',
    type: 'password',
    placeholder: '密码',
    label: '密码',
    column: 'col-sm-6',
    visible: false,
    afterText: '*',
    style: {
      width: '100px'
    },
    icon: 'glyphicon-calendar'
  },
  {
    name: 'repeatPassword',
    component: 'Input',
    type: 'password',
    placeholder: '重复密码',
    group: 'password',
    column: 'col-sm-6'
  },
  {
    name: 'textarea',
    component: 'Textarea',
    label: '文本框',
    class: 'col-sm-2',
    placeholder: 'holder文案',
    message: '自定义错误消息'
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
    optionValueName: 'value',
    checkAll: true
  },
  {
    name: 'truefalse',
    component: 'Boolean',
    // group: 'checkbox',
    options: [{
      label: '是否同意？',
      value: 1
    }],
    trueValue: 1,
    falseValue: 0,
    label: '布尔',
    helpText: '勾选后将影响单选'
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
    label: '单选',
    dependOnName: 'truefalse',
    dependOnValue: '1'
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
    name: 'range',
    component: 'Range',
    label: '值域',
    max: 100,
    min: 0,
    step: 1
  },
  {
    name: 'switch',
    component: 'SlideSwitch',
    label: '开关',
    trueValue: 1,
    falseValue: 0
  },
  {
    name: 'inputNumber',
    label: '数字输入框',
    component: 'InputNumber',
    disabled: false,
    placeholder: "请输入...",
    min: 0,
    max: 100,
    step: 1,
    size:'',
  },
  {
    component: 'divider',
    name: 'divider',
    label: '',
    title: 'hello',
  },
  {
    name: 'static',
    component: 'Static',
    innerHTML: '自定义的<b style="color:red">HTML</b>',
    label: '静态',
    beforeText: 'before text',
    afterText: 'after text',
    style: {
      width: '200px'
    }
  },
  {
    name: 'image',
    component: 'Img',
    label: '图片',
    style: 'width: 50px',
    value: '/src/assets/logo.png'
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
    name: 'list',
    label: '列表 ',
    component: 'List',
    fields: [
      {
        name: 'nested1',
        component: 'Input',
        label: '嵌套',
        column: 'col-sm-6'
      },
      {
        name: 'nested2',
        component: 'Input',
        group: 'nested1',
        column: 'col-sm-6'
      },
    ],
    validation: {
      nested2: {
        required: true
      }
    }
  },
  {
    name: 'custom',
    component: 'Custom',
    label: '自定义'
  },
  {
    name: 'submit',
    component: 'Button',
    type: 'submit',
    label: ' ',
    disabled: false
  }
]
