export default [
  [{
    tagName: 'label',
    text: '输入框'
  },
  {
    name: 'input',
    tagName: 'input',
    value: 10,
    required: true,
    icon: 'calendar',
    col: {
      sm: 5
    }
  },
  {
    name: 'number',
    tagName: 'number',
    value: 10,
    beforeHtml: 'hello',
    id: 'number',
    style: {
      width: '50%'
    },
    col: {
      sm: 5
    },
    hide: true
  }],
  [{
    tagName: 'label',
    text: '文本框'
  },
  {
    name: 'textarea',
    tagName: 'textarea'
  }],
  [{
    tagName: 'label',
    text: '多选'
  },
  {
    name: 'checkbox',
    tagName: 'checkbox',
    value: ['1'],
    col: {
      sm: 5
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
      sm: 5
    },
    options: [{
      label: '是否同意？',
      value: '1'
    }],
    trueValue: '1',
    falseValue: '0'
  }],
  [{
    tagName: 'label',
    text: '单选'
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
    relyKey: 'select',
    relyVal: '2'
  }],
  [{
    tagName: 'label',
    text: '下拉'
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
    relyKey: 'radio',
    relyVal: '1'
  }],
  [{
    name: 'static',
    tagName: 'static',
    col: {
      sm: 12
    }
  }],
  [{
    tagName: 'label',
    text: '图片'
  },
  {
    name: 'image',
    tagName: 'image'
  }],
  [{
    tagName: 'label',
    text: '嵌套'
  },
  {
    name: 'nested',
    tagName: 'nested',
    'class': 'well',
    fields: [[{
      name: 'number11',
      tagName: 'input',
      type: 'number',
      group: 'nested',
      value: 10,
      col: {
        sm: 5
      },
      colStyle: {
        // paddingRight: '5px'
      }
    },
    {
      name: 'number22',
      tagName: 'input',
      type: 'number',
      group: 'nested',
      value: 10,
      col: {
        sm: 5
      },
      colStyle: {
        // paddingLeft: '5px'
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
    text: '用户名'
  },
  {
    name: 'user',
    tagName: 'input',
    placeholder: '用户名',
    icon: 'user'
  }],
  [{
    tagName: 'label',
    text: '个人主页'
  },
  {
    name: 'site',
    tagName: 'input',
    placeholder: '请输入个人主页地址'
  }],
  [{
    tagName: 'label',
    text: '密码'
  },
  {
    name: 'password',
    tagName: 'input',
    type: 'password',
    placeholder: '密码',
    col: {
      sm: 5
    },
    icon: 'ice-lolly'
  },
  {
    name: 'repeatPasword',
    tagName: 'input',
    type: 'password',
    placeholder: '确认密码',
    col: {
      sm: 5
    },
    icon: 'ice-lolly'
  }],
  [{
    tagName: 'label',
    text: '级联'
  },
  {
    name: 'level1',
    tagName: 'select',
    col: {
      sm: 2
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
      sm: 2
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
    text: '表达式'
  },
  {
    tagName: 'static',
    name: 'expression',
    expression: '2*number',
    before: '2<span style="color:#0f0">*</span>number<b>=</b>'
  }],
  [{
    name: 'submit',
    tagName: 'button',
    type: 'submit',
    'class': {
      'btn': true,
      'btn-primary': true,
      'btn-block': true
    },
    col: {
      sm: 2,
      'sm-offset': 2
    }
  }],
  [{
    name: 'hidden',
    tagName: 'input',
    type: 'hidden'
  }]
]
