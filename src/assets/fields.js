export default [
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
    required: true,
    icon: 'calendar',
    col: {
      md: 5
    }
    // helpText: '这里是文本'
  },
  {
    name: 'number',
    tagName: 'Number',
    value: 10,
    id: 'number',
    col: {
      md: 5
    }
    // helpText: '这里是数字'
  }],
  [{
    tagName: 'Label',
    text: '文本框',
    col: {
      md: 2
    }
  },
  {
    name: 'textarea',
    tagName: 'Textarea',
    col: {
      md: 10
    }
  }],
  [{
    tagName: 'Label',
    text: '多选',
    col: {
      md: 2
    }
  },
  {
    name: 'checkbox',
    tagName: 'Checkbox',
    value: ['1'],
    col: {
      md: 5
    },
    options: [{
      label: 'option1',
      value: '1'
    }, {
      label: 'option2',
      value: '2'
    }]
  },
  {
    name: 'truefalse',
    tagName: 'Checkbox',
    col: {
      md: 5
    },
    options: [{
      label: '是否同意？',
      value: '1'
    }]
  }],
  [{
    tagName: 'Label',
    text: '单选',
    col: {
      md: 2
    }
  },
  {
    name: 'radio',
    tagName: 'Radio',
    value: '1',
    col: {
      md: 10
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
    tagName: 'Label',
    text: '下拉',
    col: {
      md: 2
    }
  },
  {
    name: 'select',
    tagName: 'Select',
    col: {
      md: 10
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
    tagName: 'Static'
  }],
  [{
    tagName: 'Label',
    text: '嵌套',
    col: {
      md: 2
    }
  },
  {
    name: 'number11',
    tagName: 'Input',
    type: 'number',
    group: 'nested',
    value: 10,
    col: {
      md: 5
    }
  },
  {
    name: 'number22',
    tagName: 'Input',
    type: 'number',
    group: 'nested',
    value: 10,
    col: {
      md: 5
    }
  }],
  [{
    tagName: 'Divider'
  }],
  [{
    tagName: 'Label',
    text: '用户名',
    col: {
      md: 2
    }
  },
  {
    name: 'user',
    tagName: 'Input',
    placeholder: '用户名',
    col: {
      md: 10
    },
    icon: 'user'
  }],
  [{
    tagName: 'Label',
    text: '个人主页',
    col: {
      md: 2
    }
  },
  {
    name: 'site',
    tagName: 'Input',
    placeholder: '请输入个人主页地址',
    col: {
      md: 10
    }
  }],
  [{
    tagName: 'Label',
    text: '密码',
    col: {
      md: 2
    }
  },
  {
    name: 'password',
    tagName: 'Input',
    type: 'password',
    placeholder: '密码',
    col: {
      md: 5
    },
    icon: 'ice-lolly'
  },
  {
    name: 'repeatPasword',
    tagName: 'Input',
    type: 'password',
    placeholder: '确认密码',
    col: {
      md: 5
    },
    icon: 'ice-lolly'
  }],
  [{
    tagName: 'Label',
    text: '级联',
    col: {
      md: 2
    }
  },
  {
    name: 'level1',
    tagName: 'Select',
    col: {
      md: 2
    },
    options: [{
      label: '一级1',
      value: '1'
    },
    {
      label: '一级2',
      value: '2'
    }]
  },
  {
    name: 'level2',
    tagName: 'Select',
    col: {
      md: 2
    },
    options: []
  }],
  [{
    name: 'submit',
    tagName: 'Input',
    type: 'submit',
    'class': {
      'btn': true,
      'btn-primary': true,
      'btn-block': true
    }
  }]
]
