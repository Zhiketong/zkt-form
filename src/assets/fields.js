export default [
  {
    name: 'input',
    tagName: 'input',
    value: '',
    label: '输入框',
    helpText:'请输入文本',
    group:'input',
    placeholder:'1111111'
  },
  {
    name: 'number',
    tagName: 'number',
    value: 10,
    label: '数字',
    group:'input'
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
    label: '多选',
    group:'checkbox'
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
    group:"checkbox",
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
    name:'user',
    tagName:'input',
    label:'用户名',
    placeholder:'用户名为邮箱'

  },
  {
    label: '密码',
    name: 'password',
    tagName: 'input',
    type: 'password',
    placeholder: '请填写密码',
    group:"password"
  },
  {
    name: 'repeatPassword',
    tagName: 'input',
    type: 'password',
    placeholder: '确认密码',
    group:"password"
  },
  {
    label: '网址',
    name: 'site',
    tagName: 'input',
    type: 'input',
    placeholder: '请输入有效url',
    
  },
  {
    label: '表达式',
    name:"expression",
    tagName:'static',
    expression: '2*number',
    before:'2<span style="color:#0f0">*</span>number<b>=</b>'
  },
  {
    name: 'submit',
    tagName: 'button',
    type: 'submit',
    label: ' '
  }
  
]
  // user: '',
  // site: '',
  // password: '',
  // repeatPasword: '',
  // level1: '',
  // level2: '',
  // hidden: 'hidden',
  // expression: '2*number={{computedValue}}',
  // submit: '提交',
  // image: '/src/assets/logo.png'