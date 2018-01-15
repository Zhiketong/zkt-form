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
    col: {
      md: 5
    },
    helpText: '这里是文本'
  },
  {
    name: 'number',
    tagName: 'Number',
    value: 10,
    id: 'number',
    col: {
      md: 5
    },
    helpText: '这里是数字'
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
    tagName: 'Label',
    text: 'html',
    col: {
      md: 2
    }
  },
  {
    name: 'static',
    tagName: 'Static',
    type: 'number',
    value: 10,
    id: 'static',
    col: {
      md: 4
    }
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
    name: 'submit',
    tagName: 'Input',
    type: 'submit',
    'class': {
      'btn': true,
      'btn-primary': true,
      'btn-block': true
    }
  }],
  [{
    name: 'exbutton',
    tagName: 'Button'
  }]
]
