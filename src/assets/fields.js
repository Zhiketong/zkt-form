export default [
  [{
    tagName: 'label',
    text: '输入框',
    col: {
      md: 2
    }
  },
  {
    name: 'input',
    tagName: 'input',
    value: 10,
    required: true,
    icon: 'calendar',
    col: {
      md: 5
    }
  },
  {
    name: 'number',
    tagName: 'number',
    value: 10,
    id: 'number',
    col: {
      md: 5
    }
  }],
  [{
    tagName: 'label',
    text: '文本框',
    col: {
      md: 2
    }
  },
  {
    name: 'textarea',
    tagName: 'textarea',
    col: {
      md: 10
    }
  }],
  [{
    tagName: 'label',
    text: '多选',
    col: {
      md: 2
    }
  },
  {
    name: 'checkbox',
    tagName: 'checkbox',
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
    tagName: 'checkbox',
    col: {
      md: 5
    },
    options: [{
      label: '是否同意？',
      value: '1'
    }]
  }],
  [{
    tagName: 'label',
    text: '单选',
    col: {
      md: 2
    }
  },
  {
    name: 'radio',
    tagName: 'radio',
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
    tagName: 'label',
    text: '下拉',
    col: {
      md: 2
    }
  },
  {
    name: 'select',
    tagName: 'select',
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
    tagName: 'static'
  }],
  [{
    name: 'nested',
    tagName: 'nested',
    nested: true,
    fields: [[{
      tagName: 'label',
      text: '嵌套',
      col: {
        md: 2
      }
    },
    {
      name: 'number11',
      tagName: 'input',
      type: 'number',
      group: 'nested',
      value: 10,
      col: {
        md: 5
      },
      colStyle: {
        paddingRight: '5px'
      }
    },
    {
      name: 'number22',
      tagName: 'input',
      type: 'number',
      group: 'nested',
      value: 10,
      col: {
        md: 5
      },
      colStyle: {
        paddingLeft: '5px'
      }
    }]],
    validation: {
      number11: {
        required: true
      },
      number22: {
        required: true
      }
    }
  }],
  [{
    tagName: 'divider'
  }],
  [{
    tagName: 'label',
    text: '用户名',
    col: {
      md: 2
    }
  },
  {
    name: 'user',
    tagName: 'input',
    placeholder: '用户名',
    col: {
      md: 10
    },
    icon: 'user'
  }],
  [{
    tagName: 'label',
    text: '个人主页',
    col: {
      md: 2
    }
  },
  {
    name: 'site',
    tagName: 'input',
    placeholder: '请输入个人主页地址',
    col: {
      md: 10
    }
  }],
  [{
    tagName: 'label',
    text: '密码',
    col: {
      md: 2
    }
  },
  {
    name: 'password',
    tagName: 'input',
    type: 'password',
    placeholder: '密码',
    col: {
      md: 5
    },
    icon: 'ice-lolly'
  },
  {
    name: 'repeatPasword',
    tagName: 'input',
    type: 'password',
    placeholder: '确认密码',
    col: {
      md: 5
    },
    icon: 'ice-lolly'
  }],
  [{
    tagName: 'label',
    text: '级联',
    col: {
      md: 2
    }
  },
  {
    name: 'level1',
    tagName: 'select',
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
    tagName: 'select',
    col: {
      md: 2
    },
    options: [{
      label: '二级1',
      value: '1'
    },
    {
      label: '二级2',
      value: '2'
    }]
  }],
  [{
    tagName: 'label',
    text: '表达式',
    col: {
      md: 2
    }
  },
  {
    tagName: 'static',
    name: 'expression',
    expression: '2*number',
    before: '2<span style="color:#0f0">*</span>number<b>=</b>',
    col: {
      md: 10
    }
  }],
  [{
    name: 'submit',
    tagName: 'input',
    type: 'submit',
    'class': {
      'btn': true,
      'btn-primary': true,
      'btn-block': true
    }
  }],
  [{
    name: 'hidden',
    tagName: 'input',
    type: 'hidden'
  }]
]
